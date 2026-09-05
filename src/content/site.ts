export const site = {
  name: 'Amara Bamba',
  firstName: 'Amara',
  role: 'Software Engineer',
  location: 'Abidjan, Côte d’Ivoire',
  nav: [
    { id: 'work', href: '#work' },
    { id: 'engineering', href: '#engineering' },
    { id: 'experience', href: '#experience' },
    { id: 'about', href: '#about' },
    { id: 'contact', href: '#contact' },
  ] as const,
  socials: {
    linkedin: {
      href: 'https://www.linkedin.com/in/amarabamba/',
    },
    github: {
      href: 'https://github.com/amarabamba',
    },
  },
  resumeHref: '/CV_Bamba_Amara_Full.pdf',
} as const

export type NavId = (typeof site.nav)[number]['id']