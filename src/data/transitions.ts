export type LocalizedText = {
  ru: string
  en: string
}

export type TransitionStageSkill = {
  skillId: string
  requiredLevel: 0 | 1 | 2 | 3 | 4
}

export type TransitionStage = {
  id: string
  title: LocalizedText
  description: LocalizedText
  skills: TransitionStageSkill[]
}

export type Transition = {
  id: string
  fromRoleId: string
  toRoleId: string
  title: LocalizedText
  description: LocalizedText
  difficulty: 'low' | 'medium' | 'high'
  estimatedMonths: string
  intermediateRoles?: string[]
  stages: TransitionStage[]
}

export const transitions: Transition[] = [
  {
    id: 'student-to-it-support',
    fromRoleId: 'student',
    toRoleId: 'it-support',
    title: { ru: 'Студент → IT Support', en: 'Student → IT Support' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Студент» в роль «IT Support» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Student to IT Support through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'student-to-it-support-foundation',
        title: { ru: 'Техническая база', en: 'Technical foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'communication', requiredLevel: 2 },
        ],
      },
      {
        id: 'student-to-it-support-working-context',
        title: { ru: 'Поддержка и инциденты', en: 'Support and incidents' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'student-to-sysadmin',
    fromRoleId: 'student',
    toRoleId: 'sysadmin',
    title: { ru: 'Студент → Системный администратор', en: 'Student → System Administrator' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Студент» в роль «Системный администратор» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Student to System Administrator through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'student-to-sysadmin-foundation',
        title: { ru: 'Linux и инфраструктура', en: 'Linux and infrastructure' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      },
      {
        id: 'student-to-sysadmin-working-context',
        title: { ru: 'Операционный контур', en: 'Operational context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'security-basics', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'student-to-backend-dev',
    fromRoleId: 'student',
    toRoleId: 'backend-dev',
    title: { ru: 'Студент → Backend Developer', en: 'Student → Backend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Студент» в роль «Backend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Student to Backend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'student-to-backend-dev-foundation',
        title: { ru: 'Основа backend-разработки', en: 'Backend development foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'linux-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'student-to-backend-dev-working-context',
        title: { ru: 'Сервисы и данные', en: 'Services and data' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'student-to-frontend-dev',
    fromRoleId: 'student',
    toRoleId: 'frontend-dev',
    title: { ru: 'Студент → Frontend Developer', en: 'Student → Frontend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Студент» в роль «Frontend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Student to Frontend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'student-to-frontend-dev-foundation',
        title: { ru: 'Инженерная база фронтендера', en: 'Frontend engineering foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'html-css', requiredLevel: 2 },
          { skillId: 'javascript-typescript', requiredLevel: 2 },
          { skillId: 'communication', requiredLevel: 2 },
        ],
      },
      {
        id: 'student-to-frontend-dev-working-context',
        title: { ru: 'UI и интеграции', en: 'UI and integrations' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'react', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'student-to-qa',
    fromRoleId: 'student',
    toRoleId: 'qa',
    title: { ru: 'Студент → QA Engineer', en: 'Student → QA Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Студент» в роль «QA Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Student to QA Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'student-to-qa-foundation',
        title: { ru: 'База QA', en: 'QA foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
          { skillId: 'communication', requiredLevel: 2 },
        ],
      },
      {
        id: 'student-to-qa-working-context',
        title: { ru: 'Переход в инженерный QA', en: 'Move into engineering QA' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'test-automation', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'student-to-analyst',
    fromRoleId: 'student',
    toRoleId: 'analyst',
    title: { ru: 'Студент → Data Analyst', en: 'Student → Data Analyst' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Студент» в роль «Data Analyst» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Student to Data Analyst through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'student-to-analyst-foundation',
        title: { ru: 'База аналитика', en: 'Analytics foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
          { skillId: 'communication', requiredLevel: 2 },
        ],
      },
      {
        id: 'student-to-analyst-working-context',
        title: { ru: 'Данные и интерпретация', en: 'Data and interpretation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'student-to-devops',
    fromRoleId: 'student',
    toRoleId: 'devops',
    title: { ru: 'Студент → DevOps Engineer', en: 'Student → DevOps Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Студент» в роль «DevOps Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Student to DevOps Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'student-to-devops-foundation',
        title: { ru: 'Сильная инженерная база', en: 'Strong engineering foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
        ],
      },
      {
        id: 'student-to-devops-working-context',
        title: { ru: 'Автоматизация и платформа', en: 'Automation and platform' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
        ],
      },
      {
        id: 'student-to-devops-strengthening',
        title: { ru: 'Наблюдаемость и зрелость', en: 'Observability and maturity' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'security-basics', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'it-support-to-sysadmin',
    fromRoleId: 'it-support',
    toRoleId: 'sysadmin',
    title: { ru: 'IT Support → Системный администратор', en: 'IT Support → System Administrator' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «IT Support» в роль «Системный администратор» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from IT Support to System Administrator through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'it-support-to-sysadmin-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'it-support-to-sysadmin-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'it-support-to-backend-dev',
    fromRoleId: 'it-support',
    toRoleId: 'backend-dev',
    title: { ru: 'IT Support → Backend Developer', en: 'IT Support → Backend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «IT Support» в роль «Backend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from IT Support to Backend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'it-support-to-backend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 2 },
        ],
      },
      {
        id: 'it-support-to-backend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      },
      {
        id: 'it-support-to-backend-dev-strengthening',
        title: { ru: 'Укрепление позиции', en: 'Role strengthening' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'it-support-to-frontend-dev',
    fromRoleId: 'it-support',
    toRoleId: 'frontend-dev',
    title: { ru: 'IT Support → Frontend Developer', en: 'IT Support → Frontend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «IT Support» в роль «Frontend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from IT Support to Frontend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'it-support-to-frontend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'javascript-typescript', requiredLevel: 2 },
          { skillId: 'react', requiredLevel: 2 },
          { skillId: 'html-css', requiredLevel: 2 },
        ],
      },
      {
        id: 'it-support-to-frontend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'it-support-to-qa',
    fromRoleId: 'it-support',
    toRoleId: 'qa',
    title: { ru: 'IT Support → QA Engineer', en: 'IT Support → QA Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «IT Support» в роль «QA Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from IT Support to QA Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'it-support-to-qa-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'test-automation', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      },
      {
        id: 'it-support-to-qa-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'it-support-to-analyst',
    fromRoleId: 'it-support',
    toRoleId: 'analyst',
    title: { ru: 'IT Support → Data Analyst', en: 'IT Support → Data Analyst' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «IT Support» в роль «Data Analyst» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from IT Support to Data Analyst through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'it-support-to-analyst-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
        ],
      },
      {
        id: 'it-support-to-analyst-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'product-thinking', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'it-support-to-devops',
    fromRoleId: 'it-support',
    toRoleId: 'devops',
    title: { ru: 'IT Support → DevOps Engineer', en: 'IT Support → DevOps Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «IT Support» в роль «DevOps Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from IT Support to DevOps Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'it-support-to-devops-foundation',
        title: { ru: 'Автоматизация инфраструктуры', en: 'Infrastructure automation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'it-support-to-devops-working-context',
        title: { ru: 'Платформа и устойчивость', en: 'Platform and resilience' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'security-basics', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'sysadmin-to-it-support',
    fromRoleId: 'sysadmin',
    toRoleId: 'it-support',
    title: { ru: 'Системный администратор → IT Support', en: 'System Administrator → IT Support' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Системный администратор» в роль «IT Support» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from System Administrator to IT Support through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'sysadmin-to-it-support-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-to-it-support-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'sysadmin-to-backend-dev',
    fromRoleId: 'sysadmin',
    toRoleId: 'backend-dev',
    title: { ru: 'Системный администратор → Backend Developer', en: 'System Administrator → Backend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Системный администратор» в роль «Backend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from System Administrator to Backend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'sysadmin-to-backend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-to-backend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'sysadmin-to-frontend-dev',
    fromRoleId: 'sysadmin',
    toRoleId: 'frontend-dev',
    title: { ru: 'Системный администратор → Frontend Developer', en: 'System Administrator → Frontend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Системный администратор» в роль «Frontend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from System Administrator to Frontend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'sysadmin-to-frontend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'javascript-typescript', requiredLevel: 2 },
          { skillId: 'react', requiredLevel: 2 },
          { skillId: 'html-css', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-to-frontend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-to-frontend-dev-strengthening',
        title: { ru: 'Укрепление позиции', en: 'Role strengthening' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'communication', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'sysadmin-to-qa',
    fromRoleId: 'sysadmin',
    toRoleId: 'qa',
    title: { ru: 'Системный администратор → QA Engineer', en: 'System Administrator → QA Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Системный администратор» в роль «QA Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from System Administrator to QA Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'sysadmin-to-qa-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'test-automation', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-to-qa-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'communication', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'sysadmin-to-analyst',
    fromRoleId: 'sysadmin',
    toRoleId: 'analyst',
    title: { ru: 'Системный администратор → Data Analyst', en: 'System Administrator → Data Analyst' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Системный администратор» в роль «Data Analyst» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from System Administrator to Data Analyst through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'sysadmin-to-analyst-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-to-analyst-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'product-thinking', requiredLevel: 2 },
          { skillId: 'communication', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'sysadmin-to-devops',
    fromRoleId: 'sysadmin',
    toRoleId: 'devops',
    title: { ru: 'Системный администратор → DevOps Engineer', en: 'System Administrator → DevOps Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Системный администратор» в роль «DevOps Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from System Administrator to DevOps Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'sysadmin-to-devops-foundation',
        title: { ru: 'Инженеризация эксплуатации', en: 'Engineering operations' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-to-devops-working-context',
        title: { ru: 'IaC и платформа', en: 'IaC and platform' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'backend-dev-to-it-support',
    fromRoleId: 'backend-dev',
    toRoleId: 'it-support',
    title: { ru: 'Backend Developer → IT Support', en: 'Backend Developer → IT Support' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Backend Developer» в роль «IT Support» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Backend Developer to IT Support through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'backend-dev-to-it-support-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-dev-to-it-support-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'documentation', requiredLevel: 2 },
          { skillId: 'communication', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'backend-dev-to-sysadmin',
    fromRoleId: 'backend-dev',
    toRoleId: 'sysadmin',
    title: { ru: 'Backend Developer → Системный администратор', en: 'Backend Developer → System Administrator' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Backend Developer» в роль «Системный администратор» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Backend Developer to System Administrator through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'backend-dev-to-sysadmin-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-dev-to-sysadmin-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'security-basics', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'backend-dev-to-frontend-dev',
    fromRoleId: 'backend-dev',
    toRoleId: 'frontend-dev',
    title: { ru: 'Backend Developer → Frontend Developer', en: 'Backend Developer → Frontend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Backend Developer» в роль «Frontend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Backend Developer to Frontend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'backend-dev-to-frontend-dev-foundation',
        title: { ru: 'Клиентская база', en: 'Client-side foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'javascript-typescript', requiredLevel: 2 },
          { skillId: 'html-css', requiredLevel: 2 },
          { skillId: 'react', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-dev-to-frontend-dev-working-context',
        title: { ru: 'Интерфейсы и UX-контекст', en: 'Interfaces and UX context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'communication', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'backend-dev-to-qa',
    fromRoleId: 'backend-dev',
    toRoleId: 'qa',
    title: { ru: 'Backend Developer → QA Engineer', en: 'Backend Developer → QA Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Backend Developer» в роль «QA Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Backend Developer to QA Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'backend-dev-to-qa-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'test-automation', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-dev-to-qa-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'backend-dev-to-analyst',
    fromRoleId: 'backend-dev',
    toRoleId: 'analyst',
    title: { ru: 'Backend Developer → Data Analyst', en: 'Backend Developer → Data Analyst' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Backend Developer» в роль «Data Analyst» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Backend Developer to Data Analyst through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'backend-dev-to-analyst-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-dev-to-analyst-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'documentation', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'backend-dev-to-devops',
    fromRoleId: 'backend-dev',
    toRoleId: 'devops',
    title: { ru: 'Backend Developer → DevOps Engineer', en: 'Backend Developer → DevOps Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Backend Developer» в роль «DevOps Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Backend Developer to DevOps Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'backend-dev-to-devops-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-dev-to-devops-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'github-actions', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-dev-to-devops-strengthening',
        title: { ru: 'Укрепление позиции', en: 'Role strengthening' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
          { skillId: 'security-basics', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'frontend-dev-to-it-support',
    fromRoleId: 'frontend-dev',
    toRoleId: 'it-support',
    title: { ru: 'Frontend Developer → IT Support', en: 'Frontend Developer → IT Support' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Frontend Developer» в роль «IT Support» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Frontend Developer to IT Support through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'frontend-dev-to-it-support-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-dev-to-it-support-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'frontend-dev-to-sysadmin',
    fromRoleId: 'frontend-dev',
    toRoleId: 'sysadmin',
    title: { ru: 'Frontend Developer → Системный администратор', en: 'Frontend Developer → System Administrator' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Frontend Developer» в роль «Системный администратор» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Frontend Developer to System Administrator through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'frontend-dev-to-sysadmin-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-dev-to-sysadmin-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'security-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-dev-to-sysadmin-strengthening',
        title: { ru: 'Укрепление позиции', en: 'Role strengthening' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'documentation', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'frontend-dev-to-backend-dev',
    fromRoleId: 'frontend-dev',
    toRoleId: 'backend-dev',
    title: { ru: 'Frontend Developer → Backend Developer', en: 'Frontend Developer → Backend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Frontend Developer» в роль «Backend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Frontend Developer to Backend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'frontend-dev-to-backend-dev-foundation',
        title: { ru: 'Серверная база', en: 'Server-side foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-dev-to-backend-dev-working-context',
        title: { ru: 'Надёжность и архитектура', en: 'Reliability and architecture' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'frontend-dev-to-qa',
    fromRoleId: 'frontend-dev',
    toRoleId: 'qa',
    title: { ru: 'Frontend Developer → QA Engineer', en: 'Frontend Developer → QA Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Frontend Developer» в роль «QA Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Frontend Developer to QA Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'frontend-dev-to-qa-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'test-automation', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-dev-to-qa-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'frontend-dev-to-analyst',
    fromRoleId: 'frontend-dev',
    toRoleId: 'analyst',
    title: { ru: 'Frontend Developer → Data Analyst', en: 'Frontend Developer → Data Analyst' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Frontend Developer» в роль «Data Analyst» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Frontend Developer to Data Analyst through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'frontend-dev-to-analyst-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-dev-to-analyst-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'documentation', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'frontend-dev-to-devops',
    fromRoleId: 'frontend-dev',
    toRoleId: 'devops',
    title: { ru: 'Frontend Developer → DevOps Engineer', en: 'Frontend Developer → DevOps Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Frontend Developer» в роль «DevOps Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Frontend Developer to DevOps Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'frontend-dev-to-devops-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-dev-to-devops-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-dev-to-devops-strengthening',
        title: { ru: 'Укрепление позиции', en: 'Role strengthening' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
          { skillId: 'security-basics', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
          { skillId: 'documentation', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'qa-to-it-support',
    fromRoleId: 'qa',
    toRoleId: 'it-support',
    title: { ru: 'QA Engineer → IT Support', en: 'QA Engineer → IT Support' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «QA Engineer» в роль «IT Support» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from QA Engineer to IT Support through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'qa-to-it-support-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      },
      {
        id: 'qa-to-it-support-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'incident-response', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'qa-to-sysadmin',
    fromRoleId: 'qa',
    toRoleId: 'sysadmin',
    title: { ru: 'QA Engineer → Системный администратор', en: 'QA Engineer → System Administrator' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «QA Engineer» в роль «Системный администратор» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from QA Engineer to System Administrator through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'qa-to-sysadmin-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      },
      {
        id: 'qa-to-sysadmin-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'security-basics', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'qa-to-backend-dev',
    fromRoleId: 'qa',
    toRoleId: 'backend-dev',
    title: { ru: 'QA Engineer → Backend Developer', en: 'QA Engineer → Backend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «QA Engineer» в роль «Backend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from QA Engineer to Backend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'qa-to-backend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
        ],
      },
      {
        id: 'qa-to-backend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'database-design', requiredLevel: 2 },
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'qa-to-frontend-dev',
    fromRoleId: 'qa',
    toRoleId: 'frontend-dev',
    title: { ru: 'QA Engineer → Frontend Developer', en: 'QA Engineer → Frontend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «QA Engineer» в роль «Frontend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from QA Engineer to Frontend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'qa-to-frontend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'javascript-typescript', requiredLevel: 2 },
          { skillId: 'react', requiredLevel: 2 },
          { skillId: 'html-css', requiredLevel: 2 },
        ],
      },
      {
        id: 'qa-to-frontend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'api-integration', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'qa-to-analyst',
    fromRoleId: 'qa',
    toRoleId: 'analyst',
    title: { ru: 'QA Engineer → Data Analyst', en: 'QA Engineer → Data Analyst' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «QA Engineer» в роль «Data Analyst» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from QA Engineer to Data Analyst through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'qa-to-analyst-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
        ],
      },
      {
        id: 'qa-to-analyst-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'database-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'qa-to-devops',
    fromRoleId: 'qa',
    toRoleId: 'devops',
    title: { ru: 'QA Engineer → DevOps Engineer', en: 'QA Engineer → DevOps Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «QA Engineer» в роль «DevOps Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from QA Engineer to DevOps Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'qa-to-devops-foundation',
        title: { ru: 'Автоматизация и delivery', en: 'Automation and delivery' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
        ],
      },
      {
        id: 'qa-to-devops-working-context',
        title: { ru: 'Инфраструктура и observability', en: 'Infrastructure and observability' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
        ],
      }
    ],
  },
  {
    id: 'analyst-to-it-support',
    fromRoleId: 'analyst',
    toRoleId: 'it-support',
    title: { ru: 'Data Analyst → IT Support', en: 'Data Analyst → IT Support' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Data Analyst» в роль «IT Support» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Data Analyst to IT Support through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'analyst-to-it-support-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-to-it-support-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'analyst-to-sysadmin',
    fromRoleId: 'analyst',
    toRoleId: 'sysadmin',
    title: { ru: 'Data Analyst → Системный администратор', en: 'Data Analyst → System Administrator' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Data Analyst» в роль «Системный администратор» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Data Analyst to System Administrator through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'analyst-to-sysadmin-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-to-sysadmin-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'security-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-to-sysadmin-strengthening',
        title: { ru: 'Укрепление позиции', en: 'Role strengthening' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'analyst-to-backend-dev',
    fromRoleId: 'analyst',
    toRoleId: 'backend-dev',
    title: { ru: 'Data Analyst → Backend Developer', en: 'Data Analyst → Backend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Data Analyst» в роль «Backend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Data Analyst to Backend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'analyst-to-backend-dev-foundation',
        title: { ru: 'Сервисная база', en: 'Service foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-to-backend-dev-working-context',
        title: { ru: 'Данные и архитектура', en: 'Data and architecture' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'database-design', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'analyst-to-frontend-dev',
    fromRoleId: 'analyst',
    toRoleId: 'frontend-dev',
    title: { ru: 'Data Analyst → Frontend Developer', en: 'Data Analyst → Frontend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Data Analyst» в роль «Frontend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Data Analyst to Frontend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'analyst-to-frontend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'javascript-typescript', requiredLevel: 2 },
          { skillId: 'react', requiredLevel: 2 },
          { skillId: 'html-css', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-to-frontend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'analyst-to-qa',
    fromRoleId: 'analyst',
    toRoleId: 'qa',
    title: { ru: 'Data Analyst → QA Engineer', en: 'Data Analyst → QA Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Data Analyst» в роль «QA Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Data Analyst to QA Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'analyst-to-qa-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'test-automation', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-to-qa-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'analyst-to-devops',
    fromRoleId: 'analyst',
    toRoleId: 'devops',
    title: { ru: 'Data Analyst → DevOps Engineer', en: 'Data Analyst → DevOps Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «Data Analyst» в роль «DevOps Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from Data Analyst to DevOps Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'analyst-to-devops-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-to-devops-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-to-devops-strengthening',
        title: { ru: 'Укрепление позиции', en: 'Role strengthening' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «DevOps Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the DevOps Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
          { skillId: 'security-basics', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'system-design', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'devops-to-it-support',
    fromRoleId: 'devops',
    toRoleId: 'it-support',
    title: { ru: 'DevOps Engineer → IT Support', en: 'DevOps Engineer → IT Support' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «DevOps Engineer» в роль «IT Support» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from DevOps Engineer to IT Support through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'devops-to-it-support-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'devops-to-it-support-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «IT Support» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the IT Support role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'devops-to-sysadmin',
    fromRoleId: 'devops',
    toRoleId: 'sysadmin',
    title: { ru: 'DevOps Engineer → Системный администратор', en: 'DevOps Engineer → System Administrator' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «DevOps Engineer» в роль «Системный администратор» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from DevOps Engineer to System Administrator through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'devops-to-sysadmin-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'devops-to-sysadmin-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Системный администратор» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the System Administrator role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'devops-to-backend-dev',
    fromRoleId: 'devops',
    toRoleId: 'backend-dev',
    title: { ru: 'DevOps Engineer → Backend Developer', en: 'DevOps Engineer → Backend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «DevOps Engineer» в роль «Backend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from DevOps Engineer to Backend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'devops-to-backend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
        ],
      },
      {
        id: 'devops-to-backend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Backend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Backend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'database-design', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'devops-to-frontend-dev',
    fromRoleId: 'devops',
    toRoleId: 'frontend-dev',
    title: { ru: 'DevOps Engineer → Frontend Developer', en: 'DevOps Engineer → Frontend Developer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «DevOps Engineer» в роль «Frontend Developer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from DevOps Engineer to Frontend Developer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'high',
    estimatedMonths: '8–14 months',
    stages: [
      {
        id: 'devops-to-frontend-dev-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'javascript-typescript', requiredLevel: 2 },
          { skillId: 'react', requiredLevel: 2 },
          { skillId: 'html-css', requiredLevel: 2 },
        ],
      },
      {
        id: 'devops-to-frontend-dev-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Frontend Developer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Frontend Developer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'api-integration', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
          { skillId: 'communication', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'devops-to-qa',
    fromRoleId: 'devops',
    toRoleId: 'qa',
    title: { ru: 'DevOps Engineer → QA Engineer', en: 'DevOps Engineer → QA Engineer' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «DevOps Engineer» в роль «QA Engineer» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from DevOps Engineer to QA Engineer through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'devops-to-qa-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'test-automation', requiredLevel: 2 },
          { skillId: 'debugging', requiredLevel: 2 },
          { skillId: 'communication', requiredLevel: 2 },
        ],
      },
      {
        id: 'devops-to-qa-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «QA Engineer» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the QA Engineer role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      }
    ],
  },
  {
    id: 'devops-to-analyst',
    fromRoleId: 'devops',
    toRoleId: 'analyst',
    title: { ru: 'DevOps Engineer → Data Analyst', en: 'DevOps Engineer → Data Analyst' },
    description: {
      ru: 'Полноценный маршрут перехода из роли «DevOps Engineer» в роль «Data Analyst» через развитие профильных навыков, рабочих инструментов и инженерного мышления.',
      en: 'A full transition path from DevOps Engineer to Data Analyst through role-specific skills, working tools, and engineering mindset.',
    },
    difficulty: 'medium',
    estimatedMonths: '5–9 months',
    stages: [
      {
        id: 'devops-to-analyst-foundation',
        title: { ru: 'База для перехода', en: 'Transition foundation' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'product-thinking', requiredLevel: 2 },
        ],
      },
      {
        id: 'devops-to-analyst-working-context',
        title: { ru: 'Рабочий контур роли', en: 'Working role context' },
        description: {
          ru: 'Этот этап нужен, чтобы приблизиться к роли «Data Analyst» через практические навыки и рабочий контекст.',
          en: 'This stage helps you move toward the Data Analyst role through practical skills and real work context.',
        },
        skills: [
          { skillId: 'communication', requiredLevel: 2 },
          { skillId: 'database-design', requiredLevel: 2 },
        ],
      }
    ],
  }
]