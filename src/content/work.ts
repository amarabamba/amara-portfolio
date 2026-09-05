export const work = {
  index: '01',
  projects: [
    {
      slug: 'gstar',
      name: 'GSTAR',
      featured: true,
    },
    {
      slug: 'dafexpert',
      name: 'DAFEXPERT',
      featured: false,
    },
    {
      slug: 'ecollect',
      name: 'E-COLLECT',
      featured: false,
    },
  ],
} as const

export type WorkSlug = (typeof work.projects)[number]['slug']