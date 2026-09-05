import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  index?: string
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/**
 * En-tête de section : index (fiche technique), libellé mono, titre et
 * description.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'mb-[var(--section-header-gap)]',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      {index ? (
        <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-muted-foreground">
          {index}
        </p>
      ) : null}
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[var(--section-title-size)] font-semibold text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-prose text-body">{description}</p>
      ) : null}
    </header>
  )
}
