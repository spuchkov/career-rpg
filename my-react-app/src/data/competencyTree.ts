export type NodeState = 'locked' | 'available' | 'completed' | 'active'

export type CompetencyNode = {
  id: string
  title: string
  description: string
  track: 'devops' | 'backend' | 'qa' | 'sysadmin'
  requiredLevel: 0 | 1 | 2 | 3 | 4
  dependsOn: string[]
  unlocks: string[]
}

export const competencyTree: CompetencyNode[] = [
  {
    id: 'linux-basics',
    title: 'Linux Basics',
    description: 'Фундамент командной строки, файловой системы и базовых операций в Linux.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: [],
    unlocks: ['bash', 'network-basics', 'linux-services'],
  },
  {
    id: 'bash',
    title: 'Bash',
    description: 'Shell-команды, пайпы, переменные и простые скрипты автоматизации.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['linux-basics'],
    unlocks: ['python', 'ansible'],
  },
  {
    id: 'network-basics',
    title: 'Network Basics',
    description: 'IP, DNS, HTTP, маршрутизация и диагностика сетевых проблем.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['linux-basics'],
    unlocks: ['monitoring', 'cloud-basics'],
  },
  {
    id: 'linux-services',
    title: 'Linux Services',
    description: 'Работа с systemd, логами, процессами и базовой эксплуатацией сервисов.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['linux-basics'],
    unlocks: ['incident-response', 'docker'],
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Небольшие утилиты, автоматизация задач и работа с API.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['bash'],
    unlocks: ['ci-cd'],
  },
  {
    id: 'ansible',
    title: 'Ansible',
    description: 'Конфигурационное управление и повторяемые инфраструктурные изменения.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['bash'],
    unlocks: ['terraform'],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description: 'Метрики, алерты и понимание состояния системы.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['network-basics'],
    unlocks: ['prometheus-grafana'],
  },
  {
    id: 'cloud-basics',
    title: 'Cloud Basics',
    description: 'Базовое понимание облачной инфраструктуры, сетей и сервисов.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['network-basics'],
    unlocks: ['terraform'],
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    description: 'Диагностика инцидентов, логи, первичный разбор отказов.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['linux-services'],
    unlocks: ['prometheus-grafana'],
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Контейнеры, образы, volumes и базовый контейнерный runtime.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['linux-services'],
    unlocks: ['ci-cd', 'kubernetes-basics'],
  },
  {
    id: 'ci-cd',
    title: 'CI/CD',
    description: 'Пайплайны сборки, тестирования и деплоя.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['python', 'docker'],
    unlocks: ['github-actions'],
  },
  {
    id: 'terraform',
    title: 'Terraform',
    description: 'Инфраструктура как код, state, modules и declarative-подход.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['ansible', 'cloud-basics'],
    unlocks: ['kubernetes-basics'],
  },
  {
    id: 'prometheus-grafana',
    title: 'Prometheus + Grafana',
    description: 'Observability, dashboarding и метрики эксплуатации.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['monitoring', 'incident-response'],
    unlocks: ['kubernetes-basics'],
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions',
    description: 'Практическая реализация CI/CD через workflow-автоматизацию.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['ci-cd'],
    unlocks: [],
  },
  {
    id: 'kubernetes-basics',
    title: 'Kubernetes Basics',
    description: 'Pods, deployments, services и базовый orchestration layer.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['docker', 'terraform', 'prometheus-grafana'],
    unlocks: [],
  },
]
EOF
sed -n '1,260p' src/data/competencyTree.ts
export type NodeState = 'locked' | 'available' | 'completed' | 'active'

export type CompetencyNode = {
  id: string
  title: string
  description: string
  track: 'devops' | 'backend' | 'qa' | 'sysadmin'
  requiredLevel: 0 | 1 | 2 | 3 | 4
  dependsOn: string[]
  unlocks: string[]
}

export const competencyTree: CompetencyNode[] = [
  {
    id: 'linux-basics',
    title: 'Linux Basics',
    description: 'Фундамент командной строки, файловой системы и базовых операций в Linux.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: [],
    unlocks: ['bash', 'network-basics', 'linux-services'],
  },
  {
    id: 'bash',
    title: 'Bash',
    description: 'Shell-команды, пайпы, переменные и простые скрипты автоматизации.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['linux-basics'],
    unlocks: ['python', 'ansible'],
  },
  {
    id: 'network-basics',
    title: 'Network Basics',
    description: 'IP, DNS, HTTP, маршрутизация и диагностика сетевых проблем.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['linux-basics'],
    unlocks: ['monitoring', 'cloud-basics'],
  },
  {
    id: 'linux-services',
    title: 'Linux Services',
    description: 'Работа с systemd, логами, процессами и базовой эксплуатацией сервисов.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['linux-basics'],
    unlocks: ['incident-response', 'docker'],
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Небольшие утилиты, автоматизация задач и работа с API.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['bash'],
    unlocks: ['ci-cd'],
  },
  {
    id: 'ansible',
    title: 'Ansible',
    description: 'Конфигурационное управление и повторяемые инфраструктурные изменения.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['bash'],
    unlocks: ['terraform'],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description: 'Метрики, алерты и понимание состояния системы.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['network-basics'],
    unlocks: ['prometheus-grafana'],
  },
  {
    id: 'cloud-basics',
    title: 'Cloud Basics',
    description: 'Базовое понимание облачной инфраструктуры, сетей и сервисов.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['network-basics'],
    unlocks: ['terraform'],
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    description: 'Диагностика инцидентов, логи, первичный разбор отказов.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['linux-services'],
    unlocks: ['prometheus-grafana'],
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Контейнеры, образы, volumes и базовый контейнерный runtime.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['linux-services'],
    unlocks: ['ci-cd', 'kubernetes-basics'],
  },
  {
    id: 'ci-cd',
    title: 'CI/CD',
    description: 'Пайплайны сборки, тестирования и деплоя.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['python', 'docker'],
    unlocks: ['github-actions'],
  },
  {
    id: 'terraform',
    title: 'Terraform',
    description: 'Инфраструктура как код, state, modules и declarative-подход.',
    track: 'devops',
    requiredLevel: 2,
    dependsOn: ['ansible', 'cloud-basics'],
    unlocks: ['kubernetes-basics'],
  },
  {
    id: 'prometheus-grafana',
    title: 'Prometheus + Grafana',
    description: 'Observability, dashboarding и метрики эксплуатации.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['monitoring', 'incident-response'],
    unlocks: ['kubernetes-basics'],
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions',
    description: 'Практическая реализация CI/CD через workflow-автоматизацию.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['ci-cd'],
    unlocks: [],
  },
  {
    id: 'kubernetes-basics',
    title: 'Kubernetes Basics',
    description: 'Pods, deployments, services и базовый orchestration layer.',
    track: 'devops',
    requiredLevel: 1,
    dependsOn: ['docker', 'terraform', 'prometheus-grafana'],
    unlocks: [],
  },
]