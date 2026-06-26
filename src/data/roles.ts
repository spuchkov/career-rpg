export type RoleCategory = 'support' | 'dev' | 'ops' | 'qa' | 'data' | 'entry'
export type StartingLevel = 'zero' | 'junior' | 'middle'

export type Role = {
  id: string
  title: string
  category: RoleCategory
  description: string
  startingLevel: StartingLevel
}

export const roles: Role[] = [
  {
    id: 'student',
    title: 'Student',
    category: 'entry',
    description:
      'Начинающий специалист без коммерческого опыта, который только входит в IT и выбирает первую карьерную траекторию.',
    startingLevel: 'zero',
  },
  {
    id: 'it-support',
    title: 'IT Support',
    category: 'support',
    description:
      'Стартовая роль для тех, кто решает пользовательские и инфраструктурные инциденты, работает с доступами, рабочими станциями и базовой эксплуатацией.',
    startingLevel: 'zero',
  },
  {
    id: 'sysadmin',
    title: 'System Administrator',
    category: 'ops',
    description:
      'Эксплуатация серверов, сервисов, сетевого окружения и прикладной инфраструктуры.',
    startingLevel: 'junior',
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    category: 'dev',
    description:
      'Разработка серверной логики, API, интеграций, бизнес-процессов и прикладных сервисов.',
    startingLevel: 'junior',
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    category: 'dev',
    description:
      'Разработчик клиентской части: интерфейсы, браузерная логика, интеграции с API и сборка приложений.',
    startingLevel: 'junior',
  },
  {
    id: 'qa',
    title: 'QA Engineer',
    category: 'qa',
    description:
      'Ручное и автоматизированное тестирование, контроль качества релизов и стабильности продукта.',
    startingLevel: 'junior',
  },
  {
    id: 'analyst',
    title: 'Data Analyst',
    category: 'data',
    description:
      'Работа с данными, SQL, метриками, визуализацией и аналитическими выводами для продукта и бизнеса.',
    startingLevel: 'junior',
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    category: 'ops',
    description:
      'Инженер, который соединяет разработку, инфраструктуру, автоматизацию, доставку и наблюдаемость систем.',
    startingLevel: 'middle',
  },
]