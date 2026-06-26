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
    id: 'student-to-it-support',
    fromRoleId: 'student',
    toRoleId: 'it-support',
    title: 'Student → IT Support',
    description:
      'Быстрый вход в IT через поддержку, базовую диагностику, сети, сервисы и работу с пользователями.',
    difficulty: 'low',
    estimatedMonths: '3–6 месяцев',
    stages: [
      {
        id: 'student-it-base',
        title: 'Компьютерная и сетевая база',
        description:
          'Разобраться в устройствах, ОС, сетях и типовых пользовательских проблемах.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 1 },
          { skillId: 'network-basics', requiredLevel: 1 },
          { skillId: 'linux-services', requiredLevel: 1 },
        ],
      },
      {
        id: 'student-it-support-practice',
        title: 'Практика поддержки',
        description: 'Освоить диагностику, скрипты и типовые процедуры сопровождения.',
        skills: [
          { skillId: 'bash', requiredLevel: 1 },
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'incident-response', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'student-to-sysadmin',
    fromRoleId: 'student',
    toRoleId: 'sysadmin',
    title: 'Student → System Administrator',
    description:
      'Путь через Linux, сети, сервисы, скрипты и эксплуатационную дисциплину.',
    difficulty: 'medium',
    estimatedMonths: '5–8 месяцев',
    stages: [
      {
        id: 'student-sys-base',
        title: 'Системная база',
        description: 'Освоить Linux, командную строку и сетевую основу.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
        ],
      },
      {
        id: 'student-sys-services',
        title: 'Эксплуатация сервисов',
        description: 'Понять работу служб, мониторинга и реагирования на инциденты.',
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 1 },
          { skillId: 'incident-response', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'student-to-backend-dev',
    fromRoleId: 'student',
    toRoleId: 'backend-dev',
    title: 'Student → Backend Developer',
    description:
      'Маршрут через программирование, базы данных, Git и понимание серверной логики.',
    difficulty: 'medium',
    estimatedMonths: '6–10 месяцев',
    stages: [
      {
        id: 'student-backend-base',
        title: 'Основы разработки',
        description: 'Понять базовые принципы программирования и работу среды разработки.',
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'sql', requiredLevel: 1 },
        ],
      },
      {
        id: 'student-backend-server',
        title: 'Серверное мышление',
        description: 'Разобраться в сервисах, Linux и процессах поставки кода.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 1 },
          { skillId: 'linux-services', requiredLevel: 1 },
          { skillId: 'ci-cd', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'student-to-frontend-dev',
    fromRoleId: 'student',
    toRoleId: 'frontend-dev',
    title: 'Student → Frontend Developer',
    description:
      'Старт во frontend через основы разработки, Git, логику интерфейсов и инженерную дисциплину.',
    difficulty: 'medium',
    estimatedMonths: '6–10 месяцев',
    stages: [
      {
        id: 'student-frontend-base',
        title: 'Базовая инженерная подготовка',
        description: 'Освоить инструменты разработчика и рабочую среду.',
        skills: [
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'bash', requiredLevel: 1 },
          { skillId: 'linux-basics', requiredLevel: 1 },
        ],
      },
      {
        id: 'student-frontend-practice',
        title: 'Практика разработки',
        description: 'Подтянуть логику программирования, API-мышление и качество поставки.',
        skills: [
          { skillId: 'python', requiredLevel: 1 },
          { skillId: 'ci-cd', requiredLevel: 1 },
          { skillId: 'analytics', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'student-to-qa',
    fromRoleId: 'student',
    toRoleId: 'qa',
    title: 'Student → QA Engineer',
    description:
      'Маршрут через тест-дизайн, базовую автоматизацию, SQL и понимание жизненного цикла продукта.',
    difficulty: 'low',
    estimatedMonths: '4–7 месяцев',
    stages: [
      {
        id: 'student-qa-base',
        title: 'База тестирования',
        description:
          'Понять типы тестирования, сценарии, баг-репорты и жизненный цикл дефектов.',
        skills: [
          { skillId: 'test-automation', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 1 },
          { skillId: 'analytics', requiredLevel: 1 },
        ],
      },
      {
        id: 'student-qa-tools',
        title: 'Инструменты и автоматизация',
        description: 'Подтянуть скрипты, Git и базовую автоматизацию тестирования.',
        skills: [
          { skillId: 'python', requiredLevel: 1 },
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'ci-cd', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'student-to-analyst',
    fromRoleId: 'student',
    toRoleId: 'analyst',
    title: 'Student → Data Analyst',
    description:
      'Вход в аналитику через SQL, метрики, визуализацию и базовую автоматизацию.',
    difficulty: 'low',
    estimatedMonths: '4–7 месяцев',
    stages: [
      {
        id: 'student-analyst-base',
        title: 'База аналитики',
        description: 'Освоить SQL, метрики и работу с данными.',
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 1 },
        ],
      },
      {
        id: 'student-analyst-delivery',
        title: 'Практика поставки аналитики',
        description: 'Подтянуть Git, отчётность и системность в работе с данными.',
        skills: [
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'test-automation', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'student-to-devops',
    fromRoleId: 'student',
    toRoleId: 'devops',
    title: 'Student → DevOps Engineer',
    description:
      'Маршрут для начинающего без коммерческого опыта: база Linux, сети, Git, Python, контейнеры и первые практические проекты.',
    difficulty: 'high',
    estimatedMonths: '12–18 месяцев',
    intermediateRoles: ['it-support', 'sysadmin'],
    stages: [
      {
        id: 'student-foundation',
        title: 'Базовая IT-подготовка',
        description: 'Освоить общую техническую базу и уверенно работать в командной строке.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 1 },
          { skillId: 'network-basics', requiredLevel: 1 },
          { skillId: 'bash', requiredLevel: 1 },
          { skillId: 'git', requiredLevel: 1 },
        ],
      },
      {
        id: 'student-junior-infra',
        title: 'Инфраструктурная база',
        description: 'Понять, как работают сервисы, автоматизация и окружения.',
        skills: [
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 1 },
        ],
      },
      {
        id: 'student-devops-core',
        title: 'Вход в DevOps-практику',
        description: 'Собрать полноценную базу для первого DevOps-маршрута.',
        skills: [
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'it-support-to-sysadmin',
    fromRoleId: 'it-support',
    toRoleId: 'sysadmin',
    title: 'IT Support → System Administrator',
    description:
      'Естественный переход из поддержки в эксплуатацию через Linux, сети и администрирование сервисов.',
    difficulty: 'medium',
    estimatedMonths: '4–8 месяцев',
    stages: [
      {
        id: 'support-sys-linux',
        title: 'Системная база',
        description: 'Усилить Linux, shell и повседневную работу с инфраструктурой.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 2 },
        ],
      },
      {
        id: 'support-sys-ops',
        title: 'Эксплуатационная практика',
        description: 'Подтянуть сети, инциденты и мониторинг как основу администрирования.',
        skills: [
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'it-support-to-qa',
    fromRoleId: 'it-support',
    toRoleId: 'qa',
    title: 'IT Support → QA Engineer',
    description:
      'Переход в QA через прикладное понимание пользовательских проблем, сценариев и качества релизов.',
    difficulty: 'medium',
    estimatedMonths: '4–7 месяцев',
    stages: [
      {
        id: 'support-qa-quality',
        title: 'База тестирования',
        description: 'Освоить сценарии тестирования, SQL и контроль качества.',
        skills: [
          { skillId: 'sql', requiredLevel: 1 },
          { skillId: 'analytics', requiredLevel: 1 },
          { skillId: 'test-automation', requiredLevel: 2 },
        ],
      },
      {
        id: 'support-qa-tools',
        title: 'Инструменты QA',
        description: 'Добавить Git, Python и CI-практику в тестовую работу.',
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 1 },
          { skillId: 'ci-cd', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'it-support-to-analyst',
    fromRoleId: 'it-support',
    toRoleId: 'analyst',
    title: 'IT Support → Data Analyst',
    description:
      'Переход в аналитику через SQL, метрики и системное понимание пользовательских проблем.',
    difficulty: 'medium',
    estimatedMonths: '5–8 месяцев',
    stages: [
      {
        id: 'support-analyst-data',
        title: 'Работа с данными',
        description: 'Освоить SQL, аналитическое мышление и базовую автоматизацию.',
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 1 },
        ],
      },
      {
        id: 'support-analyst-delivery',
        title: 'Поставка аналитики',
        description: 'Подтянуть Git и качество работы с отчётностью и данными.',
        skills: [
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'test-automation', requiredLevel: 1 },
        ],
      },
    ],
  },
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
    id: 'sysadmin-to-backend-dev',
    fromRoleId: 'sysadmin',
    toRoleId: 'backend-dev',
    title: 'System Administrator → Backend Developer',
    description:
      'Переход в backend через код, API, базы данных и системное понимание среды.',
    difficulty: 'high',
    estimatedMonths: '7–12 месяцев',
    stages: [
      {
        id: 'sysadmin-backend-code',
        title: 'Программирование и данные',
        description: 'Подтянуть Python, Git и SQL для инженерной разработки.',
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 2 },
        ],
      },
      {
        id: 'sysadmin-backend-delivery',
        title: 'Сервисная разработка',
        description: 'Освоить CI/CD и серверное мышление как часть backend-практики.',
        skills: [
          { skillId: 'ci-cd', requiredLevel: 1 },
          { skillId: 'linux-services', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'sysadmin-to-analyst',
    fromRoleId: 'sysadmin',
    toRoleId: 'analyst',
    title: 'System Administrator → Data Analyst',
    description:
      'Переход в аналитику через данные, SQL и техническое понимание инфраструктурных метрик.',
    difficulty: 'medium',
    estimatedMonths: '6–10 месяцев',
    stages: [
      {
        id: 'sysadmin-analyst-sql',
        title: 'База аналитики',
        description: 'Подтянуть SQL, аналитическое мышление и визуализацию данных.',
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 1 },
        ],
      },
      {
        id: 'sysadmin-analyst-automation',
        title: 'Автоматизация работы с данными',
        description: 'Добавить Python, Git и системность поставки отчётности.',
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'test-automation', requiredLevel: 1 },
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
    id: 'backend-dev-to-frontend-dev',
    fromRoleId: 'backend-dev',
    toRoleId: 'frontend-dev',
    title: 'Backend Developer → Frontend Developer',
    description:
      'Смена фокуса на клиентскую разработку через интерфейсы, API-мышление и delivery фронтенда.',
    difficulty: 'medium',
    estimatedMonths: '5–9 месяцев',
    stages: [
      {
        id: 'backend-frontend-ui',
        title: 'Сдвиг к интерфейсам',
        description: 'Перенести инженерную базу в сторону UX, API-потребления и клиентской логики.',
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 1 },
          { skillId: 'ci-cd', requiredLevel: 1 },
        ],
      },
      {
        id: 'backend-frontend-quality',
        title: 'Практика поставки интерфейсов',
        description: 'Подтянуть наблюдаемость, доставку и продуктовую обратную связь.',
        skills: [
          { skillId: 'monitoring', requiredLevel: 1 },
          { skillId: 'test-automation', requiredLevel: 1 },
          { skillId: 'cloud-basics', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'backend-dev-to-qa',
    fromRoleId: 'backend-dev',
    toRoleId: 'qa',
    title: 'Backend Developer → QA Engineer',
    description:
      'Переход в quality engineering через системное понимание продукта, SQL и автоматизацию тестов.',
    difficulty: 'medium',
    estimatedMonths: '4–8 месяцев',
    stages: [
      {
        id: 'backend-qa-quality',
        title: 'Quality mindset',
        description: 'Освоить тестовую стратегию, SQL и автоматизацию качества.',
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'test-automation', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 1 },
        ],
      },
      {
        id: 'backend-qa-pipeline',
        title: 'Интеграция в delivery-процесс',
        description: 'Связать тестирование с CI/CD и релизным циклом.',
        skills: [
          { skillId: 'ci-cd', requiredLevel: 1 },
          { skillId: 'python', requiredLevel: 1 },
          { skillId: 'git', requiredLevel: 2 },
        ],
      },
    ],
  },
  {
    id: 'backend-dev-to-analyst',
    fromRoleId: 'backend-dev',
    toRoleId: 'analyst',
    title: 'Backend Developer → Data Analyst',
    description:
      'Переход в аналитику через данные, SQL, метрики и понимание продуктовых сигналов.',
    difficulty: 'medium',
    estimatedMonths: '5–8 месяцев',
    stages: [
      {
        id: 'backend-analyst-data',
        title: 'Аналитическая база',
        description: 'Сместить акцент с логики сервиса на данные, отчётность и метрики.',
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 2 },
        ],
      },
      {
        id: 'backend-analyst-reporting',
        title: 'Поставка аналитики',
        description: 'Добавить системность отчётности и валидации результатов.',
        skills: [
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'test-automation', requiredLevel: 1 },
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
    id: 'frontend-dev-to-backend-dev',
    fromRoleId: 'frontend-dev',
    toRoleId: 'backend-dev',
    title: 'Frontend Developer → Backend Developer',
    description:
      'Переход в backend через серверную логику, данные, Linux и API-мышление.',
    difficulty: 'medium',
    estimatedMonths: '5–9 месяцев',
    stages: [
      {
        id: 'frontend-backend-server',
        title: 'Серверная база',
        description: 'Подтянуть Linux, сервисы, SQL и модель работы backend-систем.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 1 },
          { skillId: 'linux-services', requiredLevel: 1 },
          { skillId: 'sql', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-backend-dev',
        title: 'Переход к сервисной разработке',
        description: 'Усилить Python, CI/CD и эксплуатационное понимание приложений.',
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 1 },
          { skillId: 'monitoring', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'frontend-dev-to-qa',
    fromRoleId: 'frontend-dev',
    toRoleId: 'qa',
    title: 'Frontend Developer → QA Engineer',
    description:
      'Переход в QA через пользовательские сценарии, тестовое мышление и автоматизацию.',
    difficulty: 'medium',
    estimatedMonths: '4–7 месяцев',
    stages: [
      {
        id: 'frontend-qa-scenarios',
        title: 'Тестовое мышление',
        description: 'Сфокусироваться на сценариях, проверках и качестве поведения интерфейсов.',
        skills: [
          { skillId: 'test-automation', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 1 },
          { skillId: 'git', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-qa-tooling',
        title: 'Tooling и процессы',
        description: 'Привязать тестирование к пайплайнам и базовой автоматизации.',
        skills: [
          { skillId: 'python', requiredLevel: 1 },
          { skillId: 'ci-cd', requiredLevel: 1 },
          { skillId: 'sql', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'frontend-dev-to-analyst',
    fromRoleId: 'frontend-dev',
    toRoleId: 'analyst',
    title: 'Frontend Developer → Data Analyst',
    description:
      'Переход в аналитику через продуктовые метрики, SQL и понимание пользовательского поведения.',
    difficulty: 'medium',
    estimatedMonths: '5–8 месяцев',
    stages: [
      {
        id: 'frontend-analyst-metrics',
        title: 'Метрики и данные',
        description: 'Усилить аналитическое мышление и работу с данными.',
        skills: [
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 1 },
        ],
      },
      {
        id: 'frontend-analyst-reporting',
        title: 'Отчётность и валидация',
        description: 'Подтянуть Git и системность аналитической поставки.',
        skills: [
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'test-automation', requiredLevel: 1 },
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
          { skillId: 'monitoring', requiredLevel: 1 },
        ],
      },
      {
        id: 'frontend-delivery-cloud',
        title: 'Delivery и cloud-мышление',
        description:
          'Затем — CI/CD, контейнеры, облачная база и понимание доставки фронтенд-приложений как production-сервиса.',
        skills: [
          { skillId: 'git', requiredLevel: 3 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'frontend-platform-shift',
        title: 'Platform shift',
        description:
          'Финальный этап — Terraform, Kubernetes, observability и операционное мышление поверх delivery-практики.',
        skills: [
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 2 },
          { skillId: 'incident-response', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'qa-to-frontend-dev',
    fromRoleId: 'qa',
    toRoleId: 'frontend-dev',
    title: 'QA Engineer → Frontend Developer',
    description:
      'Переход в frontend через сценарное мышление, delivery и понимание пользовательского поведения.',
    difficulty: 'medium',
    estimatedMonths: '5–9 месяцев',
    stages: [
      {
        id: 'qa-frontend-engineering',
        title: 'Инженерная база разработчика',
        description: 'Усилить Git, Python, аналитику и базовую инженерную дисциплину.',
        skills: [
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'python', requiredLevel: 1 },
          { skillId: 'analytics', requiredLevel: 1 },
        ],
      },
      {
        id: 'qa-frontend-delivery',
        title: 'Поставка интерфейсных изменений',
        description: 'Освоить CI/CD и контекст клиентских релизов.',
        skills: [
          { skillId: 'ci-cd', requiredLevel: 1 },
          { skillId: 'test-automation', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'qa-to-analyst',
    fromRoleId: 'qa',
    toRoleId: 'analyst',
    title: 'QA Engineer → Data Analyst',
    description:
      'Переход в аналитику через метрики качества, SQL и системную валидацию данных.',
    difficulty: 'medium',
    estimatedMonths: '4–7 месяцев',
    stages: [
      {
        id: 'qa-analyst-data',
        title: 'Аналитическая база',
        description: 'Освоить SQL, аналитическое мышление и работу с метриками.',
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'test-automation', requiredLevel: 1 },
        ],
      },
      {
        id: 'qa-analyst-automation',
        title: 'Автоматизация и отчётность',
        description: 'Добавить Python и Git в работу с данными и качеством.',
        skills: [
          { skillId: 'python', requiredLevel: 1 },
          { skillId: 'git', requiredLevel: 1 },
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
      'Маршрут из quality engineering в DevOps через автоматизацию, delivery, инфраструктурную базу и observability.',
    difficulty: 'high',
    estimatedMonths: '8–14 месяцев',
    stages: [
      {
        id: 'qa-infra-base',
        title: 'Инфраструктурная база',
        description:
          'QA-инженеру нужно усилить Linux, shell, сети и понимание того, как тестируемая система живёт в среде.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 1 },
        ],
      },
      {
        id: 'qa-automation-delivery',
        title: 'Автоматизация и delivery',
        description:
          'Дальше QA-бэкграунд помогает быстро зайти в CI/CD, GitHub Actions, Python и контейнеризацию.',
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'github-actions', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
        ],
      },
      {
        id: 'qa-devops-platform',
        title: 'Переход к DevOps platform-практике',
        description:
          'Финальный этап — Terraform, observability, cloud и базовый Kubernetes как шаг от quality к infrastructure engineering.',
        skills: [
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
          { skillId: 'incident-response', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'analyst-to-qa',
    fromRoleId: 'analyst',
    toRoleId: 'qa',
    title: 'Data Analyst → QA Engineer',
    description:
      'Переход в QA через валидацию данных, сценарии проверок и автоматизацию качества.',
    difficulty: 'medium',
    estimatedMonths: '4–7 месяцев',
    stages: [
      {
        id: 'analyst-qa-validation',
        title: 'Качество и валидация',
        description: 'Сместить фокус с анализа на проверки, сценарии и надёжность результатов.',
        skills: [
          { skillId: 'analytics', requiredLevel: 2 },
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'test-automation', requiredLevel: 1 },
        ],
      },
      {
        id: 'analyst-qa-tooling',
        title: 'Инструменты автоматизации',
        description: 'Добавить Python, Git и пайплайны в инженерную QA-практику.',
        skills: [
          { skillId: 'python', requiredLevel: 1 },
          { skillId: 'git', requiredLevel: 1 },
          { skillId: 'ci-cd', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'analyst-to-backend-dev',
    fromRoleId: 'analyst',
    toRoleId: 'backend-dev',
    title: 'Data Analyst → Backend Developer',
    description:
      'Переход в backend через код, SQL, сервисную логику и инфраструктурную базу.',
    difficulty: 'high',
    estimatedMonths: '7–12 месяцев',
    stages: [
      {
        id: 'analyst-backend-code',
        title: 'Код и серверное мышление',
        description: 'Подтянуть Python, Git и понимание сервисной модели приложений.',
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'linux-basics', requiredLevel: 1 },
        ],
      },
      {
        id: 'analyst-backend-systems',
        title: 'Данные и эксплуатация',
        description: 'Усилить SQL, Linux services и delivery-практику.',
        skills: [
          { skillId: 'sql', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 1 },
          { skillId: 'ci-cd', requiredLevel: 1 },
        ],
      },
    ],
  },
  {
    id: 'analyst-to-devops',
    fromRoleId: 'analyst',
    toRoleId: 'devops',
    title: 'Data Analyst → DevOps Engineer',
    description:
      'Нетипичный, но рабочий переход через инженерную базу, Linux, автоматизацию, delivery и инфраструктурные практики.',
    difficulty: 'high',
    estimatedMonths: '10–16 месяцев',
    stages: [
      {
        id: 'analyst-infra-base',
        title: 'Инфраструктурная и системная база',
        description:
          'Аналитику нужно добрать Linux, сети, shell и понимание работы сервисов в среде.',
        skills: [
          { skillId: 'linux-basics', requiredLevel: 2 },
          { skillId: 'network-basics', requiredLevel: 2 },
          { skillId: 'bash', requiredLevel: 2 },
          { skillId: 'linux-services', requiredLevel: 1 },
        ],
      },
      {
        id: 'analyst-automation-delivery',
        title: 'Автоматизация и delivery',
        description:
          'Следом нужно перейти от аналитического стека к инженерному: Git, Python, CI/CD, Docker и cloud basics.',
        skills: [
          { skillId: 'python', requiredLevel: 2 },
          { skillId: 'git', requiredLevel: 2 },
          { skillId: 'ci-cd', requiredLevel: 2 },
          { skillId: 'docker', requiredLevel: 2 },
          { skillId: 'cloud-basics', requiredLevel: 2 },
        ],
      },
      {
        id: 'analyst-devops-platform',
        title: 'Platform и observability',
        description:
          'Финальный этап — Terraform, monitoring, Kubernetes и incident mindset.',
        skills: [
          { skillId: 'terraform', requiredLevel: 2 },
          { skillId: 'monitoring', requiredLevel: 2 },
          { skillId: 'prometheus-grafana', requiredLevel: 2 },
          { skillId: 'kubernetes-basics', requiredLevel: 1 },
          { skillId: 'incident-response', requiredLevel: 1 },
        ],
      },
    ],
  },
]