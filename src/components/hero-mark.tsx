import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Monogram } from '@/components/monogram'
import { MONOGRAM_PATH } from '@/lib/monogram'

type HeroMarkProps = {
  className?: string
  label?: string
}

const DRAW: Record<string, { duration: number; delay: number }> = {
  leg: { duration: 0.5, delay: 0.1 },
  crossbar: { duration: 0.4, delay: 0.5 },
  spine: { duration: 0.6, delay: 0.85 },
  bowlTop: { duration: 0.5, delay: 1.25 },
  barMid: { duration: 0.35, delay: 1.75 },
  bowlBottom: { duration: 0.55, delay: 2.0 },
}

const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1]

/**
 * Composition signature du Hero : le monogramme AB se dessine trait par trait
 * (jambe du A, barre, épine, panses du B) dans un cadre technique.
 * Respecte prefers-reduced-motion : rendu statique si l'utilisateur réduit
 * les animations.
 */
export function HeroMark({ className, label }: HeroMarkProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div
        className={cn(
          'relative mx-auto grid aspect-square w-[min(20rem,72vw)] place-items-center sm:w-[22rem]',
          className,
        )}
      >
        <MarkFrame>
          <Monogram className="h-[58%] w-auto" />
        </MarkFrame>
        {label ? <span className="sr-only">{label}</span> : null}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative mx-auto grid aspect-square w-[min(20rem,72vw)] place-items-center sm:w-[22rem]',
        className,
      )}
    >
      <MarkFrame>
        <svg
          viewBox={MONOGRAM_PATH.viewBox}
          fill="none"
          strokeWidth={MONOGRAM_PATH.strokeWidth}
          strokeLinecap="square"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          className="h-[58%] w-auto"
        >
          {/* A — blanc */}
          <m.path
            d={MONOGRAM_PATH.add.leg}
            stroke="var(--ink)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: DRAW.leg.duration, delay: DRAW.leg.delay, ease }}
          />
          <m.path
            d={MONOGRAM_PATH.add.crossbar}
            stroke="var(--ink)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: DRAW.crossbar.duration,
              delay: DRAW.crossbar.delay,
              ease,
            }}
          />
          {/* B — cyan */}
          <m.path
            d={MONOGRAM_PATH.b.spine}
            stroke="var(--primary)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: DRAW.spine.duration, delay: DRAW.spine.delay, ease }}
          />
          <m.path
            d={MONOGRAM_PATH.b.bowlTop}
            stroke="var(--primary)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: DRAW.bowlTop.duration,
              delay: DRAW.bowlTop.delay,
              ease,
            }}
          />
          <m.path
            d={MONOGRAM_PATH.b.barMid}
            stroke="var(--primary)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: DRAW.barMid.duration,
              delay: DRAW.barMid.delay,
              ease,
            }}
          />
          <m.path
            d={MONOGRAM_PATH.b.bowlBottom}
            stroke="var(--primary)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: DRAW.bowlBottom.duration,
              delay: DRAW.bowlBottom.delay,
              ease,
            }}
          />
        </svg>
      </MarkFrame>
      {label ? <span className="sr-only">{label}</span> : null}
    </div>
  )
}

function MarkFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative grid aspect-square w-full place-items-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-card border border-line bg-surface/60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-card border border-line grid-overlay opacity-40"
      />
      {children}
    </div>
  )
}