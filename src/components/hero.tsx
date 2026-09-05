import { m } from 'motion/react'
import { Container } from '@/components/container'
import { GeometricPattern } from '@/components/geometric-pattern'
import { fadeUp, stagger } from '@/lib/motion'
import { useI18n } from '@/i18n/context'

export function Hero() {
  const { t } = useI18n()
  const { hero } = t.content

  return (
    <section id="top" className="relative scroll-mt-16 overflow-hidden">
      <Container className="grid grid-cols-1 gap-16 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-24 lg:py-32">
        <m.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <m.p
            variants={fadeUp}
            className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            {hero.eyebrow}
          </m.p>

          <m.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-ink lg:text-5xl"
          >
            {hero.title}
          </m.h1>

          <m.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-base text-body sm:text-lg"
          >
            {hero.description}
          </m.p>
        </m.div>

        <m.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 hidden h-72 w-72 overflow-hidden sm:block"
          >
            <GeometricPattern className="opacity-70" />
          </div>

          <div className="relative rounded-card border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t.ui.hero.capabilities}
            </p>
            <ul className="mt-4">
              {hero.capabilities.map((capability, index) => (
                <m.li
                  key={index}
                  variants={fadeUp}
                  className="flex items-baseline gap-4 border-b border-line py-4 last:border-b-0 last:pb-0"
                >
                  <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-ink sm:text-base">
                    {capability}
                  </span>
                </m.li>
              ))}
            </ul>
          </div>
        </m.div>
      </Container>
    </section>
  )
}