import { useEffect, useMemo, useState } from 'react'
import { roles } from './data/roles'
import { skills } from './data/skills'
import { transitions } from './data/transitions'
import {
  getNextRecommendedStage,
  getRecommendedNextSkills,
  getRoleMatch,
  getSkillGaps,
  getStageProgress,
  getTransitionProgress,
  type UserSkillState,
} from './lib/scoring'
import './App.css'

const DEVOPS_ROLE_ID = 'devops'
const DEFAULT_FROM_ROLE_ID = 'it-support'
const SKILL_LEVELS = new Set([0, 1, 2, 3, 4])

const initialSkills: UserSkillState[] = skills.map((skill) => ({
  skillId: skill.id,
  currentLevel: 0,
}))

function getPreferredTheme(): 'light' | 'dark' {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function isValidRoleId(roleId: string | null): roleId is string {
  return !!roleId && roles.some((role) => role.id === roleId)
}

function getInitialTheme(): 'light' | 'dark' {
  const params = new URLSearchParams(window.location.search)
  const themeFromUrl = params.get('theme')
  if (themeFromUrl === 'dark' || themeFromUrl === 'light') {
    return themeFromUrl
  }
  return getPreferredTheme()
}

function getInitialFromRoleId() {
  const params = new URLSearchParams(window.location.search)
  const from = params.get('from')
  return isValidRoleId(from) ? from : DEFAULT_FROM_ROLE_ID
}

function getInitialTargetRoleId() {
  const params = new URLSearchParams(window.location.search)
  const target = params.get('target')
  return isValidRoleId(target) ? target : DEVOPS_ROLE_ID
}

function parseSkillsFromUrl(): UserSkillState[] {
  const params = new URLSearchParams(window.location.search)
  const skillsParam = params.get('skills')
  if (!skillsParam) return initialSkills

  const knownSkills = new Map<string, 0 | 1 | 2 | 3 | 4>(
  skills.map((skill) => [skill.id, 0 as 0 | 1 | 2 | 3 | 4]),
)

  for (const pair of skillsParam.split(',')) {
    const [skillIdRaw, levelRaw] = pair.split(':')
    const skillId = skillIdRaw?.trim()
    const level = Number(levelRaw)

    if (!skillId || !knownSkills.has(skillId) || !SKILL_LEVELS.has(level)) continue
    knownSkills.set(skillId, level as 0 | 1 | 2 | 3 | 4)
  }

  return skills.map((skill) => ({
    skillId: skill.id,
    currentLevel: knownSkills.get(skill.id) as 0 | 1 | 2 | 3 | 4,
  }))
}

function serializeSkillsToUrl(userSkills: UserSkillState[]) {
  return userSkills
    .filter((item) => item.currentLevel > 0)
    .map((item) => `${item.skillId}:${item.currentLevel}`)
    .join(',')
}

function fallbackCopyText(text: string) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-9999px'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()

  try {
    return document.execCommand('copy')
  } finally {
    document.body.removeChild(textarea)
  }
}

function getGapGroupLabel(requiredLevel: number) {
  if (requiredLevel >= 3) return 'Нужно прокачать сильнее'
  if (requiredLevel === 2) return 'Средний приоритет'
  return 'Можно добрать позже'
}

function App() {
  const [fromRoleId, setFromRoleId] = useState(getInitialFromRoleId)
  const [targetRoleId, setTargetRoleId] = useState(getInitialTargetRoleId)
  const [userSkills, setUserSkills] = useState<UserSkillState[]>(parseSkillsFromUrl)
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle')
  const [resetState, setResetState] = useState<'idle' | 'done'>('idle')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    const params = new URLSearchParams(window.location.search)
    params.set('theme', theme)
    params.set('from', fromRoleId)
    params.set('target', targetRoleId)

    const serializedSkills = serializeSkillsToUrl(userSkills)
    if (serializedSkills) {
      params.set('skills', serializedSkills)
    } else {
      params.delete('skills')
    }

    const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`
    window.history.replaceState({}, '', nextUrl)
  }, [theme, fromRoleId, targetRoleId, userSkills])

  useEffect(() => {
    if (copyState === 'idle') return
    const timeoutId = window.setTimeout(() => setCopyState('idle'), 2200)
    return () => window.clearTimeout(timeoutId)
  }, [copyState])

  useEffect(() => {
    if (resetState === 'idle') return
    const timeoutId = window.setTimeout(() => setResetState('idle'), 2200)
    return () => window.clearTimeout(timeoutId)
  }, [resetState])

  useEffect(() => {
    const fromTitle = roles.find((role) => role.id === fromRoleId)?.title ?? 'Старт'
    const targetTitle = roles.find((role) => role.id === targetRoleId)?.title ?? 'Цель'
    document.title = `${fromTitle} → ${targetTitle} · Career RPG`
  }, [fromRoleId, targetRoleId])

  const isAlreadyTarget = fromRoleId === targetRoleId
  const isDevopsCurrent = fromRoleId === DEVOPS_ROLE_ID

  const availableTransitions = useMemo(
    () => transitions.filter((item) => item.fromRoleId === fromRoleId),
    [fromRoleId],
  )

  const selectedTransition = useMemo(() => {
    if (isAlreadyTarget) return null
    return transitions.find(
      (item) => item.fromRoleId === fromRoleId && item.toRoleId === targetRoleId,
    )
  }, [fromRoleId, targetRoleId, isAlreadyTarget])

  const match = useMemo(() => getRoleMatch(targetRoleId, userSkills), [targetRoleId, userSkills])
  const gaps = useMemo(() => getSkillGaps(targetRoleId, userSkills), [targetRoleId, userSkills])
  const recommendedSkills = useMemo(
    () => getRecommendedNextSkills(targetRoleId, userSkills, 3),
    [targetRoleId, userSkills],
  )

  const transitionProgress = useMemo(
    () => (selectedTransition ? getTransitionProgress(selectedTransition, userSkills) : null),
    [selectedTransition, userSkills],
  )

  const nextStage = useMemo(
    () => (selectedTransition ? getNextRecommendedStage(selectedTransition, userSkills) : null),
    [selectedTransition, userSkills],
  )

  function updateSkill(skillId: string, level: number) {
    setUserSkills((prev) =>
      prev.map((item) =>
        item.skillId === skillId
          ? { ...item, currentLevel: level as 0 | 1 | 2 | 3 | 4 }
          : item,
      ),
    )
  }

  async function copyRouteLink() {
    const url = window.location.href

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url)
        setCopyState('success')
        setResetState('idle')
        return
      }

      const copied = fallbackCopyText(url)
      setCopyState(copied ? 'success' : 'error')
      setResetState('idle')
    } catch {
      const copied = fallbackCopyText(url)
      setCopyState(copied ? 'success' : 'error')
      setResetState('idle')
    }
  }

  function resetRoute() {
    setFromRoleId(DEFAULT_FROM_ROLE_ID)
    setTargetRoleId(DEVOPS_ROLE_ID)
    setUserSkills(initialSkills)
    setCopyState('idle')
    setResetState('done')
  }

  function getSkillTitle(skillId: string) {
    return skills.find((item) => item.id === skillId)?.title ?? skillId
  }

  function getSkillLevelMeta(skillId: string, level: number) {
    const skill = skills.find((item) => item.id === skillId)
    return skill?.levels.find((item) => item.level === level)
  }

  function getStageStatusLabel(status: 'not-started' | 'in-progress' | 'completed') {
    if (status === 'completed') return 'Закрыт'
    if (status === 'in-progress') return 'В процессе'
    return 'Не начат'
  }

  function groupGapItems(items: Array<{ skillId: string; currentLevel: number; requiredLevel: number }>) {
    const groups = new Map<string, Array<{ skillId: string; currentLevel: number; requiredLevel: number }>>()

    for (const item of items) {
      const label = getGapGroupLabel(item.requiredLevel)
      const group = groups.get(label) ?? []
      group.push(item)
      groups.set(label, group)
    }

    return Array.from(groups.entries())
  }

  function renderCompactGapList(
    items: Array<{ skillId: string; currentLevel: number; requiredLevel: number }>,
    emptyText: string,
  ) {
    if (items.length === 0) {
      return <p className="compact-empty">{emptyText}</p>
    }

    const groupedItems = groupGapItems(items)

    return (
      <div className="compact-groups">
        {groupedItems.map(([groupTitle, groupItems]) => (
          <section className="compact-group" key={groupTitle}>
            <div className="compact-group-head">
              <strong>{groupTitle}</strong>
              <span className="compact-group-count">{groupItems.length}</span>
            </div>

            <div className="compact-skill-list two-columns">
              {groupItems.map((item) => (
                <article className="compact-skill-item" key={item.skillId}>
                  <div className="compact-skill-top">
                    <strong>{getSkillTitle(item.skillId)}</strong>
                    <span className="compact-target-badge">lvl {item.requiredLevel}</span>
                  </div>

                  <div className="compact-progress-row" aria-hidden="true">
                    <div className="compact-progress-track">
                      <div
                        className="compact-progress-fill"
                        style={{ width: `${(item.currentLevel / Math.max(item.requiredLevel, 1)) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="compact-meta-row">
                    <span className="compact-now">Сейчас {item.currentLevel}</span>
                    <span className="compact-arrow">→</span>
                    <span className="compact-need">Цель {item.requiredLevel}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    )
  }

  return (
    <main className="app-shell">
      <section className="toolbar">
        <div className="toolbar-actions">
          <button
            type="button"
            className="ghost-button"
            onClick={copyRouteLink}
            aria-label="Скопировать ссылку на мой маршрут"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>Скопировать ссылку на мой маршрут</span>
          </button>

          <button
            type="button"
            className="ghost-button danger-button"
            onClick={resetRoute}
            aria-label="Сбросить маршрут"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
            <span>Сбросить маршрут</span>
          </button>

          <button
            type="button"
            className="theme-toggle icon-toggle"
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
            title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2" />
                <path d="M12 21v2" />
                <path d="M4.22 4.22l1.42 1.42" />
                <path d="M18.36 18.36l1.42 1.42" />
                <path d="M1 12h2" />
                <path d="M21 12h2" />
                <path d="M4.22 19.78l1.42-1.42" />
                <path d="M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </section>

      {(copyState !== 'idle' || resetState !== 'idle') && (
        <div
          className={`toast ${
            resetState === 'done' ? 'neutral' : copyState === 'success' ? 'success' : 'error'
          }`}
          role="status"
          aria-live="polite"
        >
          {resetState === 'done'
            ? 'Маршрут сброшен к начальному состоянию'
            : copyState === 'success'
              ? 'Ссылка на маршрут скопирована'
              : 'Не удалось скопировать автоматически'}
        </div>
      )}

      <section className="card hero">
        <p className="eyebrow">Career RPG MVP</p>
        <h1>Переход в DevOps по стартовой роли</h1>
        <p className="lead">
          Выбери текущую роль, оцени навыки и посмотри детальный путь до DevOps Engineer.
        </p>
      </section>

      <section className="grid two-col">
        <div className="card stack">
          <h2>Стартовая точка</h2>

          <label>
            Текущая роль
            <select value={fromRoleId} onChange={(e) => setFromRoleId(e.target.value)}>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.title}
                </option>
              ))}
            </select>
          </label>

          <label>
            Целевая роль
            <select value={targetRoleId} onChange={(e) => setTargetRoleId(e.target.value)}>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.title}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="card stack">
          <h2>Доступные переходы</h2>

          {isAlreadyTarget ? (
            <div className="inline-note success">
              <strong>Ты уже в целевой роли.</strong>
              <span className="muted">
                Для текущей пары ролей roadmap не нужен — можно показывать только развитие внутри DevOps.
              </span>
            </div>
          ) : availableTransitions.length === 0 ? (
            <p className="muted">Для этой стартовой роли переходы пока не описаны.</p>
          ) : (
            <ul className="list transition-list">
              {availableTransitions.map((item) => (
                <li
                  key={item.id}
                  className={item.toRoleId === targetRoleId ? 'transition-item active' : 'transition-item'}
                >
                  <strong>{item.title}</strong>
                  <span className="muted">{item.description}</span>
                  <span className="meta">
                    Сложность: {item.difficulty} · Горизонт: {item.estimatedMonths}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="card stack">
        <h2>Самооценка навыков</h2>

        <div className="skills-grid">
          {skills.map((skill) => {
            const current = userSkills.find((item) => item.skillId === skill.id)?.currentLevel ?? 0
            const levelMeta = getSkillLevelMeta(skill.id, current)

            return (
              <article className="skill-card" key={skill.id}>
                <div>
                  <h3>{skill.title}</h3>
                  <p className="muted">{skill.description}</p>
                </div>

                <label>
                  Уровень: <strong>{current}</strong>
                  <input
                    type="range"
                    min="0"
                    max="4"
                    step="1"
                    value={current}
                    onChange={(e) => updateSkill(skill.id, Number(e.target.value))}
                  />
                </label>

                <div className="skill-level-note">
                  <div className="skill-level-head">
                    <span className="skill-level-badge">Level {current}</span>
                    <strong>{levelMeta?.title ?? 'Уровень не описан'}</strong>
                  </div>
                  <p className="muted">
                    {levelMeta?.comment ?? 'Для этого уровня пока нет описания.'}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="grid two-col dashboard-panels">
        <div className="card stack">
          <h2>Совпадение с ролью</h2>
          <div className="score">{match}%</div>
          <p className="muted">Это примерный процент соответствия твоих текущих навыков выбранной цели.</p>
        </div>

        <div className="card stack compact-card">
          <div className="panel-head">
            <h2>Ближайшие навыки</h2>
            {recommendedSkills.length > 0 && (
              <span className="panel-counter">{recommendedSkills.length}</span>
            )}
          </div>
          <p className="panel-subtitle">Фокус на первых шагах, чтобы быстрее открыть следующий уровень.</p>
          {renderCompactGapList(
            recommendedSkills,
            'По выбранной роли критичных пробелов почти не осталось.',
          )}
        </div>
      </section>

      <section className="card stack compact-card full-width-gaps-card">
        <div className="panel-head">
          <h2>Чего не хватает</h2>
          {gaps.length > 0 && <span className="panel-counter">{gaps.length}</span>}
        </div>
        <p className="panel-subtitle">Полный список навыков, которые ещё нужно добрать до цели.</p>
        {renderCompactGapList(gaps, 'Похоже, обязательные навыки по этой роли уже закрыты.')}
      </section>

      {!isAlreadyTarget && selectedTransition && transitionProgress && (
        <section className="grid two-col">
          <div className="card stack">
            <h2>Прогресс по маршруту</h2>
            <div className="score score-sm">{transitionProgress.averageProgress}%</div>
            <p className="muted">
              Закрыто этапов: {transitionProgress.completed} из {transitionProgress.total}. В процессе: {transitionProgress.inProgress}.
            </p>
          </div>

          <div className="card stack compact-card">
            <div className="panel-head">
              <h2>Следующий рекомендуемый этап</h2>
              {nextStage && <span className="panel-status-badge">Next</span>}
            </div>

            {!nextStage ? (
              <p className="compact-empty">Маршрут выглядит полностью закрытым.</p>
            ) : (
              <>
                <div className="next-stage-summary">
                  <strong>{nextStage.stage.title}</strong>
                  <div className="next-stage-meta">
                    <span>{getStageStatusLabel(nextStage.progress.status)}</span>
                    <span>·</span>
                    <span>{nextStage.progress.progress}%</span>
                  </div>
                </div>
                {renderCompactGapList(
                  nextStage.progress.missingSkills.slice(0, 4),
                  'Этап уже можно считать закрытым.',
                )}
              </>
            )}
          </div>
        </section>
      )}

      <section className="card stack">
        <h2>Этапы перехода</h2>

        {isDevopsCurrent ? (
          <div className="inline-note success">
            <strong>Ты уже на ветке DevOps.</strong>
            <span className="muted">
              Вместо перехода можно дальше показывать треки роста: Junior → Middle → Senior, Kubernetes, platform engineering, SRE, security.
            </span>
          </div>
        ) : !selectedTransition ? (
          <div className="inline-note warning">
            <strong>Маршрут не найден.</strong>
            <span className="muted">
              Для выбранной пары ролей пока нет детального roadmap. Сейчас в приложении подробно описаны стартовые переходы к DevOps.
            </span>
          </div>
        ) : (
          <>
            <div className="transition-summary">
              <p>
                <strong>{selectedTransition.title}</strong>
              </p>
              <p className="muted">{selectedTransition.description}</p>
              <p className="meta">
                Сложность: {selectedTransition.difficulty} · Горизонт: {selectedTransition.estimatedMonths}
              </p>
              {selectedTransition.intermediateRoles && selectedTransition.intermediateRoles.length > 0 && (
                <p className="meta">
                  Промежуточные роли:{' '}
                  {selectedTransition.intermediateRoles
                    .map((roleId) => roles.find((role) => role.id === roleId)?.title ?? roleId)
                    .join(' → ')}
                </p>
              )}
            </div>

            <div className="stage-list">
              {selectedTransition.stages.map((stage, index) => {
                const stageProgress = getStageProgress(stage, userSkills)

                return (
                  <article className="stage-card" key={stage.id}>
                    <div className="stage-header">
                      <div>
                        <p className="stage-step">Этап {index + 1}</p>
                        <h3>{stage.title}</h3>
                      </div>
                      <div className="stage-progress-wrap">
                        <div className="stage-progress">{stageProgress.progress}%</div>
                        <div className={`stage-status ${stageProgress.status}`}>
                          {getStageStatusLabel(stageProgress.status)}
                        </div>
                      </div>
                    </div>

                    <p className="muted">{stage.description}</p>

                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${stageProgress.progress}%` }}
                      />
                    </div>

                    <ul className="pill-list">
                      {stage.skills.map((skill) => {
                        const level = userSkills.find((item) => item.skillId === skill.skillId)?.currentLevel ?? 0

                        return (
                          <li className="pill" key={skill.skillId}>
                            {getSkillTitle(skill.skillId)} · lvl {level}/{skill.requiredLevel}
                          </li>
                        )
                      })}
                    </ul>
                  </article>
                )
              })}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

export default App