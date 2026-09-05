import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { useI18n } from '@/i18n/context'
import { work } from '@/content/work'

const LABEL =
  'font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'

export function Work() {
  const { t } = useI18n()
  const workCopy = t.content.work

  return (
    <Section id="work" className="scroll-mt-16">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <m.div variants={fadeUp}>
            <SectionHeader
              index={work.index}
              eyebrow={workCopy.eyebrow}
              title={workCopy.title}
              description={workCopy.lead}
            />
          </m.div>

          <m.ul
            variants={stagger}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {work.projects.map((project, index) => {
              const projectCopy = t.content.work.projects[project.slug]
              return (
                <m.li key={project.slug} variants={fadeUp} className="h-full">
                  <article className="flex h-full flex-col rounded-card border border-line bg-surface p-5 transition-[border-color,box-shadow] duration-200 hover:border-line-strong hover:shadow-sm sm:p-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:mt-3">
                      {projectCopy.type}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-body">
                      {projectCopy.description}
                    </p>

                    {projectCopy.facts.length > 0 ? (
                      <section
                        className="mt-6 border-t border-line pt-5"
                        aria-label={t.ui.work.keyFigures}
                      >
                        <h4 className={LABEL}>{t.ui.work.keyFigures}</h4>
                        <ul className="mt-3 space-y-2">
                          {projectCopy.facts.map((fact, factIndex) => (
                            <li
                              key={factIndex}
                              className="text-sm font-medium text-ink"
                            >
                              {fact}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : null}

                    {projectCopy.focus.length > 0 ? (
                      <section
                        className="mt-5"
                        aria-label={t.ui.work.focus}
                      >
                        <h4 className={LABEL}>{t.ui.work.focus}</h4>
                        <p className="mt-2 text-sm text-body">
                          {projectCopy.focus.join(' · ')}
                        </p>
                      </section>
                    ) : null}

                    {project.stack.length > 0 ? (
                      <section
                        className="mt-auto pt-6"
                        aria-label={t.ui.work.stack}
                      >
                        <h4 className={LABEL}>{t.ui.work.stack}</h4>
                        <p className="mt-2 font-mono text-[13px] text-ink">
                          {project.stack.join(' · ')}
                        </p>
                      </section>
                    ) : null}
                  </article>
                </m.li>
              )
            })}
          </m.ul>
        </m.div>
      </Container>
    </Section>
  )
}