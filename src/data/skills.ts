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
  | 'security'
  | 'databases'
  | 'frontend'
  | 'backend'
  | 'communication'
  | 'product'

export type LocalizedText = {
  ru: string
  en: string
}

export type SkillLevelDescription = {
  level: 0 | 1 | 2 | 3 | 4
  title: LocalizedText
  comment: LocalizedText
}

export type Skill = {
  id: string
  title: LocalizedText
  domain: SkillDomain
  description: LocalizedText
  levels: SkillLevelDescription[]
}

const commonScale = {
  0: { level: 0 as const, title: { ru: 'Нет базы', en: 'No foundation' } },
  1: { level: 1 as const, title: { ru: 'Базовое знакомство', en: 'Basic familiarity' } },
  2: { level: 2 as const, title: { ru: 'Уверенная база', en: 'Solid foundation' } },
  3: { level: 3 as const, title: { ru: 'Рабочий уровень', en: 'Working level' } },
  4: { level: 4 as const, title: { ru: 'Сильный уровень', en: 'Strong level' } },
}

function makeLevels(ru: [string, string, string, string, string], en: [string, string, string, string, string]): SkillLevelDescription[] {
  return [
    { ...commonScale[0], comment: { ru: ru[0], en: en[0] } },
    { ...commonScale[1], comment: { ru: ru[1], en: en[1] } },
    { ...commonScale[2], comment: { ru: ru[2], en: en[2] } },
    { ...commonScale[3], comment: { ru: ru[3], en: en[3] } },
    { ...commonScale[4], comment: { ru: ru[4], en: en[4] } },
  ]
}

export const skills: Skill[] = [
  {
    id: 'linux-basics',
    title: { ru: 'Основы Linux', en: 'Linux Basics' },
    domain: 'linux',
    description: {
      ru: 'Файловая система, права, процессы, пакеты, базовая навигация и администрирование Linux.',
      en: 'File system, permissions, processes, packages, and basic Linux navigation and administration.',
    },
    levels: makeLevels(
      [
        'Почти не работал с Linux, команды и структура системы пока незнакомы.',
        'Могу зайти на сервер, ходить по файловой системе, смотреть процессы и выполнять простые команды.',
        'Понимаю права, systemctl, логи, пакеты и умею решать типовые задачи без постоянных подсказок.',
        'Самостоятельно сопровождаю Linux-среду, диагностирую проблемы и правлю конфиги в рабочих сценариях.',
        'Оптимизирую окружение, стандартизирую практики и уверенно объясняю другим эксплуатационные решения.',
      ],
      [
        'I have barely worked with Linux, and its commands and structure are still unfamiliar.',
        'I can log into a server, navigate the file system, inspect processes, and run simple commands.',
        'I understand permissions, systemctl, logs, and packages and can solve routine tasks without constant guidance.',
        'I independently maintain Linux environments, diagnose issues, and update configs in real scenarios.',
        'I optimize environments, standardize practices, and confidently explain operational decisions to others.',
      ],
    ),
  },
  {
    id: 'network-basics',
    title: { ru: 'Основы сетей', en: 'Network Basics' },
    domain: 'network',
    description: {
      ru: 'IP, DNS, HTTP, порты, маршрутизация, базовая диагностика сети и сервисной связности.',
      en: 'IP, DNS, HTTP, ports, routing, and basic diagnostics of networks and service connectivity.',
    },
    levels: makeLevels(
      [
        'Слабо понимаю, как приложения общаются по сети и что означают порты, DNS и маршруты.',
        'Понимаю, что такое IP, DNS, HTTP и могу выполнить простую сетевую диагностику.',
        'Уверенно использую ping, traceroute, nslookup, curl и понимаю типовые сетевые проблемы.',
        'Разбираюсь в сетевом поведении сервисов, умею локализовать сбои и объяснить источник проблемы.',
        'Проектирую и диагностирую более сложные сетевые сценарии, включая балансировку и сервисную связность.',
      ],
      [
        'I have a weak understanding of how applications communicate over a network and what ports, DNS, and routes mean.',
        'I understand IP, DNS, and HTTP and can perform simple network diagnostics.',
        'I confidently use ping, traceroute, nslookup, and curl and understand common network problems.',
        'I understand service network behavior, can localize failures, and explain the root cause.',
        'I design and troubleshoot more complex network scenarios, including load balancing and service connectivity.',
      ],
    ),
  },
  {
    id: 'bash',
    title: { ru: 'Bash / Shell', en: 'Bash / Shell' },
    domain: 'scripting',
    description: {
      ru: 'Командная строка, пайпы, переменные, простые скрипты и автоматизация через shell.',
      en: 'Command line, pipes, variables, simple scripts, and shell-based automation.',
    },
    levels: makeLevels(
      [
        'Почти не использую shell и не умею собирать команды в рабочие цепочки.',
        'Могу выполнять типовые команды, пользоваться grep, cat, ls и простыми пайпами.',
        'Пишу несложные shell-скрипты, использую переменные, циклы и автоматизирую рутину.',
        'Собираю рабочие shell-утилиты, умею дебажить скрипты и автоматизировать повторяемые операции.',
        'Строю устойчивые shell-сценарии для эксплуатации и умею задавать хорошие практики команде.',
      ],
      [
        'I barely use the shell and cannot yet combine commands into practical workflows.',
        'I can run common commands and use grep, cat, ls, and simple pipes.',
        'I write simple shell scripts, use variables and loops, and automate routine tasks.',
        'I build useful shell utilities, debug scripts, and automate repeatable operations.',
        'I build reliable shell workflows for operations and promote solid practices in a team.',
      ],
    ),
  },
  {
    id: 'python',
    title: { ru: 'Python', en: 'Python' },
    domain: 'programming',
    description: {
      ru: 'Скрипты, утилиты, автоматизация, работа с API и базовая инженерная логика.',
      en: 'Scripts, utilities, automation, API work, and core engineering logic.',
    },
    levels: makeLevels(
      [
        'Почти не писал на Python и не умею решать через него повседневные инженерные задачи.',
        'Пишу простые скрипты, работаю с переменными, условиями, файлами и базовыми библиотеками.',
        'Автоматизирую прикладные задачи, хожу в API, обрабатываю данные и пишу полезные утилиты.',
        'Уверенно использую Python для инженерной автоматизации, CLI-утилит и сервисной логики.',
        'Строю качественные инженерные инструменты, стандартизирую код и ускоряю работу команды.',
      ],
      [
        'I have barely written Python and cannot yet solve day-to-day engineering tasks with it.',
        'I write simple scripts and work with variables, conditions, files, and basic libraries.',
        'I automate practical tasks, work with APIs, process data, and build useful utilities.',
        'I confidently use Python for engineering automation, CLI tools, and service logic.',
        'I build high-quality engineering tools, standardize code, and help the team move faster.',
      ],
    ),
  },
  {
    id: 'git',
    title: { ru: 'Git', en: 'Git' },
    domain: 'vcs',
    description: {
      ru: 'Коммиты, ветки, merge request workflow, история изменений и совместная разработка.',
      en: 'Commits, branches, merge request workflow, change history, and collaborative development.',
    },
    levels: makeLevels(
      [
        'Почти не пользуюсь Git и не уверен в базовых командах.',
        'Могу сделать clone, add, commit, pull, push и работать в простом ежедневном сценарии.',
        'Понимаю ветки, rebase, разрешение конфликтов и уверенно работаю в командном workflow.',
        'Хорошо управляю историей изменений, ревью-потоком и поддерживаю чистый процесс поставки кода.',
        'Формирую инженерные практики вокруг Git и уверенно помогаю другим в сложных сценариях.',
      ],
      [
        'I rarely use Git and am not confident with the basic commands.',
        'I can clone, add, commit, pull, and push and work through a simple daily workflow.',
        'I understand branches, rebase, conflict resolution, and work confidently in a team workflow.',
        'I manage change history well, support the review flow, and keep code delivery clean.',
        'I shape engineering practices around Git and confidently help others in advanced scenarios.',
      ],
    ),
  },
  {
    id: 'linux-services',
    title: { ru: 'Сервисы Linux', en: 'Linux Services' },
    domain: 'services',
    description: {
      ru: 'Systemd, логи, запуск и сопровождение сервисов, конфиги и эксплуатация приложений.',
      en: 'Systemd, logs, service startup and maintenance, configs, and application operations.',
    },
    levels: makeLevels(
      [
        'Пока не умею сопровождать сервисы на Linux и не понимаю жизненный цикл процессов.',
        'Могу проверить статус сервиса, посмотреть логи и перезапустить приложение.',
        'Работаю с systemd, конфигами и логами, понимаю типовые сценарии сопровождения сервиса.',
        'Уверенно сопровождаю приложения в Linux, локализую проблемы и поддерживаю стабильность среды.',
        'Стандартизирую эксплуатацию сервисов и проектирую более зрелые operational-практики.',
      ],
      [
        'I cannot yet operate Linux services and do not fully understand process lifecycles.',
        'I can check a service status, inspect logs, and restart an application.',
        'I work with systemd, configs, and logs and understand common service operation scenarios.',
        'I confidently operate applications on Linux, localize problems, and maintain environment stability.',
        'I standardize service operations and design more mature operational practices.',
      ],
    ),
  },
  {
    id: 'monitoring',
    title: { ru: 'Мониторинг', en: 'Monitoring' },
    domain: 'observability',
    description: {
      ru: 'Метрики, алерты, базовый health-check подход и эксплуатационный контроль.',
      en: 'Metrics, alerts, a basic health-check approach, and operational visibility.',
    },
    levels: makeLevels(
      [
        'Пока не работал с мониторингом и не понимаю, какие сигналы важны для сервиса.',
        'Понимаю базовую роль метрик и алертов, умею читать готовые dashboards.',
        'Настраиваю базовые метрики, слежу за состоянием систем и понимаю, какие проблемы они подсвечивают.',
        'Использую мониторинг как рабочий инструмент эксплуатации и принятия решений по стабильности.',
        'Строю зрелую observability-практику, связывая метрики, алерты и эксплуатационные действия.',
      ],
      [
        'I have not worked with monitoring yet and do not know which signals matter for a service.',
        'I understand the basic role of metrics and alerts and can read existing dashboards.',
        'I configure basic metrics, monitor system health, and understand the problems they reveal.',
        'I use monitoring as an everyday tool for operations and stability decisions.',
        'I build a mature observability practice by connecting metrics, alerts, and operational action.',
      ],
    ),
  },
  {
    id: 'incident-response',
    title: { ru: 'Реагирование на инциденты', en: 'Incident Response' },
    domain: 'observability',
    description: {
      ru: 'Диагностика падений, поиск причин, восстановление сервиса и postmortem-мышление.',
      en: 'Outage diagnostics, root-cause analysis, service recovery, and postmortem thinking.',
    },
    levels: makeLevels(
      [
        'При инцидентах пока теряюсь и не понимаю последовательность диагностики.',
        'Могу по инструкции проверить базовые симптомы и эскалировать проблему дальше.',
        'Понимаю, как локализовать проблему, собрать факты и помочь в восстановлении сервиса.',
        'Самостоятельно участвую в инцидентах, диагностирую причины и принимаю прикладные решения.',
        'Строю зрелый incident-подход, postmortem-практики и уменьшаю повторяемость сбоев.',
      ],
      [
        'During incidents I still get lost and do not understand the right troubleshooting sequence.',
        'I can follow a runbook, check basic symptoms, and escalate the issue further.',
        'I understand how to localize a problem, collect facts, and help restore a service.',
        'I independently participate in incidents, diagnose causes, and make practical decisions.',
        'I build a mature incident approach, postmortem practices, and reduce repeated failures.',
      ],
    ),
  },
  {
    id: 'cloud-basics',
    title: { ru: 'Основы облаков', en: 'Cloud Basics' },
    domain: 'cloud',
    description: {
      ru: 'Базовые сущности облака: VM, сети, storage, IAM и общая модель cloud-инфраструктуры.',
      en: 'Core cloud concepts: VM, networks, storage, IAM, and the overall cloud infrastructure model.',
    },
    levels: makeLevels(
      [
        'Почти не работал с облаками и не понимаю базовые сущности инфраструктуры.',
        'Понимаю VM, storage, security groups и могу ориентироваться в базовой cloud-консоли.',
        'Разворачиваю прикладные ресурсы в облаке и понимаю связи между сетью, доступами и compute.',
        'Уверенно работаю с облачной инфраструктурой как с рабочей платформой для приложений.',
        'Проектирую облачную базу системно и могу выбирать решения под разные operational-сценарии.',
      ],
      [
        'I have barely worked with cloud platforms and do not yet understand their core building blocks.',
        'I understand VMs, storage, and security groups and can navigate a basic cloud console.',
        'I deploy application resources in the cloud and understand the links between network, access, and compute.',
        'I confidently use cloud infrastructure as a working platform for applications.',
        'I design cloud foundations systematically and can choose solutions for different operational scenarios.',
      ],
    ),
  },
  {
    id: 'ansible',
    title: { ru: 'Ansible', en: 'Ansible' },
    domain: 'iac',
    description: {
      ru: 'Автоматизация конфигурации, playbook-подход и воспроизводимые инфраструктурные изменения.',
      en: 'Configuration automation, a playbook approach, and reproducible infrastructure changes.',
    },
    levels: makeLevels(
      [
        'Пока не использовал Ansible и не строил воспроизводимые конфигурационные сценарии.',
        'Понимаю playbook-подход, inventory и могу запускать простые сценарии автоматизации.',
        'Пишу playbooks под реальные задачи и автоматизирую конфигурационные изменения.',
        'Уверенно использую Ansible в операционной работе и уменьшаю ручные изменения в инфраструктуре.',
        'Проектирую зрелые automation-подходы и стандартизирую использование Ansible в команде.',
      ],
      [
        'I have not used Ansible yet and have not built reproducible configuration workflows.',
        'I understand the playbook approach and inventory and can run simple automation scenarios.',
        'I write playbooks for real tasks and automate configuration changes.',
        'I confidently use Ansible in operations and reduce manual infrastructure changes.',
        'I design mature automation approaches and standardize Ansible usage in the team.',
      ],
    ),
  },
  {
    id: 'docker',
    title: { ru: 'Docker', en: 'Docker' },
    domain: 'containers',
    description: {
      ru: 'Контейнеризация приложений, образы, registry, compose и базовая контейнерная практика.',
      en: 'Application containerization, images, registries, compose, and core container practices.',
    },
    levels: makeLevels(
      [
        'Пока не контейнеризировал приложения и не понимаю базовую модель Docker.',
        'Понимаю, что такое образ и контейнер, умею запускать готовые образы и читать Dockerfile.',
        'Сам собираю Docker-образы, использую compose и контейнеризирую прикладные сервисы.',
        'Уверенно применяю Docker в рабочих пайплайнах и понимаю эксплуатационные ограничения контейнеров.',
        'Оптимизирую контейнерный подход, build-процессы и правила использования Docker в команде.',
      ],
      [
        'I have not containerized applications yet and do not understand the core Docker model.',
        'I understand what images and containers are, can run existing images, and can read a Dockerfile.',
        'I build Docker images myself, use compose, and containerize application services.',
        'I confidently use Docker in working pipelines and understand the operational limits of containers.',
        'I optimize container workflows, build processes, and Docker standards inside a team.',
      ],
    ),
  },
  {
    id: 'ci-cd',
    title: { ru: 'CI/CD', en: 'CI/CD' },
    domain: 'delivery',
    description: {
      ru: 'Сборка, тестирование, деплой, пайплайны и повторяемая доставка изменений.',
      en: 'Build, test, deploy, pipelines, and repeatable delivery of changes.',
    },
    levels: makeLevels(
      [
        'Пока не участвовал в пайплайнах и не понимаю, как строится автоматическая доставка.',
        'Понимаю базовую идею CI/CD и могу читать существующий pipeline.',
        'Настраиваю простые pipeline-сценарии для сборки, тестов и доставки изменений.',
        'Работаю с CI/CD как с ежедневным инструментом и понимаю надёжную схему поставки.',
        'Строю зрелые delivery-процессы, сокращаю ручные шаги и улучшаю стабильность релизов.',
      ],
      [
        'I have not worked with pipelines yet and do not understand how automated delivery is built.',
        'I understand the basic CI/CD idea and can read an existing pipeline.',
        'I configure simple pipelines for builds, tests, and delivery.',
        'I use CI/CD as an everyday tool and understand reliable delivery patterns.',
        'I build mature delivery processes, reduce manual steps, and improve release stability.',
      ],
    ),
  },
  {
    id: 'github-actions',
    title: { ru: 'GitHub Actions', en: 'GitHub Actions' },
    domain: 'delivery',
    description: {
      ru: 'Практическая реализация CI/CD через workflows, jobs, runners и секреты.',
      en: 'Practical CI/CD implementation with workflows, jobs, runners, and secrets.',
    },
    levels: makeLevels(
      [
        'Пока не настраивал workflows и не использовал GitHub Actions в реальных задачах.',
        'Могу читать workflow-файлы, запускать готовые jobs и понимать базовую структуру pipeline.',
        'Настраиваю практические workflows, jobs и secrets под сборку, тесты и деплой.',
        'Уверенно сопровождаю GitHub Actions в рабочих проектах и улучшаю delivery-поток.',
        'Проектирую устойчивую CI/CD-архитектуру в GitHub Actions и стандартизирую её использование.',
      ],
      [
        'I have not configured workflows or used GitHub Actions in real tasks yet.',
        'I can read workflow files, run existing jobs, and understand the basic structure of a pipeline.',
        'I configure practical workflows, jobs, and secrets for build, test, and deployment.',
        'I confidently support GitHub Actions in real projects and improve the delivery flow.',
        'I design resilient CI/CD architecture in GitHub Actions and standardize its usage.',
      ],
    ),
  },
  {
    id: 'terraform',
    title: { ru: 'Terraform', en: 'Terraform' },
    domain: 'iac',
    description: {
      ru: 'Infrastructure as Code, state, модули, переменные и описательная модель инфраструктуры.',
      en: 'Infrastructure as Code, state, modules, variables, and a declarative infrastructure model.',
    },
    levels: makeLevels(
      [
        'Пока не работал с Terraform и не описывал инфраструктуру как код.',
        'Понимаю базовую структуру конфигов, providers и могу читать простые Terraform-сценарии.',
        'Создаю и меняю прикладную инфраструктуру через Terraform, понимаю state и переменные.',
        'Уверенно использую Terraform в рабочем контуре и строю воспроизводимые IaC-сценарии.',
        'Проектирую IaC-практики системно: модули, стандарты, безопасность и эксплуатационную устойчивость.',
      ],
      [
        'I have not worked with Terraform yet and have not described infrastructure as code.',
        'I understand the basic structure of configs and providers and can read simple Terraform code.',
        'I create and modify application infrastructure with Terraform and understand state and variables.',
        'I confidently use Terraform in real delivery flows and build reproducible IaC scenarios.',
        'I design IaC practices systematically: modules, standards, security, and operational resilience.',
      ],
    ),
  },
  {
    id: 'prometheus-grafana',
    title: { ru: 'Prometheus + Grafana', en: 'Prometheus + Grafana' },
    domain: 'observability',
    description: {
      ru: 'Сбор метрик, dashboards, alerts и практики наблюдаемости для production-среды.',
      en: 'Metrics collection, dashboards, alerts, and observability practices for production environments.',
    },
    levels: makeLevels(
      [
        'Пока не работал с Prometheus и Grafana и не собирал метрики самостоятельно.',
        'Понимаю назначение этих инструментов, читаю dashboards и ориентируюсь в базовых графиках.',
        'Настраиваю метрики, dashboards и алерты для прикладных сервисов.',
        'Использую Prometheus и Grafana как полноценный рабочий инструмент observability.',
        'Строю зрелую систему мониторинга, связывая метрики, алерты и эксплуатационные решения.',
      ],
      [
        'I have not worked with Prometheus and Grafana yet and have not collected metrics on my own.',
        'I understand what these tools are for, can read dashboards, and can navigate basic charts.',
        'I configure metrics, dashboards, and alerts for application services.',
        'I use Prometheus and Grafana as a full observability tool in daily work.',
        'I build a mature monitoring system by connecting metrics, alerts, and operational decisions.',
      ],
    ),
  },
  {
    id: 'kubernetes-basics',
    title: { ru: 'Основы Kubernetes', en: 'Kubernetes Basics' },
    domain: 'orchestration',
    description: {
      ru: 'Pods, deployments, services, config maps и базовый кластерный operational mindset.',
      en: 'Pods, deployments, services, config maps, and a basic cluster operations mindset.',
    },
    levels: makeLevels(
      [
        'Пока не работал с Kubernetes и не понимаю основные сущности кластера.',
        'Понимаю pods, deployments и services, могу читать манифесты и ориентироваться в базовой модели.',
        'Разворачиваю и сопровождаю простые приложения в Kubernetes, понимаю базовые operational-сценарии.',
        'Уверенно использую Kubernetes в работе, диагностирую типовые проблемы и понимаю поведение кластера.',
        'Проектирую более зрелые кластерные практики и системно использую Kubernetes как платформу.',
      ],
      [
        'I have not worked with Kubernetes yet and do not understand the core cluster objects.',
        'I understand pods, deployments, and services, can read manifests, and can navigate the basic model.',
        'I deploy and operate simple applications in Kubernetes and understand basic operational scenarios.',
        'I confidently use Kubernetes at work, diagnose common issues, and understand cluster behavior.',
        'I design more mature cluster practices and use Kubernetes systematically as a platform.',
      ],
    ),
  },
  {
    id: 'test-automation',
    title: { ru: 'Автоматизация тестирования', en: 'Test Automation' },
    domain: 'testing',
    description: {
      ru: 'Автотесты, test suites, CI-интеграция и инженерный подход к качеству.',
      en: 'Automated tests, test suites, CI integration, and an engineering approach to quality.',
    },
    levels: makeLevels(
      [
        'Пока не пишу автотесты и не строю автоматизированный quality-процесс.',
        'Могу запускать готовые тесты и немного править существующие сценарии.',
        'Пишу прикладные автотесты, собираю наборы проверок и подключаю их к pipeline.',
        'Системно развиваю test automation как часть инженерного процесса и качества релизов.',
        'Строю зрелую automation-стратегию и делаю качество встроенной частью delivery-модели.',
      ],
      [
        'I do not write automated tests yet and do not build an automated quality process.',
        'I can run existing tests and make small edits to current scenarios.',
        'I write practical automated tests, assemble test suites, and connect them to a pipeline.',
        'I develop test automation systematically as part of engineering workflow and release quality.',
        'I build a mature automation strategy and make quality a built-in part of the delivery model.',
      ],
    ),
  },
  {
    id: 'sql',
    title: { ru: 'SQL', en: 'SQL' },
    domain: 'databases',
    description: {
      ru: 'Запросы, join, агрегации и работа с данными в прикладных и аналитических задачах.',
      en: 'Queries, joins, aggregations, and data work for product and analytics tasks.',
    },
    levels: makeLevels(
      [
        'Пока не пишу SQL-запросы и не работаю с данными на практическом уровне.',
        'Пишу простые select-запросы, фильтры и базовые сортировки.',
        'Использую join, group by, агрегации и решаю прикладные задачи на данных.',
        'Уверенно использую SQL в рабочих сценариях и понимаю структуру данных и запросов.',
        'Строю сложные аналитические запросы и оптимизирую работу с данными системно.',
      ],
      [
        'I do not write SQL queries yet and do not work with data in practical scenarios.',
        'I write simple SELECT queries, filters, and basic sorting.',
        'I use joins, group by, and aggregations to solve practical data tasks.',
        'I confidently use SQL in work scenarios and understand data structure and query patterns.',
        'I build complex analytical queries and optimize data work systematically.',
      ],
    ),
  },
  {
    id: 'analytics',
    title: { ru: 'Аналитика', en: 'Analytics' },
    domain: 'analytics',
    description: {
      ru: 'Метрики, отчёты, анализ поведения данных и базовая продуктовая аналитика.',
      en: 'Metrics, reporting, data behavior analysis, and basic product analytics.',
    },
    levels: makeLevels(
      [
        'Пока не умею формулировать метрики и работать с аналитической логикой.',
        'Понимаю базовые метрики и могу читать готовые аналитические отчёты.',
        'Собираю отчёты, анализирую данные и могу объяснить базовые выводы по метрикам.',
        'Использую аналитику как рабочий инструмент принятия решений и оценки поведения системы.',
        'Системно проектирую метрики, отчёты и аналитическую модель для прикладных задач.',
      ],
      [
        'I cannot yet define metrics or work confidently with analytical logic.',
        'I understand basic metrics and can read ready-made analytical reports.',
        'I build reports, analyze data, and explain the basic findings behind metrics.',
        'I use analytics as a working tool for decision-making and understanding system behavior.',
        'I systematically design metrics, reports, and analytical models for practical tasks.',
      ],
    ),
  },

  {
    id: 'javascript-typescript',
    title: { ru: 'JavaScript / TypeScript', en: 'JavaScript / TypeScript' },
    domain: 'frontend',
    description: {
      ru: 'Язык фронтенда и части backend-экосистемы: типизация, асинхронность, модули и прикладная логика.',
      en: 'Core language for frontend and part of the backend ecosystem: typing, async flows, modules, and application logic.',
    },
    levels: makeLevels(
      [
        'Пока почти не пишу на JavaScript или TypeScript и слабо понимаю синтаксис и модель исполнения.',
        'Могу писать простую логику, работать с функциями, массивами, объектами и базовой асинхронностью.',
        'Уверенно пишу прикладной код, использую типы, модули и разбираюсь в типовых сценариях приложения.',
        'Пишу рабочие модули, поддерживаю структуру проекта и уверенно дебажу приложение.',
        'Проектирую устойчивую кодовую базу, улучшаю архитектуру и задаю хорошие практики команды.',
      ],
      [
        'I barely write JavaScript or TypeScript yet and only weakly understand the syntax and execution model.',
        'I can write simple logic and work with functions, arrays, objects, and basic async flows.',
        'I confidently write application code, use types and modules, and handle common app scenarios.',
        'I write production-ready modules, maintain project structure, and confidently debug the app.',
        'I design sustainable codebases, improve architecture, and set strong team practices.',
      ],
    ),
  },
  {
    id: 'react',
    title: { ru: 'React', en: 'React' },
    domain: 'frontend',
    description: {
      ru: 'Компоненты, props, state, hooks, композиция интерфейсов и базовая frontend-архитектура.',
      en: 'Components, props, state, hooks, UI composition, and basic frontend architecture.',
    },
    levels: makeLevels(
      [
        'Пока почти не работал с React и не понимаю компонентный подход.',
        'Могу собрать простые компоненты, передавать props и работать с базовым state.',
        'Уверенно использую hooks, формы, списки и строю небольшие страницы и экраны.',
        'Собираю рабочие интерфейсы, управляю состоянием и поддерживаю читаемую структуру приложения.',
        'Проектирую зрелые frontend-решения, развиваю архитектуру и задаю стандарты качества UI-кода.',
      ],
      [
        'I have barely worked with React and do not yet understand the component model.',
        'I can build simple components, pass props, and work with basic state.',
        'I confidently use hooks, forms, and lists and build small pages and screens.',
        'I build production interfaces, manage state, and maintain a readable application structure.',
        'I design mature frontend solutions, evolve architecture, and define strong UI engineering standards.',
      ],
    ),
  },
  {
    id: 'html-css',
    title: { ru: 'HTML / CSS', en: 'HTML / CSS' },
    domain: 'frontend',
    description: {
      ru: 'Разметка, адаптивность, layout, базовая визуальная иерархия и стилизация интерфейсов.',
      en: 'Markup, responsiveness, layout, basic visual hierarchy, and interface styling.',
    },
    levels: makeLevels(
      [
        'Пока слабо владею HTML и CSS и неуверенно собираю простые интерфейсы.',
        'Могу сверстать несложный экран, использовать flex/grid и базовые стили.',
        'Уверенно собираю адаптивные экраны, работаю с layout и поддерживаю чистую структуру стилей.',
        'Решаю реальные UI-задачи, поддерживаю дизайн-системный подход и стабильно собираю интерфейсы.',
        'Проектирую зрелую систему стилей, стандартизирую UI-паттерны и повышаю качество фронтенда.',
      ],
      [
        'I have weak HTML and CSS skills and do not yet build even simple interfaces confidently.',
        'I can build a simple screen and use flex/grid and basic styling.',
        'I confidently build responsive screens, work with layout, and keep styles organized.',
        'I solve real UI tasks, support a design-system mindset, and consistently build interfaces.',
        'I design mature styling systems, standardize UI patterns, and improve frontend quality.',
      ],
    ),
  },
  {
    id: 'api-integration',
    title: { ru: 'Интеграции с API', en: 'API Integration' },
    domain: 'backend',
    description: {
      ru: 'REST API, запросы, авторизация, обработка ответов и интеграционное мышление.',
      en: 'REST APIs, requests, authorization, response handling, and an integration mindset.',
    },
    levels: makeLevels(
      [
        'Пока не работал с API и не понимаю, как приложение обменивается данными с внешними сервисами.',
        'Могу отправить простой запрос, прочитать ответ и использовать готовый endpoint.',
        'Уверенно работаю с API, понимаю авторизацию, ошибки и типовые интеграционные сценарии.',
        'Проектирую и поддерживаю прикладные интеграции, умею локализовать проблемы на стыке сервисов.',
        'Строю зрелые интеграционные подходы, стандартизирую взаимодействие сервисов и ускоряю разработку.',
      ],
      [
        'I have not worked with APIs yet and do not understand how applications exchange data with external services.',
        'I can send a simple request, read a response, and use an existing endpoint.',
        'I confidently work with APIs and understand authorization, errors, and common integration scenarios.',
        'I design and support practical integrations and can localize problems between services.',
        'I build mature integration approaches, standardize service interactions, and speed up delivery.',
      ],
    ),
  },
  {
    id: 'database-design',
    title: { ru: 'Проектирование БД', en: 'Database Design' },
    domain: 'databases',
    description: {
      ru: 'Схемы данных, связи, нормализация, ключи и практическая модель хранения данных.',
      en: 'Data schemas, relations, normalization, keys, and practical storage modeling.',
    },
    levels: makeLevels(
      [
        'Пока не проектирую базы данных и слабо понимаю, как строятся сущности и связи.',
        'Понимаю таблицы, ключи и могу собрать простую схему под прикладную задачу.',
        'Проектирую адекватные схемы, понимаю связи, ограничения и типовые компромиссы.',
        'Уверенно строю рабочие модели данных и принимаю практические решения по структуре хранения.',
        'Проектирую зрелые data-модели, стандартизирую подходы и улучшаю устойчивость систем.',
      ],
      [
        'I do not design databases yet and only weakly understand how entities and relations are built.',
        'I understand tables and keys and can assemble a simple schema for a practical task.',
        'I design reasonable schemas and understand relations, constraints, and common trade-offs.',
        'I confidently build working data models and make practical storage-structure decisions.',
        'I design mature data models, standardize approaches, and improve system resilience.',
      ],
    ),
  },
  {
    id: 'debugging',
    title: { ru: 'Диагностика и дебаг', en: 'Debugging' },
    domain: 'backend',
    description: {
      ru: 'Поиск причин ошибок, чтение логов, трассировка поведения приложения и практический troubleshooting.',
      en: 'Finding root causes of errors, reading logs, tracing app behavior, and practical troubleshooting.',
    },
    levels: makeLevels(
      [
        'При ошибках часто теряюсь и не понимаю, с чего начинать диагностику.',
        'Могу повторить проблему, посмотреть логи и выполнить базовую проверку гипотез.',
        'Уверенно локализую типовые ошибки и умею разложить проблему на проверяемые части.',
        'Системно дебажу приложения и инфраструктурные сценарии, быстро сужаю область поиска.',
        'Строю зрелый troubleshooting-подход и помогаю команде быстрее выходить на причину проблемы.',
      ],
      [
        'When errors appear, I often get lost and do not know where to start debugging.',
        'I can reproduce a problem, read logs, and run basic hypothesis checks.',
        'I confidently localize typical errors and break problems into testable parts.',
        'I systematically debug applications and infrastructure scenarios and quickly narrow the search area.',
        'I build a mature troubleshooting approach and help the team reach root causes faster.',
      ],
    ),
  },
  {
    id: 'security-basics',
    title: { ru: 'Основы безопасности', en: 'Security Basics' },
    domain: 'security',
    description: {
      ru: 'Базовые практики доступа, секретов, уязвимостей, безопасной конфигурации и минимизации рисков.',
      en: 'Basic practices around access, secrets, vulnerabilities, secure configuration, and risk reduction.',
    },
    levels: makeLevels(
      [
        'Пока слабо понимаю базовые принципы безопасности и не учитываю их системно.',
        'Понимаю роль паролей, секретов, прав доступа и базовых правил безопасной работы.',
        'Применяю базовые security-практики в коде, инфраструктуре и повседневной работе.',
        'Уверенно оцениваю типовые риски, ограничиваю доступы и делаю окружение безопаснее.',
        'Формирую зрелый security mindset и встраиваю безопасность в инженерные процессы.',
      ],
      [
        'I have a weak understanding of core security principles and do not yet account for them systematically.',
        'I understand the role of passwords, secrets, access rights, and basic secure work habits.',
        'I apply baseline security practices in code, infrastructure, and daily work.',
        'I confidently assess common risks, limit access, and make environments safer.',
        'I build a mature security mindset and embed safety into engineering processes.',
      ],
    ),
  },
  {
    id: 'communication',
    title: { ru: 'Коммуникация', en: 'Communication' },
    domain: 'communication',
    description: {
      ru: 'Умение объяснять задачи, уточнять требования, фиксировать договорённости и работать в команде.',
      en: 'Ability to explain tasks, clarify requirements, document agreements, and work effectively in a team.',
    },
    levels: makeLevels(
      [
        'Пока неуверенно коммуницирую по задачам и редко проясняю контекст.',
        'Могу задать уточняющие вопросы, кратко описать проблему и донести базовый статус.',
        'Уверенно синхронизируюсь с коллегами, фиксирую договорённости и объясняю технические решения.',
        'Хорошо веду рабочую коммуникацию между ролями и помогаю снижать недопонимание в команде.',
        'Формирую зрелую командную коммуникацию и повышаю скорость принятия решений.',
      ],
      [
        'I am not yet confident in task-related communication and rarely clarify context.',
        'I can ask clarifying questions, describe a problem briefly, and share a basic status update.',
        'I confidently sync with teammates, document agreements, and explain technical decisions.',
        'I handle cross-role communication well and help reduce misunderstanding in a team.',
        'I shape mature team communication and improve decision-making speed.',
      ],
    ),
  },
  {
    id: 'documentation',
    title: { ru: 'Документация', en: 'Documentation' },
    domain: 'communication',
    description: {
      ru: 'Описание решений, runbooks, инструкции, архитектурные заметки и поддержка инженерного контекста.',
      en: 'Describing solutions, runbooks, instructions, architecture notes, and maintaining engineering context.',
    },
    levels: makeLevels(
      [
        'Пока почти не документирую решения и часто держу рабочий контекст только в голове.',
        'Могу оформить простую инструкцию или краткое описание процесса.',
        'Регулярно документирую рабочие шаги, решения и полезный контекст для команды.',
        'Поддерживаю качественные runbooks и инженерные документы, которыми реально пользуются.',
        'Строю зрелую документационную культуру и уменьшаю зависимость команды от устной передачи знаний.',
      ],
      [
        'I barely document solutions yet and often keep working context only in my head.',
        'I can write a simple guide or a short process description.',
        'I regularly document working steps, decisions, and useful team context.',
        'I maintain high-quality runbooks and engineering documents that people actually use.',
        'I build a mature documentation culture and reduce dependence on verbal knowledge transfer.',
      ],
    ),
  },
  {
    id: 'product-thinking',
    title: { ru: 'Продуктовое мышление', en: 'Product Thinking' },
    domain: 'product',
    description: {
      ru: 'Понимание пользовательской ценности, целей продукта, компромиссов и приоритетов изменений.',
      en: 'Understanding user value, product goals, trade-offs, and change prioritization.',
    },
    levels: makeLevels(
      [
        'Пока редко думаю о пользовательской ценности и фокусируюсь только на выполнении задачи.',
        'Понимаю, что у задач есть продуктовый контекст, и могу учитывать базовые приоритеты.',
        'Учитываю влияние решений на пользователя, продукт и команду, а не только на код.',
        'Хорошо балансирую техническое качество и продуктовую ценность при принятии решений.',
        'Системно связываю инженерные решения с результатом для продукта и бизнеса.',
      ],
      [
        'I rarely think about user value yet and tend to focus only on task completion.',
        'I understand that tasks have product context and can account for basic priorities.',
        'I consider the impact of decisions on the user, product, and team, not just the code.',
        'I balance technical quality and product value well when making decisions.',
        'I systematically connect engineering decisions to product and business outcomes.',
      ],
    ),
  },
  {
    id: 'system-design',
    title: { ru: 'Системное мышление', en: 'System Design Thinking' },
    domain: 'backend',
    description: {
      ru: 'Понимание компонентов системы, зависимостей, отказоустойчивости, масштабирования и trade-offs.',
      en: 'Understanding system components, dependencies, resilience, scaling, and trade-offs.',
    },
    levels: makeLevels(
      [
        'Пока слабо представляю систему целиком и думаю в рамках отдельных задач.',
        'Понимаю, что сервисы связаны между собой, и могу читать простые архитектурные схемы.',
        'Учитываю зависимости, узкие места и поведение системы при изменениях.',
        'Уверенно думаю на уровне архитектурных компромиссов и влияния решений на систему.',
        'Проектирую зрелые системные решения и заранее учитываю масштаб, отказоустойчивость и эксплуатацию.',
      ],
      [
        'I do not yet see the system as a whole and mostly think in isolated tasks.',
        'I understand that services depend on each other and can read simple architecture diagrams.',
        'I account for dependencies, bottlenecks, and system behavior during changes.',
        'I think confidently in architectural trade-offs and system-wide impact.',
        'I design mature system solutions and account early for scale, resilience, and operations.',
      ],
    ),
  },
]