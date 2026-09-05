import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  as?: ElementType
  id?: string
  className?: string
  children: ReactNode
}

/**
 * Section sémantique avec un rythme vertical homogène.
 * Utiliser <Container /> à l'intérieur pour borner le contenu.
 */
export function Section({ as: Tag = 'section', id, className, children }: SectionProps) {
  return (
    <Tag id={id} className={cn('py-[var(--section-y)]', className)}>
      {children}
    </Tag>
  )
}
