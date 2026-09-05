export type WorkProject = {
  name: string
  type: string
  description: string
  facts: string[]
  focus: string[]
  stack: string[]
}

export const work = {
  index: '03',
  eyebrow: 'Selected work',
  title: 'Selected work',
  lead: 'Selected systems built around complex business processes, integrations and real-world constraints.',
  projects: [
    {
      name: 'GSTAR',
      type: 'Administrative process management platform',
      description:
        'Platform for managing administrative processes in Swiss public administrations.',
      facts: ['3,000+ daily users', '300,000+ cases per year'],
      focus: [
        'Administrative workflows',
        'Document generation',
        'Third-party integrations',
      ],
      stack: [
        'Java',
        'TypeScript',
        'JavaScript',
        'Angular',
        'Groovy',
        'Docker',
        'GitLab CI/CD',
      ],
    },
    {
      name: 'DAFEXPERT',
      type: 'Commercial, financial, HR and accounting SaaS',
      description:
        'Frontend transformation of AKILCAB into Dafexpert, built on a microservices frontend architecture while leading a team of five junior developers.',
      facts: ['30% fewer production errors'],
      focus: ['Frontend microservices architecture', 'Team leadership'],
      stack: ['React', 'Webpack'],
    },
    {
      name: 'E-COLLECT',
      type: 'Bank reconciliation platform',
      description:
        'Web platform that automatically retrieves banking operations for bank reconciliation, relying on bank scraping where no API is available.',
      facts: [
        'Bank scraping without API',
        'Automatic financial data synchronization',
      ],
      focus: ['Bank reconciliation'],
      stack: [],
    },
  ] satisfies WorkProject[],
}