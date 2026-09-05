import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { useI18n } from '@/i18n/context'
import { engineering } from '@/content/engineering'

export function Engineering() {
  const { t } = useI18n()
  const engineeringCopy = t.content.engineering

  return (
    <Section id="engineering" className="scroll-mt-16">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <m.div variants={fadeUp}>
            <SectionHeader
              index={engineering.index}
              eyebrow={engineeringCopy.eyebrow}
              title={engineeringCopy.title}
              description={engineeringCopy.lead}
            />
          </m.div>

          <m.ul
            variants={stagger}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {engineering.pillars.map((pillar) => {
              const pillarCopy = engineeringCopy.pillars[pillar.slug]
              return (
                <m.li key={pillar.slug} variants={fadeUp} className="h-full">
                  <article className="flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-primary/40 sm:p-7">
                    <span className="font-mono text-xs text-primary-deep">
                      {pillar.id}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                      {pillarCopy.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {pillarCopy.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                      {pillar.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-subtle"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </m.li>
              )
            })}
          </m.ul>

          <m.section
            variants={fadeUp}
            aria-label={engineeringCopy.stackTitle}
            className="mt-6 rounded-card border border-line bg-surface-muted/40 p-6 sm:p-7"
          >
            <h3 className={fadeUpLabel}>{engineeringCopy.stackTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {engineering.stack.map((stack) => (
                <li
                  key={stack}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-body"
                >
                  {stack}
                </li>
              ))}
            </ul>
          </m.section>
        </m.div>
      </Container>
    </Section>
  )
}

const fadeUpLabel =
  'font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary'