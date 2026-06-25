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

export function getSkillGaps(roleId: string, userSkills: UserSkillState[]): SkillGap[] {
  const requirements = roleRequirements.filter((item) => item.roleId === roleId)

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
    .sort((a, b) => b.delta - a.delta)
}

export function getRoleMatch(roleId: string, userSkills: UserSkillState[]) {
  const requirements = roleRequirements.filter((item) => item.roleId === roleId)
  if (requirements.length === 0) return 0

  const total = requirements.reduce((sum, req) => sum + req.weight * req.requiredLevel, 0)

  const covered = requirements.reduce((sum, req) => {
    const currentLevel = getUserSkillLevel(req.skillId, userSkills)
    const normalized = Math.min(currentLevel, req.requiredLevel)
    return sum + normalized * req.weight
  }, 0)

  return clampPercent((covered / total) * 100)
}

export function getRecommendedNextSkills(
  roleId: string,
  userSkills: UserSkillState[],
  limit = 3,
): SkillGap[] {
  return getSkillGaps(roleId, userSkills)
    .sort((a, b) => {
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
    .sort((a, b) => b.delta - a.delta)

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
  const averageProgress = clampPercent(
    stageProgresses.reduce((sum, item) => sum + item.progress, 0) / stageProgresses.length,
  )

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
