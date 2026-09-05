import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { experience } from '@/content/experience'

export function Experience() {
  const { t } = useI18n()
  const experienceCopy = t.content.experience

  return (
    <Section id="experience" className="scroll-mt-16">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <m.div variants={fadeUp}>
            <SectionHeader
              index={experience.index}
              eyebrow={experienceCopy.eyebrow}
              title={experienceCopy.title}
              description={experienceCopy.lead}
            />
          </m.div>

          <m.ol variants={stagger} className="relative">
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line sm:block"
            />
            {experience.timeline.map((entry) => {
              const entryCopy = experienceCopy.timeline[entry.id]
              return (
                <m.li
                  key={entry.id}
                  variants={fadeUp}
                  className="relative grid grid-cols-1 gap-4 pb-12 last:pb-0 sm:grid-cols-[2.5rem_1fr] sm:gap-6"
                >
                  <div className="hidden flex-col items-center pt-1.5 sm:flex">
                    <span
                      className={cn(
                        'mt-1 size-[15px] rounded-full border-2 border-canvas bg-surface',
                        entry.current ? 'bg-primary' : 'bg-surface-muted',
                      )}
                    />
                  </div>

                  <article className="rounded-card border border-line bg-surface p-6 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                          {entryCopy.company}
                        </h3>
                        <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                          {entryCopy.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {entry.current ? (
                          <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-primary">
                            {t.ui.experience.present}
                          </span>
                        ) : null}
                        <span className="font-mono text-xs text-subtle">
                          {entryCopy.period}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 max-w-prose text-sm leading-relaxed text-body">
                      {entryCopy.summary}
                    </p>

                    {entryCopy.highlights.length > 0 ? (
                      <ul className="mt-5 space-y-3">
                        {entryCopy.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-relaxed text-body"
                          >
                            <svg
                              aria-hidden="true"
                              className="mt-1.5 size-2 shrink-0"
                              viewBox="0 0 8 8"
                            >
                              <circle cx="4" cy="4" r="3" fill="var(--primary)" />
                            </svg>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {entry.projects.length > 0 ? (
                      <div className="mt-6 border-t border-line pt-5">
                        <h4 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-subtle">
                          {t.ui.experience.projects}
                        </h4>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {entry.projects.map((project) => (
                            <li
                              key={project}
                              className="rounded-full border border-line bg-surface-muted/50 px-3 py-1.5 font-mono text-[11px] text-body"
                            >
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                </m.li>
              )
            })}
          </m.ol>
        </m.div>
      </Container>
    </Section>
  )
}