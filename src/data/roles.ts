export type RoleCategory = 'support' | 'dev' | 'ops' | 'qa' | 'data' | 'entry'
export type StartingLevel = 'zero' | 'junior' | 'middle'

export type LocalizedText = {
  ru: string
  en: string
}

export type Role = {
  id: string
  title: LocalizedText
  category: RoleCategory
  description: LocalizedText
  startingLevel: StartingLevel
}

export const roles: Role[] = [
  {
    id: 'student',
    title: { ru: 'Студент', en: 'Student' },
    category: 'entry',
    description: {
      ru: 'Начинающий специалист без коммерческого опыта, который только входит в IT и выбирает первую карьерную траекторию.',
      en: 'A beginner with no commercial experience who is just entering IT and choosing a first career path.',
    },
    startingLevel: 'zero',
  },
  {
    id: 'it-support',
    title: { ru: 'IT Support', en: 'IT Support' },
    category: 'support',
    description: {
      ru: 'Стартовая роль для тех, кто решает пользовательские и инфраструктурные инциденты, работает с доступами, рабочими станциями и базовой эксплуатацией.',
      en: 'An entry role for people who resolve user and infrastructure incidents, work with access, workstations, and basic operations.',
    },
    startingLevel: 'zero',
  },
  {
    id: 'sysadmin',
    title: { ru: 'Системный администратор', en: 'System Administrator' },
    category: 'ops',
    description: {
      ru: 'Эксплуатация серверов, сервисов, сетевого окружения и прикладной инфраструктуры.',
      en: 'Operating servers, services, network environments, and application infrastructure.',
    },
    startingLevel: 'junior',
  },
  {
    id: 'backend-dev',
    title: { ru: 'Backend Developer', en: 'Backend Developer' },
    category: 'dev',
    description: {
      ru: 'Разработка серверной логики, API, интеграций, бизнес-процессов и прикладных сервисов.',
      en: 'Building server-side logic, APIs, integrations, business flows, and application services.',
    },
    startingLevel: 'junior',
  },
  {
    id: 'frontend-dev',
    title: { ru: 'Frontend Developer', en: 'Frontend Developer' },
    category: 'dev',
    description: {
      ru: 'Разработчик клиентской части: интерфейсы, браузерная логика, интеграции с API и сборка приложений.',
      en: 'Client-side development: interfaces, browser logic, API integrations, and application assembly.',
    },
    startingLevel: 'junior',
  },
  {
    id: 'qa',
    title: { ru: 'QA Engineer', en: 'QA Engineer' },
    category: 'qa',
    description: {
      ru: 'Ручное и автоматизированное тестирование, контроль качества релизов и стабильности продукта.',
      en: 'Manual and automated testing, release quality control, and product stability.',
    },
    startingLevel: 'junior',
  },
  {
    id: 'analyst',
    title: { ru: 'Data Analyst', en: 'Data Analyst' },
    category: 'data',
    description: {
      ru: 'Работа с данными, SQL, метриками, визуализацией и аналитическими выводами для продукта и бизнеса.',
      en: 'Working with data, SQL, metrics, visualizations, and analytical insights for product and business.',
    },
    startingLevel: 'junior',
  },
  {
    id: 'devops',
    title: { ru: 'DevOps Engineer', en: 'DevOps Engineer' },
    category: 'ops',
    description: {
      ru: 'Инженер, который соединяет разработку, инфраструктуру, автоматизацию, доставку и наблюдаемость систем.',
      en: 'An engineer who connects development, infrastructure, automation, delivery, and system observability.',
    },
    startingLevel: 'middle',
  },
]