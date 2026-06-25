export type TransitionStageSkill = {
  skillId: string
  requiredLevel: 0 | 1 | 2 | 3 | 4
}

export type TransitionStage = {
  id: string
  title: string
  description: string
  skills: TransitionStageSkill[]
}

export type Transition = {
  id: string
  fromRoleId: string
  toRoleId: string
  title: string
  description: string
  difficulty: 'low' | 'medium' | 'high'
  estimatedMonths: string
  intermediateRoles?: string[]
  stages: TransitionStage[]
}

export const transitions: Transition[] = [
  {
    id: 'it-support-to-devops',
    fromRoleId: 'it-support',
    toRoleId: 'devops',
    title: 'IT Support → DevOps Engineer',
    description:
      'Маршрут через системную базу, Linux-эксплуатацию, автоматизацию и контейнерную доставку приложений.',
    difficulty: 'medium',
    estimatedMonths: '9–15 месяцев',
    intermediateRoles: ['sysadmin'],
    stages: [
      {
        id: 'support-foundation',
        title: 'Системная и сетевая база',
        description:
          'Нужно уверенно понимать Linux, базовые сети, shell и сопровождение сервисов — это фундамент для перехода в инфраструктурную ветку.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
        ],
      },
      {
        id: 'support-automation',
        title: 'Инженерная автоматизация',
        description:
          'Дальше нужно перейти от ручной поддержки к инженерному способу работы: Git, Python, базовая автоматизация и понимание облака.',
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'ansible', requiredLevel: 1 },
          { skillId: 'monitoring', requiredLevel: 2 },
        ],
      },
      {
        id: 'support-devops-core',
        title: 'DevOps core',
        description:
          'Финальный этап — контейнеризация, CI/CD, Terraform и production-наблюдаемость как практический DevOps-набор.',
        skills: [
          { skillId: 'docker', requiredLevel: 3 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'sysadmin-to-devops',
    fromRoleId: 'sysadmin',
    toRoleId: 'devops',
    title: 'System Administrator → DevOps Engineer',
    description:
      'Классический переход из эксплуатации в DevOps через IaC, delivery, cloud и контейнерную оркестрацию.',
    difficulty: 'medium',
    estimatedMonths: '6–12 месяцев',
    stages: [
      {
        id: 'sysadmin-strengthen-base',
        title: 'Укрепление эксплуатационной базы',
        description:
          'Системный администратор уже близко к DevOps, поэтому сначала усиливаем shell, мониторинг и облачную модель.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 3 },
          { skillId: 'linux-services', requiredLevel: 3 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 3 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-automation-delivery',
        title: 'Автоматизация и delivery',
        description:
          'На этом этапе появляется Git, Python, Ansible и CI/CD как переход от ручного администрирования к инженерной платформе.',
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'ansible', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-devops-platform',
        title: 'Platform и production-инструменты',
        description:
          'Финальный шаг — IaC, контейнеры, метрики и базовый Kubernetes как основа современной DevOps-практики.',
        skills: [
          { skillId: 'docker', requiredLevel: 3 },
          { skillId: 'terraform', requiredLevel: 3 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 3 },
        ],
      },
    ],
  },
  {
    id: 'backend-dev-to-devops',
    fromRoleId: 'backend-dev',
    toRoleId: 'devops',
    title: 'Backend Developer → DevOps Engineer',
    description:
      'Маршрут от разработчика в сторону инфраструктуры, delivery, observability и платформенного мышления.',
    difficulty: 'medium',
    estimatedMonths: '7–12 месяцев',
    stages: [
      {
        id: 'backend-infra-foundation',
        title: 'Инфраструктурная база',
        description:
          'Разработчику нужно усилить Linux, сеть, эксплуатацию сервисов и поведение приложения в среде.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-delivery-containers',
        title: 'Контейнеры и delivery',
        description:
          'Следом нужно научиться собирать, доставлять и сопровождать сервисы через Docker и CI/CD.',
        skills: [
          { skillId: 'git', requiredLevel: 3 },
          { skillId: 'docker', requiredLevel: 3 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-platform-shift',
        title: 'Переход к platform mindset',
        description:
          'Финальный шаг — IaC, Kubernetes, наблюдаемость и operational-подход вместо только application mindset.',
        skills: [
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'ansible', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'frontend-dev-to-devops',
    fromRoleId: 'frontend-dev',
    toRoleId: 'devops',
    title: 'Frontend Developer → DevOps Engineer',
    description:
      'Переход из клиентской разработки в инфраструктурную и platform-направленность через Linux, delivery, контейнеры и облака.',
    difficulty: 'high',
    estimatedMonths: '8–14 месяцев',
    stages: [
      {
        id: 'frontend-infra-foundation',
        title: 'Инфраструктурная база',
        description:
          'Фронтенд-разработчику нужно добрать Linux, сетевую модель, shell и понимание среды, где живёт приложение.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 1 },
          { skillId: 'incident-response', requiredLevel: 1 },
        ],
      },
      {
        id: 'frontend-delivery-containers',
        title: 'Delivery и контейнеризация',
        description:
          'Сильная сторона фронтендера — продуктовая разработка, поэтому следующий шаг это сборка, CI/CD, Docker и эксплуатационный delivery mindset.',
        skills: [
          { skillId: 'git', requiredLevel: 3 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-platform-shift',
        title: 'Переход к platform engineering',
        description:
          'Финальный этап — облако, Terraform, Kubernetes и observability как полноценный разворот в DevOps.',
        skills: [
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'qa-to-devops',
    fromRoleId: 'qa',
    toRoleId: 'devops',
    title: 'QA Engineer → DevOps Engineer',
    description:
      'Переход через автоматизацию, delivery, инфраструктурную базу и постепенный выход в platform engineering.',
    difficulty: 'high',
    estimatedMonths: '10–16 месяцев',
    stages: [
      {
        id: 'qa-engineering-foundation',
        title: 'Инженерная база',
        description:
          'Нужно усилить Linux, shell, Git и понимание инфраструктурной среды, в которой живёт приложение.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 1 },
        ],
      },
      {
        id: 'qa-automation-delivery',
        title: 'Автотесты и delivery в инженерный контур',
        description:
          'QA уже близок к pipeline-подходу, поэтому важно связать automation, Python и CI/CD с реальной поставкой.',
        skills: [
          { skillId: 'test-automation', requiredLevel: 3 },
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
        ],
      },
      {
        id: 'qa-platform-transition',
        title: 'Infrastructure и observability',
        description:
          'Финальный шаг — облако, Terraform, мониторинг и Kubernetes как выход в полноценную DevOps-роль.',
        skills: [
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
          { skillId: 'incident-response', requiredLevel: 2 },
        ],
      },
    ],
  },
]