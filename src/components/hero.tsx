import { m } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/container'
import { HeroMark } from '@/components/hero-mark'
import { GeometricPattern } from '@/components/geometric-pattern'
import { fadeUp, stagger } from '@/lib/motion'
import { useI18n } from '@/i18n/context'

export function Hero() {
  const { t } = useI18n()
  const { hero } = t.content

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
      >
        <div className="relative h-full w-full opacity-30">
          <GeometricPattern className="opacity-20" />
        </div>
      </div>

      <Container className="relative grid grid-cols-1 items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <m.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <m.p
            variants={fadeUp}
            className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary"
          >
            {hero.eyebrow}
          </m.p>

          <m.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.titleA}
            <span className="text-primary">{hero.titleAccent}</span>
          </m.h1>

          <m.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-body sm:text-lg"
          >
            {hero.description}
          </m.p>

          <m.p
            variants={fadeUp}
            className="mt-5 font-mono text-xs tracking-wide text-subtle"
          >
            {hero.meta}
          </m.p>

          <m.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {hero.ctaWork}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-control border border-line bg-surface px-5 text-sm font-medium text-ink transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {hero.ctaContact}
            </a>
          </m.div>
        </m.div>

        <HeroMark className="lg:justify-self-end" label={hero.markLabel} />
      </Container>

      <Container className="relative">
        <m.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4"
        >
          {hero.stats.map((stat) => (
            <m.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col bg-surface px-5 py-6"
            >
              <dt className="order-2 mt-1 block text-xs text-subtle">
                {stat.label}
              </dt>
              <dd className="order-1 block font-mono text-2xl font-medium text-primary sm:text-3xl">
                {stat.value}
              </dd>
            </m.div>
          ))}
        </m.dl>
      </Container>
    </section>
  )
}