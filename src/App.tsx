import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { roles } from './data/roles'
import { skills } from './data/skills'
import { transitions, type Transition } from './data/transitions'
import { roleRequirements } from './data/requirements'
import {
  getRecommendedNextSkills,
  getRoleMatch,
  getSkillGaps,
  getStageProgress,
  type UserSkillState,
} from './lib/scoring'

const DEVOPS_ROLE_ID = 'devops'

type GapItem = {
  skillId: string
  currentLevel: number
  requiredLevel: number
}

function getSkillTitle(skillId: string) {
  return skills.find((item) => item.id === skillId)?.title ?? skillId
}

function getRoleTitle(roleId: string) {
  return roles.find((item) => item.id === roleId)?.title ?? roleId
}

function getGapGroupLabel(requiredLevel: number) {
  if (requiredLevel >= 3) return 'Критично добрать'
  if (requiredLevel === 2) return 'Основное'
  if (requiredLevel === 1) return 'Полезно добрать'
  return 'Дополнительно'
}

function groupGapItems(items: GapItem[]) {
  const groups = new Map<string, GapItem[]>()

  for (const item of items) {
    const label = getGapGroupLabel(item.requiredLevel)
    const group = groups.get(label) ?? []
    group.push(item)
    groups.set(label, group)
  }

  return Array.from(groups.entries())
}

function renderCompactGapList(items: GapItem[], emptyText: string) {
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

function App() {
  const [currentRoleId, setCurrentRoleId] = useState('student')
  const [targetRoleId, setTargetRoleId] = useState(DEVOPS_ROLE_ID)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [toast, setToast] = useState<string | null>(null)
  const [userSkills, setUserSkills] = useState<UserSkillState[]>(
    skills.map((skill) => ({ skillId: skill.id, currentLevel: 0 })),
  )

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = isDark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', nextTheme)
    setTheme(nextTheme)
  }, [])

  const roleMatch = useMemo(() => getRoleMatch(targetRoleId, userSkills), [targetRoleId, userSkills])
  const gaps = useMemo(() => getSkillGaps(targetRoleId, userSkills), [targetRoleId, userSkills])
  const recommendedSkills = useMemo(
    () => getRecommendedNextSkills(targetRoleId, userSkills, 6),
    [targetRoleId, userSkills],
  )

  const availableTransitions = useMemo(
    () => transitions.filter((item) => item.fromRoleId === currentRoleId),
    [currentRoleId],
  )

  const selectedTransition = useMemo<Transition | null>(() => {
    return (
      transitions.find((item) => item.fromRoleId === currentRoleId && item.toRoleId === targetRoleId) ?? null
    )
  }, [currentRoleId, targetRoleId])

  const routedStages = useMemo(() => {
    if (!selectedTransition) return []

    return selectedTransition.stages.map((stage, index) => {
      const progress = getStageProgress(stage, userSkills)
      return {
        index,
        item: {
          fromRoleId: selectedTransition.fromRoleId,
          toRoleId: selectedTransition.toRoleId,
          stage,
        },
        progress,
      }
    })
  }, [selectedTransition, userSkills])

  const routedProgress = useMemo(() => {
    if (!routedStages.length) {
      return { averageProgress: 0, completed: 0, inProgress: 0, total: 0 }
    }

    const completed = routedStages.filter((item) => item.progress.status === 'completed').length
    const inProgress = routedStages.filter((item) => item.progress.status === 'in-progress').length
    const averageProgress = Math.round(
      routedStages.reduce((sum, item) => sum + item.progress.progress, 0) / routedStages.length,
    )

    return {
      averageProgress,
      completed,
      inProgress,
      total: routedStages.length,
    }
  }, [routedStages])

  const nextRoutedStage = useMemo(() => {
    return routedStages.find((item) => item.progress.status !== 'completed') ?? null
  }, [routedStages])

  const isAlreadyTarget = currentRoleId === targetRoleId
  const isDevopsCurrent = currentRoleId === DEVOPS_ROLE_ID

  function updateSkill(skillId: string, currentLevel: number) {
    setUserSkills((prev) => prev.map((item) => (item.skillId === skillId ? { ...item, currentLevel: currentLevel as 0 | 1 | 2 | 3 | 4 } : item)))
  }

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

  function resetRoute() {
    setCurrentRoleId('student')
    setTargetRoleId(DEVOPS_ROLE_ID)
    setUserSkills(skills.map((skill) => ({ skillId: skill.id, currentLevel: 0 })))
    setToast('Маршрут сброшен')
    window.setTimeout(() => setToast(null), 1800)
  }

  async function copyRoute() {
    const header = `Маршрут: ${getRoleTitle(currentRoleId)} → ${getRoleTitle(targetRoleId)}`
    const match = `Совпадение с ролью: ${roleMatch}%`
    const progress = `Прогресс по маршруту: ${routedProgress.averageProgress}%`

    const stageText = selectedTransition
      ? routedStages
          .map(({ index, item, progress }) => {
            const skillsText = item.stage.skills
              .map((skill) => {
                const level = userSkills.find((entry) => entry.skillId === skill.skillId)?.currentLevel ?? 0
                return `- ${getSkillTitle(skill.skillId)} · lvl ${level}/${skill.requiredLevel}`
              })
              .join('\n')

            return `Этап ${index + 1}. ${item.stage.title}\n${item.stage.description}\nПрогресс: ${progress.progress}%\n${skillsText}`
          })
          .join('\n\n')
      : 'Маршрут для выбранной пары ролей пока не найден.'

    const textToCopy = [header, match, progress, '', stageText].join('\n')

    const fallbackCopy = () => {
      const textarea = document.createElement('textarea')
      textarea.value = textToCopy
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      textarea.style.pointerEvents = 'none'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      textarea.setSelectionRange(0, textarea.value.length)
      const success = document.execCommand('copy')
      document.body.removeChild(textarea)
      if (!success) {
        throw new Error('copy failed')
      }
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy)
      } else {
        fallbackCopy()
      }
      setToast('Маршрут скопирован')
    } catch {
      try {
        fallbackCopy()
        setToast('Маршрут скопирован')
      } catch {
        setToast('Не удалось скопировать маршрут')
      }
    }

    window.setTimeout(() => setToast(null), 1800)
  }

  return (
    <main className="app-shell">
      {toast ? <div className="toast neutral">{toast}</div> : null}

      <div className="toolbar">
        <div className="toolbar-actions">
          <button type="button" className="ghost-button" onClick={copyRoute}>
            <span>Скопировать маршрут</span>
          </button>
          <button type="button" className="ghost-button danger-button" onClick={resetRoute}>
            <span>Сбросить маршрут</span>
          </button>
          <button type="button" className="theme-toggle icon-toggle" onClick={toggleTheme}>
            <span>{theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}</span>
          </button>
        </div>
      </div>

      <section className="card hero">
        <p className="eyebrow">Career RPG MVP</p>
        <h1>Маршрут в IT</h1>
        <p className="lead">Выбери текущую и целевую роль, оцени навыки и посмотри доступный маршрут развития.</p>
      </section>

      <section className="start-grid">
        <div className="card stack">
          <div>
            <h2>Стартовая точка</h2>
          </div>

          <label>
            <span>Текущая роль</span>
            <select value={currentRoleId} onChange={(e) => setCurrentRoleId(e.target.value)}>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.title}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Целевая роль</span>
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
          <div>
            <h2>Доступные переходы</h2>
          </div>

          {isAlreadyTarget ? (
            <div className="inline-note success">
              <strong>Ты уже в целевой роли.</strong>
              <p>Можно не строить маршрут, а показывать только развитие внутри этой роли.</p>
            </div>
          ) : availableTransitions.length === 0 ? (
            <div className="inline-note warning">
              <strong>Для этой стартовой роли прямые переходы пока не описаны.</strong>
            </div>
          ) : (
            <ul className="transition-list stack">
              {availableTransitions.map((item) => (
                <li
                  key={item.id}
                  className={`transition-item ${item.toRoleId === targetRoleId ? 'active' : ''}`}
                >
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
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
        <div>
          <h2>Самооценка навыков</h2>
          <p className="panel-subtitle">Выставь уровни по каждому навыку, чтобы собрать match и roadmap.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const currentLevel = userSkills.find((item) => item.skillId === skill.id)?.currentLevel ?? 0
            const levelMeta = skill.levels.find((item) => item.level === currentLevel)

            return (
              <article className="skill-card" key={skill.id}>
                <div>
                  <h3>{skill.title}</h3>
                  <p className="muted">{skill.description}</p>
                </div>

                <strong>{levelMeta?.title ?? 'Уровень не описан'}</strong>

                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={currentLevel}
                  onChange={(e) => updateSkill(skill.id, Number(e.target.value))}
                />

                <p className="meta">{levelMeta?.comment ?? 'Для этого уровня пока нет описания.'}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="grid two-col dashboard-grid">
        <section className="card compact-card metric-card">
          <div className="panel-head">
            <div>
              <h2>Совпадение с ролью</h2>
              <p className="panel-subtitle">
                Это примерный процент соответствия твоих текущих навыков выбранной цели.
              </p>
            </div>
            <div className="score">{roleMatch}%</div>
          </div>
        </section>

        <section className="card compact-card metric-card">
          <div className="panel-head">
            <div>
              <h2>Прогресс по маршруту</h2>
              <p className="panel-subtitle">
                Закрыто этапов: {routedProgress.completed} из {routedProgress.total}. В процессе: {routedProgress.inProgress}.
              </p>
            </div>
            <div className="score">{routedProgress.averageProgress}%</div>
          </div>
        </section>
      </section>

      <section className="grid two-col gaps-grid">
        <section className="card compact-card">
          <div className="panel-head">
            <div>
              <h2>Ближайшие навыки</h2>
              <p className="panel-subtitle">Фокус на первых шагах, чтобы быстрее открыть следующий уровень.</p>
            </div>
            {recommendedSkills.length > 0 && <span className="panel-counter">{recommendedSkills.length}</span>}
          </div>

          {renderCompactGapList(recommendedSkills, 'По выбранной роли критичных пробелов почти не осталось.')}
        </section>

        <section className="card compact-card next-stage-card">
          <div>
            <h2>Следующий рекомендуемый этап</h2>
            <p className="panel-subtitle">Показываем первый этап маршрута, который ещё не закрыт полностью.</p>
          </div>

          {!selectedTransition ? (
            isDevopsCurrent && targetRoleId === DEVOPS_ROLE_ID ? (
              <div className="inline-note success">
                <strong>Ты уже на ветке DevOps.</strong>
                <p>Вместо перехода можно дальше показывать треки роста: Junior → Middle → Senior, Kubernetes, platform engineering, SRE, security.</p>
              </div>
            ) : isAlreadyTarget ? (
              <div className="inline-note success">
                <strong>Ты уже в целевой роли.</strong>
                <p>Маршрут не требуется, можно показывать развитие внутри роли.</p>
              </div>
            ) : (
              <div className="inline-note warning">
                <strong>Маршрут не найден.</strong>
                <p>Для выбранной пары ролей пока нет цепочки переходов даже через промежуточные роли.</p>
              </div>
            )
          ) : nextRoutedStage ? (
            <div className="next-stage-summary">
              <div className="next-stage-meta">
                <span className="next-stage-step">Этап {nextRoutedStage.index + 1}</span>
                <span className="next-stage-progress-badge">
                  Закрыто {nextRoutedStage.item.stage.skills.length - nextRoutedStage.progress.missingSkills.length} из {nextRoutedStage.item.stage.skills.length}
                </span>
              </div>

              <strong>{nextRoutedStage.item.stage.title}</strong>
              <p>{nextRoutedStage.item.stage.description}</p>
              <span className="meta">
                Переход: {getRoleTitle(nextRoutedStage.item.fromRoleId)} → {getRoleTitle(nextRoutedStage.item.toRoleId)}
              </span>

              <div className="compact-skill-list two-columns">
                {nextRoutedStage.item.stage.skills.map((skill) => {
                  const level = userSkills.find((entry) => entry.skillId === skill.skillId)?.currentLevel ?? 0

                  return (
                    <article className="compact-skill-item" key={skill.skillId}>
                      <div className="compact-skill-top">
                        <strong>{getSkillTitle(skill.skillId)}</strong>
                        <span className="compact-target-badge">lvl {skill.requiredLevel}</span>
                      </div>

                      <div className="compact-progress-row" aria-hidden="true">
                        <div className="compact-progress-track">
                          <div
                            className="compact-progress-fill"
                            style={{ width: `${(level / Math.max(skill.requiredLevel, 1)) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="compact-meta-row">
                        <span className="compact-now">Сейчас {level}</span>
                        <span className="compact-arrow">→</span>
                        <span className="compact-need">Нужно {skill.requiredLevel}</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="inline-note success">
              <strong>Маршрут выглядит полностью закрытым.</strong>
            </div>
          )}
        </section>
      </section>

      <section className="card stack full-width-gaps-card">
        <div className="panel-head">
          <div>
            <h2>Чего не хватает</h2>
            <p className="panel-subtitle">Полный список навыков, которые ещё нужно добрать до цели.</p>
          </div>
          {gaps.length > 0 && <span className="panel-counter">{gaps.length}</span>}
        </div>

        {renderCompactGapList(gaps, 'Похоже, обязательные навыки по этой роли уже закрыты.')}
      </section>

      <section className="card stack">
        <div>
          <h2>Этапы перехода</h2>
          {selectedTransition ? (
            <>
              <p className="panel-subtitle">Маршрут собран автоматически из доступных переходов между ролями.</p>
              <p className="meta">
                Шагов в маршруте: 1 · Этапов всего: {routedStages.length}
              </p>
            </>
          ) : null}
        </div>

        {!selectedTransition ? null : (
          <div className="stage-list">
            {routedStages.map(({ index, item, progress }) => (
              <article className="stage-card" key={item.stage.id}>
                <div className="stage-header">
                  <div>
                    <div className="stage-step">Этап {index + 1}</div>
                    <h3>{item.stage.title}</h3>
                  </div>

                  <div className="stage-progress-wrap">
                    <div className="stage-progress">{progress.progress}%</div>
                    <div className={`stage-status ${progress.status}`}>
                      {progress.status === 'completed'
                        ? 'Закрыт'
                        : progress.status === 'in-progress'
                          ? 'В процессе'
                          : 'Не начат'}
                    </div>
                  </div>
                </div>

                <p>{item.stage.description}</p>
                <span className="meta">
                  Переход: {getRoleTitle(item.fromRoleId)} → {getRoleTitle(item.toRoleId)}
                </span>

                <div className="progress-bar" aria-hidden="true">
                  <div className="progress-bar-fill" style={{ width: `${progress.progress}%` }} />
                </div>

                <ul className="pill-list">
                  {item.stage.skills.map((skill) => {
                    const level = userSkills.find((entry) => entry.skillId === skill.skillId)?.currentLevel ?? 0
                    return (
                      <li className="pill" key={skill.skillId}>
                        {getSkillTitle(skill.skillId)} · lvl {level}/{skill.requiredLevel}
                      </li>
                    )
                  })}
                </ul>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default App