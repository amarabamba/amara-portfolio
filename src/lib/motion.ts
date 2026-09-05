import type { Variants } from 'motion/react'

/**
 * Variantes Motion partagées : fondu + décalage vertical subtil, utilisées
 * par toutes les sections (Hero, Work, Capabilities, Contact).
 * Calques `hidden` / `visible` identiques sur tout le site.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: 'easeOut' },
  },
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}