export type RoleSkillRequirement = {
  roleId: string
  skillId: string
  requiredLevel: 0 | 1 | 2 | 3 | 4
  weight: 1 | 2 | 3
  type: 'core' | 'optional' | 'bonus'
}

export const roleRequirements: RoleSkillRequirement[] = [
  {
    roleId: 'devops',
    skillId: 'linux-basics',
    requiredLevel: 3,
    weight: 3,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'network-basics',
    requiredLevel: 2,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'bash',
    requiredLevel: 3,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'python',
    requiredLevel: 2,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'git',
    requiredLevel: 3,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'linux-services',
    requiredLevel: 3,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'monitoring',
    requiredLevel: 2,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'incident-response',
    requiredLevel: 2,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'cloud-basics',
    requiredLevel: 2,
    weight: 3,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'ansible',
    requiredLevel: 2,
    weight: 2,
    type: 'optional',
  },
  {
    roleId: 'devops',
    skillId: 'docker',
    requiredLevel: 3,
    weight: 3,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'ci-cd',
    requiredLevel: 3,
    weight: 3,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'github-actions',
    requiredLevel: 2,
    weight: 2,
    type: 'optional',
  },
  {
    roleId: 'devops',
    skillId: 'terraform',
    requiredLevel: 3,
    weight: 3,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'prometheus-grafana',
    requiredLevel: 2,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'kubernetes-basics',
    requiredLevel: 2,
    weight: 2,
    type: 'core',
  },
  {
    roleId: 'devops',
    skillId: 'test-automation',
    requiredLevel: 1,
    weight: 1,
    type: 'bonus',
  },
  {
    roleId: 'devops',
    skillId: 'sql',
    requiredLevel: 1,
    weight: 1,
    type: 'bonus',
  },
  {
    roleId: 'devops',
    skillId: 'analytics',
    requiredLevel: 1,
    weight: 1,
    type: 'bonus',
  },
]