import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

export function Container({
  as: Tag = 'div',
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full [max-width:var(--container-max-w)]',
        'px-[var(--container-gutter)]',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
