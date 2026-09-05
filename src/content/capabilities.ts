export const capabilities = {
  index: '04',
  items: [
    { id: '01', slug: 'complex-systems' },
    { id: '02', slug: 'fullstack' },
    { id: '03', slug: 'architecture' },
    { id: '04', slug: 'engineering' },
  ],
} as const

export type CapabilitySlug = (typeof capabilities.items)[number]['slug']