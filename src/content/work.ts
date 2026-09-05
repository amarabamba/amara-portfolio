export const work = {
  index: '03',
  projects: [
    {
      slug: 'gstar',
      name: 'GSTAR',
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
      slug: 'dafexpert',
      name: 'DAFEXPERT',
      stack: ['React', 'Webpack'],
    },
    {
      slug: 'ecollect',
      name: 'E-COLLECT',
      stack: [],
    },
  ],
} as const

export type WorkSlug = (typeof work.projects)[number]['slug']