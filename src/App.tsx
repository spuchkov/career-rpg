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
const DEFAULT_FROM_ROLE_ID = 'student'
const SKILL_LEVELS = new Set([0, 1, 2, 3, 4])
type Locale = 'ru' | 'en'

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

function getInitialLocale(): Locale {
  const params = new URLSearchParams(window.location.search)
  const locale = params.get('lang')
  return locale === 'en' ? 'en' : 'ru'
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

const copy = {
  ru: {
    start: 'Старт', goal: 'Цель', copyLink: 'Скопировать ссылку на мой маршрут', reset: 'Сбросить маршрут',
    switchLight: 'Переключить на светлую тему', switchDark: 'Переключить на тёмную тему', lightTheme: 'Светлая тема', darkTheme: 'Тёмная тема',
    routeReset: 'Маршрут сброшен к начальному состоянию', routeCopied: 'Ссылка на маршрут скопирована', routeCopyFailed: 'Не удалось скопировать автоматически',
    heroTitle: 'Переход в DevOps по стартовой роли', heroLead: 'Выбери текущую роль, оцени навыки и посмотри детальный путь до DevOps Engineer.',
    startPoint: 'Стартовая точка', currentRole: 'Текущая роль', targetRole: 'Целевая роль', availableTransitions: 'Доступные переходы',
    alreadyTargetTitle: 'Ты уже в целевой роли.', alreadyTargetDesc: 'Для текущей пары ролей roadmap не нужен — можно показывать только развитие внутри DevOps.',
    noTransitions: 'Для этой стартовой роли переходы пока не описаны.', difficulty: 'Сложность', horizon: 'Горизонт',
    selfAssessment: 'Самооценка навыков', level: 'Уровень', levelUnknown: 'Уровень не описан', levelNoDescription: 'Для этого уровня пока нет описания.',
    roleMatch: 'Совпадение с ролью', roleMatchDesc: 'Это примерный процент соответствия твоих текущих навыков выбранной цели.',
    nextSkills: 'Ближайшие навыки', nextSkillsDesc: 'Фокус на первых шагах, чтобы быстрее открыть следующий уровень.', nextSkillsDone: 'По выбранной роли критичных пробелов почти не осталось.',
    missing: 'Чего не хватает', missingDesc: 'Полный список навыков, которые ещё нужно добрать до цели.', missingDone: 'Похоже, обязательные навыки по этой роли уже закрыты.',
    routeProgress: 'Прогресс по маршруту', routeProgressDesc: 'Закрыто этапов: {{completed}} из {{total}}. В процессе: {{inProgress}}.',
    nextRecommendedStage: 'Следующий рекомендуемый этап', nextBadge: 'Далее', routeClosed: 'Маршрут выглядит полностью закрытым.', stageClosed: 'Этап уже можно считать закрытым.',
    transitionStages: 'Этапы перехода', devopsBranchTitle: 'Ты уже на ветке DevOps.', devopsBranchDesc: 'Вместо перехода можно дальше показывать треки роста: Junior → Middle → Senior, Kubernetes, platform engineering, SRE, security.',
    routeNotFound: 'Маршрут не найден.', routeNotFoundDesc: 'Для выбранной пары ролей пока нет детального roadmap. Сейчас в приложении подробно описаны стартовые переходы к DevOps.',
    intermediateRoles: 'Промежуточные роли', stage: 'Этап', now: 'Сейчас', goalLabel: 'Цель', gapStrong: 'Нужно прокачать сильнее', gapMedium: 'Средний приоритет', gapLater: 'Можно добрать позже',
    statusCompleted: 'Закрыт', statusInProgress: 'В процессе', statusNotStarted: 'Не начат', langShort: 'RU / EN', titleSuffix: 'Career RPG'
  },
  en: {
    start: 'Start', goal: 'Goal', copyLink: 'Copy my route link', reset: 'Reset route',
    switchLight: 'Switch to light theme', switchDark: 'Switch to dark theme', lightTheme: 'Light theme', darkTheme: 'Dark theme',
    routeReset: 'Route reset to the initial state', routeCopied: 'Route link copied', routeCopyFailed: 'Could not copy automatically',
    heroTitle: 'Move into DevOps from your starting role', heroLead: 'Choose your current role, assess your skills, and see the detailed path to DevOps Engineer.',
    startPoint: 'Starting point', currentRole: 'Current role', targetRole: 'Target role', availableTransitions: 'Available transitions',
    alreadyTargetTitle: 'You are already in the target role.', alreadyTargetDesc: 'For this role pair, no roadmap is needed — you can focus on growth inside DevOps.',
    noTransitions: 'Transitions for this starting role are not described yet.', difficulty: 'Difficulty', horizon: 'Timeline',
    selfAssessment: 'Skill self-assessment', level: 'Level', levelUnknown: 'Level is not described', levelNoDescription: 'No description is available for this level yet.',
    roleMatch: 'Role match', roleMatchDesc: 'This is an approximate percentage of how well your current skills match the selected goal.',
    nextSkills: 'Nearest skills', nextSkillsDesc: 'Focus on the first steps to unlock the next level faster.', nextSkillsDone: 'There are almost no critical gaps left for this role.',
    missing: 'What is missing', missingDesc: 'The full list of skills you still need to reach the goal.', missingDone: 'It looks like the required skills for this role are already covered.',
    routeProgress: 'Route progress', routeProgressDesc: 'Completed stages: {{completed}} of {{total}}. In progress: {{inProgress}}.',
    nextRecommendedStage: 'Next recommended stage', nextBadge: 'Next', routeClosed: 'This route looks fully completed.', stageClosed: 'This stage can already be considered complete.',
    transitionStages: 'Transition stages', devopsBranchTitle: 'You are already on the DevOps track.', devopsBranchDesc: 'Instead of switching, you can show growth tracks such as Junior → Middle → Senior, Kubernetes, platform engineering, SRE, and security.',
    routeNotFound: 'Route not found.', routeNotFoundDesc: 'There is no detailed roadmap for this role pair yet. Right now, the app describes the starting transitions into DevOps in detail.',
    intermediateRoles: 'Intermediate roles', stage: 'Stage', now: 'Now', goalLabel: 'Goal', gapStrong: 'Needs stronger growth', gapMedium: 'Medium priority', gapLater: 'Can be improved later',
    statusCompleted: 'Completed', statusInProgress: 'In progress', statusNotStarted: 'Not started', langShort: 'RU / EN', titleSuffix: 'Career RPG'
  }
} as const

function getGapGroupLabel(requiredLevel: number, locale: Locale) {
  if (requiredLevel >= 3) return copy[locale].gapStrong
  if (requiredLevel === 2) return copy[locale].gapMedium
  return copy[locale].gapLater
}

function App() {
  const [fromRoleId, setFromRoleId] = useState(getInitialFromRoleId)
  const [targetRoleId, setTargetRoleId] = useState(getInitialTargetRoleId)
  const [userSkills, setUserSkills] = useState<UserSkillState[]>(parseSkillsFromUrl)
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle')
  const [resetState, setResetState] = useState<'idle' | 'done'>('idle')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    const params = new URLSearchParams(window.location.search)
    params.set('theme', theme)
    params.set('lang', locale)
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
  }, [theme, locale, fromRoleId, targetRoleId, userSkills])

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
    const t = copy[locale]
    const fromTitle = roles.find((role) => role.id === fromRoleId)?.title[locale] ?? t.start
    const targetTitle = roles.find((role) => role.id === targetRoleId)?.title[locale] ?? t.goal
    document.title = `${fromTitle} → ${targetTitle} · ${t.titleSuffix}`
  }, [fromRoleId, targetRoleId, locale])

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

  const skillDomainLabels: Record<string, { ru: string; en: string }> = {
    linux: { ru: 'Linux', en: 'Linux' },
    network: { ru: 'Сети', en: 'Network' },
    scripting: { ru: 'Скрипты', en: 'Scripting' },
    programming: { ru: 'Программирование', en: 'Programming' },
    vcs: { ru: 'Контроль версий', en: 'Version control' },
    services: { ru: 'Сервисы', en: 'Services' },
    cloud: { ru: 'Облака', en: 'Cloud' },
    containers: { ru: 'Контейнеры', en: 'Containers' },
    delivery: { ru: 'Доставка', en: 'Delivery' },
    iac: { ru: 'Infrastructure as Code', en: 'Infrastructure as Code' },
    observability: { ru: 'Наблюдаемость', en: 'Observability' },
    orchestration: { ru: 'Оркестрация', en: 'Orchestration' },
    testing: { ru: 'Тестирование', en: 'Testing' },
    analytics: { ru: 'Аналитика', en: 'Analytics' },
    security: { ru: 'Безопасность', en: 'Security' },
    databases: { ru: 'Базы данных', en: 'Databases' },
    frontend: { ru: 'Frontend', en: 'Frontend' },
    backend: { ru: 'Backend', en: 'Backend' },
    communication: { ru: 'Коммуникация', en: 'Communication' },
    product: { ru: 'Продукт', en: 'Product' },
  }

  const [openSkillDomains, setOpenSkillDomains] = useState<string[]>([
    'linux',
    'frontend',
    'backend',
    'analytics',
  ])

  const groupedSkills = useMemo(() => {
    const groups = new Map<string, typeof skills>()

    for (const skill of skills) {
      const key = skill.domain
      const bucket = groups.get(key) ?? []
      bucket.push(skill)
      groups.set(key, bucket)
    }

    return Array.from(groups.entries()).map(([domain, items]) => {
      const average =
        items.reduce((sum, skill) => {
          const current = userSkills.find((item) => item.skillId === skill.id)?.currentLevel ?? 0
          return sum + current
        }, 0) / Math.max(items.length, 1)

      return {
        domain,
        label: skillDomainLabels[domain] ?? { ru: domain, en: domain },
        items,
        average: average.toFixed(1),
      }
    })
  }, [userSkills, locale])

  function toggleSkillDomain(domain: string) {
    setOpenSkillDomains((prev) =>
      prev.includes(domain) ? prev.filter((item) => item !== domain) : [...prev, domain],
    )
  }

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
    return skills.find((item) => item.id === skillId)?.title[locale] ?? skillId
  }

  function getStageStatusLabel(status: 'not-started' | 'in-progress' | 'completed') {
    const t = copy[locale]
    if (status === 'completed') return t.statusCompleted
    if (status === 'in-progress') return t.statusInProgress
    return t.statusNotStarted
  }

  function groupGapItems(items: Array<{ skillId: string; currentLevel: number; requiredLevel: number }>) {
    const groups = new Map<string, Array<{ skillId: string; currentLevel: number; requiredLevel: number }>>()

    for (const item of items) {
      const label = getGapGroupLabel(item.requiredLevel, locale)
      const group = groups.get(label) ?? []
      group.push(item)
      groups.set(label, group)
    }

    return Array.from(groups.entries())
  }

  const t = copy[locale]

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
                    <span className="compact-now">{copy[locale].now} {item.currentLevel}</span>
                    <span className="compact-arrow">→</span>
                    <span className="compact-need">{copy[locale].goalLabel} {item.requiredLevel}</span>
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
            aria-label={t.copyLink}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>{t.copyLink}</span>
          </button>

          <button
            type="button"
            className="ghost-button danger-button"
            onClick={resetRoute}
            aria-label={t.reset}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
            <span>{t.reset}</span>
          </button>

          <button
            type="button"
            className="theme-toggle icon-toggle"
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? t.switchLight : t.switchDark}
            title={theme === 'dark' ? t.lightTheme : t.darkTheme}
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

          <button
            type="button"
            className="ghost-button lang-toggle"
            onClick={() => setLocale((prev) => (prev === 'ru' ? 'en' : 'ru'))}
            aria-label={t.langShort}
            title={t.langShort}
          >
            <span>{locale === 'ru' ? 'RU' : 'EN'}</span>
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
            ? t.routeReset
            : copyState === 'success'
              ? t.routeCopied
              : t.routeCopyFailed}
        </div>
      )}

      <section className="card hero">
        <p className="eyebrow">Career RPG MVP</p>
        <h1>{t.heroTitle}</h1>
        <p className="lead">
          {t.heroLead}
        </p>
      </section>

      <section className="grid two-col start-grid-top">
        <div className="card stack start-point-card">
          <h2>{t.startPoint}</h2>

          <label>
            {t.currentRole}
            <select value={fromRoleId} onChange={(e) => setFromRoleId(e.target.value)}>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.title[locale]}
                </option>
              ))}
            </select>
          </label>

          <label>
            {t.targetRole}
            <select value={targetRoleId} onChange={(e) => setTargetRoleId(e.target.value)}>
              {roles.filter((role) => role.id !== 'student').map((role) => (
                <option key={role.id} value={role.id}>
                  {role.title[locale]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="card stack transitions-card">
          <h2>{t.availableTransitions}</h2>

          {isAlreadyTarget ? (
            <div className="inline-note success">
              <strong>{t.alreadyTargetTitle}</strong>
              <span className="muted">
                {t.alreadyTargetDesc}
              </span>
            </div>
          ) : availableTransitions.length === 0 ? (
            <p className="muted">{t.noTransitions}</p>
          ) : (
            <ul className="list transition-list">
              {availableTransitions.map((item) => (
                <li
                  key={item.id}
                  className={item.toRoleId === targetRoleId ? 'transition-item active' : 'transition-item'}
                >
                  <strong>{typeof item.title === 'string' ? item.title : item.title[locale]}</strong>
                  <span className="muted">{typeof item.description === 'string' ? item.description : item.description[locale]}</span>
                  <span className="meta">
                    {t.difficulty}: {item.difficulty} · {t.horizon}: {item.estimatedMonths}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="card stack">
        <div className="panel-head">
          <h2>{t.selfAssessment}</h2>
          <span className="panel-counter">{skills.length}</span>
        </div>

        <div className="skill-groups">
          {groupedSkills.map((group) => {
            const isOpen = openSkillDomains.includes(group.domain)

            return (
              <article className="skill-group" key={group.domain}>
                <button
                  type="button"
                  className="skill-group-toggle"
                  onClick={() => toggleSkillDomain(group.domain)}
                >
                  <div>
                    <strong>{group.label[locale]}</strong>
                    <p className="muted skill-group-meta">
                      {group.items.length} skills · avg {group.average}
                    </p>
                  </div>
                  <span className="skill-group-chevron">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="skills-grid">
                    {group.items.map((skill) => {
                      const current = userSkills.find((item) => item.skillId === skill.id)?.currentLevel ?? 0
                      const levelMeta = skill.levels.find((level) => level.level === current)

                      return (
                        <article className="skill-card" key={skill.id}>
                          <div>
                            <h3>{skill.title[locale]}</h3>
                            <p className="muted">{skill.description[locale]}</p>
                          </div>

                          <label>
                            {t.level}: <strong>{current}</strong>
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
                              <strong>{levelMeta?.title[locale] ?? t.levelUnknown}</strong>
                            </div>
                            <p className="muted">
                              {levelMeta?.comment[locale] ?? t.levelNoDescription}
                            </p>
                          </div>
                        </article>
                      )
                    })}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="grid two-col dashboard-panels">
        <div className="card stack">
          <h2>{t.roleMatch}</h2>
          <div className="score">{match}%</div>
          <p className="muted">{t.roleMatchDesc}</p>
        </div>

        <div className="card stack compact-card">
          <div className="panel-head">
            <h2>{t.nextSkills}</h2>
            {recommendedSkills.length > 0 && (
              <span className="panel-counter">{recommendedSkills.length}</span>
            )}
          </div>
          <p className="panel-subtitle">{t.nextSkillsDesc}</p>
          {renderCompactGapList(
            recommendedSkills,
            t.nextSkillsDone,
          )}
        </div>
      </section>

      <section className="card stack compact-card full-width-gaps-card">
        <div className="panel-head">
          <h2>{t.missing}</h2>
          {gaps.length > 0 && <span className="panel-counter">{gaps.length}</span>}
        </div>
        <p className="panel-subtitle">{t.missingDesc}</p>
        {renderCompactGapList(gaps, t.missingDone)}
      </section>

      {!isAlreadyTarget && selectedTransition && transitionProgress && (
        <section className="grid two-col">
          <div className="card stack">
            <h2>{t.routeProgress}</h2>
            <div className="score score-sm">{transitionProgress.averageProgress}%</div>
            <p className="muted">
              {t.routeProgressDesc.replace('{{completed}}', String(transitionProgress.completed)).replace('{{total}}', String(transitionProgress.total)).replace('{{inProgress}}', String(transitionProgress.inProgress))}
            </p>
          </div>

          <div className="card stack compact-card">
            <div className="panel-head">
              <h2>{t.nextRecommendedStage}</h2>
              {nextStage && <span className="panel-status-badge">{t.nextBadge}</span>}
            </div>

            {!nextStage ? (
              <p className="compact-empty">{t.routeClosed}</p>
            ) : (
              <>
                <div className="next-stage-summary">
                  <strong>{nextStage.stage.title[locale]}</strong>
                  <div className="next-stage-meta">
                    <span>{getStageStatusLabel(nextStage.progress.status)}</span>
                    <span>·</span>
                    <span>{nextStage.progress.progress}%</span>
                  </div>
                </div>
                {renderCompactGapList(
                  nextStage.progress.missingSkills.slice(0, 4),
                  t.stageClosed,
                )}
              </>
            )}
          </div>
        </section>
      )}

      <section className="card stack">
        <h2>{t.transitionStages}</h2>

        {isDevopsCurrent ? (
          <div className="inline-note success">
            <strong>{t.devopsBranchTitle}</strong>
            <span className="muted">
              {t.devopsBranchDesc}
            </span>
          </div>
        ) : !selectedTransition ? (
          <div className="inline-note warning">
            <strong>{t.routeNotFound}</strong>
            <span className="muted">
              {t.routeNotFoundDesc}
            </span>
          </div>
        ) : (
          <>
            <div className="transition-summary">
              <p>
                <strong>{selectedTransition.title[locale]}</strong>
              </p>
              <p className="muted">{selectedTransition.description[locale]}</p>
              <p className="meta">
                {t.difficulty}: {selectedTransition.difficulty} · {t.horizon}: {selectedTransition.estimatedMonths}
              </p>
              {selectedTransition.intermediateRoles && selectedTransition.intermediateRoles.length > 0 && (
                <p className="meta">
                  {t.intermediateRoles}:{' '}
                  {selectedTransition.intermediateRoles
                    .map((roleId) => roles.find((role) => role.id === roleId)?.title[locale] ?? roleId)
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
                        <p className="stage-step">{t.stage} {index + 1}</p>
                        <h3>{stage.title[locale]}</h3>
                      </div>
                      <div className="stage-progress-wrap">
                        <div className="stage-progress">{stageProgress.progress}%</div>
                        <div className={`stage-status ${stageProgress.status}`}>
                          {getStageStatusLabel(stageProgress.status)}
                        </div>
                      </div>
                    </div>

                    <p className="muted">{stage.description[locale]}</p>

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