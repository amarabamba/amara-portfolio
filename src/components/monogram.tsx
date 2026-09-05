import { cn } from '@/lib/utils'
import { MONOGRAM_PATH } from '@/lib/monogram'

type MonogramProps = {
  className?: string
  variant?: 'brand' | 'muted'
}

export function Monogram({ className, variant = 'brand' }: MonogramProps) {
  const ink = variant === 'brand' ? 'text-ink' : 'text-body'
  const cyan = variant === 'brand' ? 'text-primary' : 'text-primary-deep/70'

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={MONOGRAM_PATH.viewBox}
      fill="none"
      strokeWidth={MONOGRAM_PATH.strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="round"
      className={cn('size-8', className)}
    >
      <g stroke="currentColor" className={ink}>
        <path d={MONOGRAM_PATH.add.leg} />
        <path d={MONOGRAM_PATH.add.crossbar} />
      </g>
      <g stroke="currentColor" className={cyan}>
        <path d={MONOGRAM_PATH.b.spine} />
        <path d={MONOGRAM_PATH.b.bowlTop} />
        <path d={MONOGRAM_PATH.b.barMid} />
        <path d={MONOGRAM_PATH.b.bowlBottom} />
      </g>
      <path
        d={MONOGRAM_PATH.register}
        stroke="currentColor"
        className="text-subtle"
        strokeWidth={1.5}
      />
    </svg>
  )
}