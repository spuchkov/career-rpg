import { skills } from '../data/skills'
import type { Transition, TransitionStage } from '../data/transitions'
import { roleRequirements } from '../data/requirements'

export type UserSkillState = {
  skillId: string
  currentLevel: 0 | 1 | 2 | 3 | 4
}

export type SkillGap = {
  skillId: string
  currentLevel: number
  requiredLevel: number
  delta: number
}

export type StageProgress = {
  progress: number
  status: 'not-started' | 'in-progress' | 'completed'
  missingSkills: SkillGap[]
}

export type TransitionProgress = {
  averageProgress: number
  completed: number
  inProgress: number
  total: number
}

function getUserSkillLevel(skillId: string, userSkills: UserSkillState[]) {
  return userSkills.find((item) => item.skillId === skillId)?.currentLevel ?? 0
}

function clampPercent(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)))
}

function getSkillDomain(skillId: string) {
  return skills.find((item) => item.id === skillId)?.domain
}

function compareSkillGaps(a: SkillGap, b: SkillGap) {
  if (b.delta !== a.delta) return b.delta - a.delta
  if (a.currentLevel !== b.currentLevel) return a.currentLevel - b.currentLevel
  return a.skillId.localeCompare(b.skillId)
}

function enrichRoleRequirements(roleId: string) {
  const explicit = roleRequirements.filter((item) => item.roleId === roleId)
  if (explicit.length > 0) return explicit

  const fallbackByRole: Record<string, Array<{ skillId: string; requiredLevel: 0 | 1 | 2 | 3 | 4; weight: 1 | 2 | 3; type: 'core' | 'optional' | 'bonus' }>> = {
    student: [
      { skillId: 'communication', requiredLevel: 1, weight: 2, type: 'core' },
      { skillId: 'documentation', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'git', requiredLevel: 1, weight: 1, type: 'optional' },
    ],
    'it-support': [
      { skillId: 'linux-basics', requiredLevel: 2, weight: 3, type: 'core' },
      { skillId: 'network-basics', requiredLevel: 2, weight: 3, type: 'core' },
      { skillId: 'bash', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'linux-services', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'incident-response', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'communication', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'documentation', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'debugging', requiredLevel: 1, weight: 1, type: 'optional' },
    ],
    sysadmin: [
      { skillId: 'linux-basics', requiredLevel: 3, weight: 3, type: 'core' },
      { skillId: 'network-basics', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'bash', requiredLevel: 3, weight: 2, type: 'core' },
      { skillId: 'linux-services', requiredLevel: 3, weight: 3, type: 'core' },
      { skillId: 'incident-response', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'monitoring', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'security-basics', requiredLevel: 2, weight: 2, type: 'optional' },
      { skillId: 'system-design', requiredLevel: 1, weight: 1, type: 'bonus' },
    ],
    'backend-dev': [
      { skillId: 'python', requiredLevel: 3, weight: 3, type: 'core' },
      { skillId: 'git', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'sql', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'api-integration', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'debugging', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'database-design', requiredLevel: 2, weight: 2, type: 'optional' },
      { skillId: 'linux-basics', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'system-design', requiredLevel: 1, weight: 1, type: 'bonus' },
    ],
    'frontend-dev': [
      { skillId: 'javascript-typescript', requiredLevel: 3, weight: 3, type: 'core' },
      { skillId: 'react', requiredLevel: 2, weight: 3, type: 'core' },
      { skillId: 'html-css', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'git', requiredLevel: 2, weight: 1, type: 'optional' },
      { skillId: 'api-integration', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'debugging', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'product-thinking', requiredLevel: 1, weight: 1, type: 'bonus' },
    ],
    qa: [
      { skillId: 'test-automation', requiredLevel: 2, weight: 3, type: 'core' },
      { skillId: 'debugging', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'documentation', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'communication', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'network-basics', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'git', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'product-thinking', requiredLevel: 1, weight: 1, type: 'bonus' },
    ],
    analyst: [
      { skillId: 'sql', requiredLevel: 3, weight: 3, type: 'core' },
      { skillId: 'analytics', requiredLevel: 3, weight: 3, type: 'core' },
      { skillId: 'python', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'documentation', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'communication', requiredLevel: 2, weight: 2, type: 'core' },
      { skillId: 'database-design', requiredLevel: 1, weight: 1, type: 'optional' },
      { skillId: 'product-thinking', requiredLevel: 2, weight: 2, type: 'core' },
    ],
  }

  return (fallbackByRole[roleId] ?? []).map((item) => ({ roleId, ...item }))
}

export function getSkillGaps(roleId: string, userSkills: UserSkillState[]): SkillGap[] {
  const requirements = enrichRoleRequirements(roleId)

  return requirements
    .map((req) => {
      const currentLevel = getUserSkillLevel(req.skillId, userSkills)
      return {
        skillId: req.skillId,
        currentLevel,
        requiredLevel: req.requiredLevel,
        delta: Math.max(0, req.requiredLevel - currentLevel),
      }
    })
    .filter((item) => item.delta > 0)
    .sort(compareSkillGaps)
}

export function getRoleMatch(roleId: string, userSkills: UserSkillState[]) {
  const requirements = enrichRoleRequirements(roleId)
  if (requirements.length === 0) return 0

  const total = requirements.reduce((sum, req) => {
    const multiplier = req.type === 'core' ? 1 : req.type === 'optional' ? 0.65 : 0.35
    return sum + req.weight * req.requiredLevel * multiplier
  }, 0)

  const covered = requirements.reduce((sum, req) => {
    const currentLevel = getUserSkillLevel(req.skillId, userSkills)
    const normalized = Math.min(currentLevel, req.requiredLevel)
    const multiplier = req.type === 'core' ? 1 : req.type === 'optional' ? 0.65 : 0.35
    return sum + normalized * req.weight * multiplier
  }, 0)

  return total === 0 ? 0 : clampPercent((covered / total) * 100)
}

export function getRecommendedNextSkills(
  roleId: string,
  userSkills: UserSkillState[],
  limit = 3,
): SkillGap[] {
  const requirements = enrichRoleRequirements(roleId)
  const requirementMap = new Map(requirements.map((item) => [item.skillId, item]))

  return getSkillGaps(roleId, userSkills)
    .sort((a, b) => {
      const reqA = requirementMap.get(a.skillId)
      const reqB = requirementMap.get(b.skillId)
      const typeScoreA = reqA?.type === 'core' ? 3 : reqA?.type === 'optional' ? 2 : 1
      const typeScoreB = reqB?.type === 'core' ? 3 : reqB?.type === 'optional' ? 2 : 1

      if (typeScoreB !== typeScoreA) return typeScoreB - typeScoreA
      if ((reqB?.weight ?? 0) !== (reqA?.weight ?? 0)) return (reqB?.weight ?? 0) - (reqA?.weight ?? 0)
      if (b.delta !== a.delta) return b.delta - a.delta
      return a.currentLevel - b.currentLevel
    })
    .slice(0, limit)
}

export function getStageProgress(stage: TransitionStage, userSkills: UserSkillState[]): StageProgress {
  if (stage.skills.length === 0) {
    return {
      progress: 100,
      status: 'completed',
      missingSkills: [],
    }
  }

  let covered = 0
  let total = 0

  const missingSkills: SkillGap[] = stage.skills
    .map((skill) => {
      const currentLevel = getUserSkillLevel(skill.skillId, userSkills)
      total += skill.requiredLevel
      covered += Math.min(currentLevel, skill.requiredLevel)

      return {
        skillId: skill.skillId,
        currentLevel,
        requiredLevel: skill.requiredLevel,
        delta: Math.max(0, skill.requiredLevel - currentLevel),
      }
    })
    .filter((item) => item.delta > 0)
    .sort((a, b) => {
      const domainA = getSkillDomain(a.skillId)
      const domainB = getSkillDomain(b.skillId)
      if (b.delta !== a.delta) return b.delta - a.delta
      if (domainA !== domainB) return String(domainA).localeCompare(String(domainB))
      return a.currentLevel - b.currentLevel
    })

  const progress = total === 0 ? 100 : clampPercent((covered / total) * 100)

  let status: StageProgress['status'] = 'not-started'
  if (progress >= 100) status = 'completed'
  else if (progress > 0) status = 'in-progress'

  return {
    progress,
    status,
    missingSkills,
  }
}

export function getTransitionProgress(
  transition: Transition,
  userSkills: UserSkillState[],
): TransitionProgress {
  if (transition.stages.length === 0) {
    return {
      averageProgress: 100,
      completed: 0,
      inProgress: 0,
      total: 0,
    }
  }

  const stageProgresses = transition.stages.map((stage) => getStageProgress(stage, userSkills))
  const weightedTotal = transition.stages.reduce((sum, stage) => sum + Math.max(stage.skills.length, 1), 0)
  const weightedCovered = stageProgresses.reduce(
    (sum, item, index) => sum + item.progress * Math.max(transition.stages[index].skills.length, 1),
    0,
  )

  const averageProgress = clampPercent(weightedCovered / weightedTotal)
  const completed = stageProgresses.filter((item) => item.status === 'completed').length
  const inProgress = stageProgresses.filter((item) => item.status === 'in-progress').length

  return {
    averageProgress,
    completed,
    inProgress,
    total: transition.stages.length,
  }
}

export function getNextRecommendedStage(
  transition: Transition,
  userSkills: UserSkillState[],
): { stage: TransitionStage; progress: StageProgress } | null {
  for (const stage of transition.stages) {
    const progress = getStageProgress(stage, userSkills)
    if (progress.status !== 'completed') {
      return { stage, progress }
    }
  }

  return null
}

export function getSkillById(skillId: string) {
  return skills.find((item) => item.id === skillId)
}