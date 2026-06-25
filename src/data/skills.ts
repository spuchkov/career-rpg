export type SkillDomain =
  | 'linux'
  | 'network'
  | 'scripting'
  | 'programming'
  | 'vcs'
  | 'services'
  | 'cloud'
  | 'containers'
  | 'delivery'
  | 'iac'
  | 'observability'
  | 'orchestration'
  | 'testing'
  | 'analytics'

export type SkillLevelDescription = {
  level: 0 | 1 | 2 | 3 | 4
  title: string
  comment: string
}

export type Skill = {
  id: string
  title: string
  domain: SkillDomain
  description: string
  levels: SkillLevelDescription[]
}

const commonScale = {
  0: { level: 0 as const, title: 'Нет базы' },
  1: { level: 1 as const, title: 'Базовое знакомство' },
  2: { level: 2 as const, title: 'Уверенная база' },
  3: { level: 3 as const, title: 'Рабочий уровень' },
  4: { level: 4 as const, title: 'Сильный уровень' },
}

export const skills: Skill[] = [
  {
    id: 'linux-basics',
    title: 'Linux Basics',
    domain: 'linux',
    description: 'Файловая система, права, процессы, пакеты, базовая навигация и администрирование Linux.',
    levels: [
      { ...commonScale[0], comment: 'Почти не работал с Linux, команды и структура системы пока незнакомы.' },
      { ...commonScale[1], comment: 'Могу зайти на сервер, ходить по файловой системе, смотреть процессы и выполнять простые команды.' },
      { ...commonScale[2], comment: 'Понимаю права, systemctl, логи, пакеты и умею решать типовые задачи без постоянных подсказок.' },
      { ...commonScale[3], comment: 'Самостоятельно сопровождаю Linux-среду, диагностирую проблемы и правлю конфиги в рабочих сценариях.' },
      { ...commonScale[4], comment: 'Оптимизирую окружение, стандартизирую практики и уверенно объясняю другим эксплуатационные решения.' },
    ],
  },
  {
    id: 'network-basics',
    title: 'Network Basics',
    domain: 'network',
    description: 'IP, DNS, HTTP, порты, маршрутизация, базовая диагностика сети и сервисной связности.',
    levels: [
      { ...commonScale[0], comment: 'Слабо понимаю, как приложения общаются по сети и что означают порты, DNS и маршруты.' },
      { ...commonScale[1], comment: 'Понимаю, что такое IP, DNS, HTTP и могу выполнить простую сетевую диагностику.' },
      { ...commonScale[2], comment: 'Уверенно использую ping, traceroute, nslookup, curl и понимаю типовые сетевые проблемы.' },
      { ...commonScale[3], comment: 'Разбираюсь в сетевом поведении сервисов, умею локализовать сбои и объяснить источник проблемы.' },
      { ...commonScale[4], comment: 'Проектирую и диагностирую более сложные сетевые сценарии, включая балансировку и сервисную связность.' },
    ],
  },
  {
    id: 'bash',
    title: 'Bash / Shell',
    domain: 'scripting',
    description: 'Командная строка, пайпы, переменные, простые скрипты и автоматизация через shell.',
    levels: [
      { ...commonScale[0], comment: 'Почти не использую shell и не умею собирать команды в рабочие цепочки.' },
      { ...commonScale[1], comment: 'Могу выполнять типовые команды, пользоваться grep, cat, ls и простыми пайпами.' },
      { ...commonScale[2], comment: 'Пишу несложные shell-скрипты, использую переменные, циклы и автоматизирую рутину.' },
      { ...commonScale[3], comment: 'Собираю рабочие shell-утилиты, умею дебажить скрипты и автоматизировать повторяемые операции.' },
      { ...commonScale[4], comment: 'Строю устойчивые shell-сценарии для эксплуатации и умею задавать хорошие практики команде.' },
    ],
  },
  {
    id: 'python',
    title: 'Python',
    domain: 'programming',
    description: 'Скрипты, утилиты, автоматизация, работа с API и базовая инженерная логика.',
    levels: [
      { ...commonScale[0], comment: 'Почти не писал на Python и не умею решать через него повседневные инженерные задачи.' },
      { ...commonScale[1], comment: 'Пишу простые скрипты, работаю с переменными, условиями, файлами и базовыми библиотеками.' },
      { ...commonScale[2], comment: 'Автоматизирую прикладные задачи, хожу в API, обрабатываю данные и пишу полезные утилиты.' },
      { ...commonScale[3], comment: 'Уверенно использую Python для инженерной автоматизации, CLI-утилит и сервисной логики.' },
      { ...commonScale[4], comment: 'Строю качественные инженерные инструменты, стандартизирую код и ускоряю работу команды.' },
    ],
  },
  {
    id: 'git',
    title: 'Git',
    domain: 'vcs',
    description: 'Коммиты, ветки, merge request workflow, история изменений и совместная разработка.',
    levels: [
      { ...commonScale[0], comment: 'Почти не пользуюсь Git и не уверен в базовых командах.' },
      { ...commonScale[1], comment: 'Могу сделать clone, add, commit, pull, push и работать в простом ежедневном сценарии.' },
      { ...commonScale[2], comment: 'Понимаю ветки, rebase, разрешение конфликтов и уверенно работаю в командном workflow.' },
      { ...commonScale[3], comment: 'Хорошо управляю историей изменений, ревью-потоком и поддерживаю чистый процесс поставки кода.' },
      { ...commonScale[4], comment: 'Формирую инженерные практики вокруг Git и уверенно помогаю другим в сложных сценариях.' },
    ],
  },
  {
    id: 'linux-services',
    title: 'Linux Services',
    domain: 'services',
    description: 'Systemd, логи, запуск и сопровождение сервисов, конфиги и эксплуатация приложений.',
    levels: [
      { ...commonScale[0], comment: 'Пока не умею сопровождать сервисы на Linux и не понимаю жизненный цикл процессов.' },
      { ...commonScale[1], comment: 'Могу проверить статус сервиса, посмотреть логи и перезапустить приложение.' },
      { ...commonScale[2], comment: 'Работаю с systemd, конфигами и логами, понимаю типовые сценарии сопровождения сервиса.' },
      { ...commonScale[3], comment: 'Уверенно сопровождаю приложения в Linux, локализую проблемы и поддерживаю стабильность среды.' },
      { ...commonScale[4], comment: 'Стандартизирую эксплуатацию сервисов и проектирую более зрелые operational-практики.' },
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    domain: 'observability',
    description: 'Метрики, алерты, базовый health-check подход и эксплуатационный контроль.',
    levels: [
      { ...commonScale[0], comment: 'Пока не работал с мониторингом и не понимаю, какие сигналы важны для сервиса.' },
      { ...commonScale[1], comment: 'Понимаю базовую роль метрик и алертов, умею читать готовые dashboards.' },
      { ...commonScale[2], comment: 'Настраиваю базовые метрики, слежу за состоянием систем и понимаю, какие проблемы они подсвечивают.' },
      { ...commonScale[3], comment: 'Использую мониторинг как рабочий инструмент эксплуатации и принятия решений по стабильности.' },
      { ...commonScale[4], comment: 'Строю зрелую observability-практику, связывая метрики, алерты и эксплуатационные действия.' },
    ],
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    domain: 'observability',
    description: 'Диагностика падений, поиск причин, восстановление сервиса и postmortem-мышление.',
    levels: [
      { ...commonScale[0], comment: 'При инцидентах пока теряюсь и не понимаю последовательность диагностики.' },
      { ...commonScale[1], comment: 'Могу по инструкции проверить базовые симптомы и эскалировать проблему дальше.' },
      { ...commonScale[2], comment: 'Понимаю, как локализовать проблему, собрать факты и помочь в восстановлении сервиса.' },
      { ...commonScale[3], comment: 'Самостоятельно участвую в инцидентах, диагностирую причины и принимаю прикладные решения.' },
      { ...commonScale[4], comment: 'Строю зрелый incident-подход, postmortem-практики и уменьшаю повторяемость сбоев.' },
    ],
  },
  {
    id: 'cloud-basics',
    title: 'Cloud Basics',
    domain: 'cloud',
    description: 'Базовые сущности облака: VM, сети, storage, IAM и общая модель cloud-инфраструктуры.',
    levels: [
      { ...commonScale[0], comment: 'Почти не работал с облаками и не понимаю базовые сущности инфраструктуры.' },
      { ...commonScale[1], comment: 'Понимаю VM, storage, security groups и могу ориентироваться в базовой cloud-консоли.' },
      { ...commonScale[2], comment: 'Разворачиваю прикладные ресурсы в облаке и понимаю связи между сетью, доступами и compute.' },
      { ...commonScale[3], comment: 'Уверенно работаю с облачной инфраструктурой как с рабочей платформой для приложений.' },
      { ...commonScale[4], comment: 'Проектирую облачную базу системно и могу выбирать решения под разные operational-сценарии.' },
    ],
  },
  {
    id: 'ansible',
    title: 'Ansible',
    domain: 'iac',
    description: 'Автоматизация конфигурации, playbook-подход и воспроизводимые инфраструктурные изменения.',
    levels: [
      { ...commonScale[0], comment: 'Пока не использовал Ansible и не строил воспроизводимые конфигурационные сценарии.' },
      { ...commonScale[1], comment: 'Понимаю playbook-подход, inventory и могу запускать простые сценарии автоматизации.' },
      { ...commonScale[2], comment: 'Пишу playbooks под реальные задачи и автоматизирую конфигурационные изменения.' },
      { ...commonScale[3], comment: 'Уверенно использую Ansible в операционной работе и уменьшаю ручные изменения в инфраструктуре.' },
      { ...commonScale[4], comment: 'Проектирую зрелые automation-подходы и стандартизирую использование Ansible в команде.' },
    ],
  },
  {
    id: 'docker',
    title: 'Docker',
    domain: 'containers',
    description: 'Контейнеризация приложений, образы, registry, compose и базовая контейнерная практика.',
    levels: [
      { ...commonScale[0], comment: 'Пока не контейнеризировал приложения и не понимаю базовую модель Docker.' },
      { ...commonScale[1], comment: 'Понимаю, что такое образ и контейнер, умею запускать готовые образы и читать Dockerfile.' },
      { ...commonScale[2], comment: 'Сам собираю Docker-образы, использую compose и контейнеризирую прикладные сервисы.' },
      { ...commonScale[3], comment: 'Уверенно применяю Docker в рабочих пайплайнах и понимаю эксплуатационные ограничения контейнеров.' },
      { ...commonScale[4], comment: 'Оптимизирую контейнерный подход, build-процессы и правила использования Docker в команде.' },
    ],
  },
  {
    id: 'ci-cd',
    title: 'CI/CD',
    domain: 'delivery',
    description: 'Сборка, тестирование, деплой, пайплайны и повторяемая доставка изменений.',
    levels: [
      { ...commonScale[0], comment: 'Пока не участвовал в пайплайнах и не понимаю, как строится автоматическая доставка.' },
      { ...commonScale[1], comment: 'Понимаю базовую идею CI/CD и могу читать существующий pipeline.' },
      { ...commonScale[2], comment: 'Настраиваю простые pipeline-сценарии для сборки, тестов и доставки изменений.' },
      { ...commonScale[3], comment: 'Работаю с CI/CD как с ежедневным инструментом и понимаю надёжную схему поставки.' },
      { ...commonScale[4], comment: 'Строю зрелые delivery-процессы, сокращаю ручные шаги и улучшаю стабильность релизов.' },
    ],
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions',
    domain: 'delivery',
    description: 'Практическая реализация CI/CD через workflows, jobs, runners и секреты.',
    levels: [
      { ...commonScale[0], comment: 'Пока не настраивал workflows и не использовал GitHub Actions в реальных задачах.' },
      { ...commonScale[1], comment: 'Могу читать workflow-файлы, запускать готовые jobs и понимать базовую структуру pipeline.' },
      { ...commonScale[2], comment: 'Настраиваю практические workflows, jobs и secrets под сборку, тесты и деплой.' },
      { ...commonScale[3], comment: 'Уверенно сопровождаю GitHub Actions в рабочих проектах и улучшаю delivery-поток.' },
      { ...commonScale[4], comment: 'Проектирую устойчивую CI/CD-архитектуру в GitHub Actions и стандартизирую её использование.' },
    ],
  },
  {
    id: 'terraform',
    title: 'Terraform',
    domain: 'iac',
    description: 'Infrastructure as Code, state, модули, переменные и описательная модель инфраструктуры.',
    levels: [
      { ...commonScale[0], comment: 'Пока не работал с Terraform и не описывал инфраструктуру как код.' },
      { ...commonScale[1], comment: 'Понимаю базовую структуру конфигов, providers и могу читать простые Terraform-сценарии.' },
      { ...commonScale[2], comment: 'Создаю и меняю прикладную инфраструктуру через Terraform, понимаю state и переменные.' },
      { ...commonScale[3], comment: 'Уверенно использую Terraform в рабочем контуре и строю воспроизводимые IaC-сценарии.' },
      { ...commonScale[4], comment: 'Проектирую IaC-практики системно: модули, стандарты, безопасность и эксплуатационную устойчивость.' },
    ],
  },
  {
    id: 'prometheus-grafana',
    title: 'Prometheus + Grafana',
    domain: 'observability',
    description: 'Сбор метрик, dashboards, alerts и практики наблюдаемости для production-среды.',
    levels: [
      { ...commonScale[0], comment: 'Пока не работал с Prometheus и Grafana и не собирал метрики самостоятельно.' },
      { ...commonScale[1], comment: 'Понимаю назначение этих инструментов, читаю dashboards и ориентируюсь в базовых графиках.' },
      { ...commonScale[2], comment: 'Настраиваю метрики, dashboards и алерты для прикладных сервисов.' },
      { ...commonScale[3], comment: 'Использую Prometheus и Grafana как полноценный рабочий инструмент observability.' },
      { ...commonScale[4], comment: 'Строю зрелую систему мониторинга, связывая метрики, алерты и эксплуатационные решения.' },
    ],
  },
  {
    id: 'kubernetes-basics',
    title: 'Kubernetes Basics',
    domain: 'orchestration',
    description: 'Pods, deployments, services, config maps и базовый кластерный operational mindset.',
    levels: [
      { ...commonScale[0], comment: 'Пока не работал с Kubernetes и не понимаю основные сущности кластера.' },
      { ...commonScale[1], comment: 'Понимаю pods, deployments и services, могу читать манифесты и ориентироваться в базовой модели.' },
      { ...commonScale[2], comment: 'Разворачиваю и сопровождаю простые приложения в Kubernetes, понимаю базовые operational-сценарии.' },
      { ...commonScale[3], comment: 'Уверенно использую Kubernetes в работе, диагностирую типовые проблемы и понимаю поведение кластера.' },
      { ...commonScale[4], comment: 'Проектирую более зрелые кластерные практики и системно использую Kubernetes как платформу.' },
    ],
  },
  {
    id: 'test-automation',
    title: 'Test Automation',
    domain: 'testing',
    description: 'Автотесты, test suites, CI-интеграция и инженерный подход к качеству.',
    levels: [
      { ...commonScale[0], comment: 'Пока не пишу автотесты и не строю автоматизированный quality-процесс.' },
      { ...commonScale[1], comment: 'Могу запускать готовые тесты и немного править существующие сценарии.' },
      { ...commonScale[2], comment: 'Пишу прикладные автотесты, собираю наборы проверок и подключаю их к pipeline.' },
      { ...commonScale[3], comment: 'Системно развиваю test automation как часть инженерного процесса и качества релизов.' },
      { ...commonScale[4], comment: 'Строю зрелую automation-стратегию и делаю качество встроенной частью delivery-модели.' },
    ],
  },
  {
    id: 'sql',
    title: 'SQL',
    domain: 'analytics',
    description: 'Запросы, join, агрегации и работа с данными в прикладных и аналитических задачах.',
    levels: [
      { ...commonScale[0], comment: 'Пока не пишу SQL-запросы и не работаю с данными на практическом уровне.' },
      { ...commonScale[1], comment: 'Пишу простые select-запросы, фильтры и базовые сортировки.' },
      { ...commonScale[2], comment: 'Использую join, group by, агрегации и решаю прикладные задачи на данных.' },
      { ...commonScale[3], comment: 'Уверенно использую SQL в рабочих сценариях и понимаю структуру данных и запросов.' },
      { ...commonScale[4], comment: 'Строю сложные аналитические запросы и оптимизирую работу с данными системно.' },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    domain: 'analytics',
    description: 'Метрики, отчёты, анализ поведения данных и базовая продуктовая аналитика.',
    levels: [
      { ...commonScale[0], comment: 'Пока не умею формулировать метрики и работать с аналитической логикой.' },
      { ...commonScale[1], comment: 'Понимаю базовые метрики и могу читать готовые аналитические отчёты.' },
      { ...commonScale[2], comment: 'Собираю отчёты, анализирую данные и могу объяснить базовые выводы по метрикам.' },
      { ...commonScale[3], comment: 'Использую аналитику как рабочий инструмент принятия решений и оценки поведения системы.' },
      { ...commonScale[4], comment: 'Системно проектирую метрики, отчёты и аналитическую модель для прикладных задач.' },
    ],
  },
]