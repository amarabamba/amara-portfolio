export const experience = {
  index: '03',
  timeline: [
    {
      id: 'proactive',
      current: true,
      projects: ['GSTAR', 'EPIDUI', 'MODULAR', 'Montagne Pro'],
    },
    {
      id: 'akil',
      current: false,
      projects: ['DAFEXPERT', 'AKILCAB', 'DIGITEXPERT', 'E-COLLECT', 'MATCAGO'],
    },
    {
      id: 'eu',
      current: false,
      projects: [],
    },
    {
      id: 'pigier',
      current: false,
      projects: [],
    },
  ],
} as const

export type ExperienceId = (typeof experience.timeline)[number]['id']