import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { work } from '@/content/work'

const META =
  'font-mono text-[11px] uppercase tracking-[0.18em] text-subtle'
const META_VALUE = 'font-mono text-xs text-body sm:text-sm'

export function Work() {
  const { t } = useI18n()
  const workCopy = t.content.work

  return (
    <Section id="work" className="scroll-mt-16">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <m.div variants={fadeUp}>
            <SectionHeader
              index={work.index}
              eyebrow={workCopy.eyebrow}
              title={workCopy.title}
              description={workCopy.lead}
            />
          </m.div>

          <m.ol
            variants={stagger}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {work.projects.map((project, index) => {
              const projectCopy = workCopy.projects[project.slug]
              return (
                <m.li
                  key={project.slug}
                  variants={fadeUp}
                  className={cn(project.featured && 'lg:col-span-2')}
                >
                  <article
                    className={cn(
                      'flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-primary/40 sm:p-8',
                      project.featured &&
                        'lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10',
                    )}
                  >
                    <div>
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-primary-deep">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                          {projectCopy.type}
                        </span>
                      </div>

                      <h3
                        className={cn(
                          'mt-3 font-semibold tracking-tight text-ink',
                          project.featured
                            ? 'text-3xl sm:text-4xl'
                            : 'text-2xl',
                        )}
                      >
                        {project.name}
                      </h3>

                      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                        <div>
                          <dt className={META}>{workCopy.contextLabel}</dt>
                          <dd className={cn(META_VALUE, 'mt-1')}>
                            {projectCopy.role}
                            <span className="block text-subtle">
                              {projectCopy.company}
                            </span>
                            <span className="block text-subtle">
                              {projectCopy.period}
                            </span>
                          </dd>
                        </div>
                      </dl>

                      <p className="mt-6 max-w-prose text-sm leading-relaxed text-body">
                        {projectCopy.description}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-6 lg:mt-0">
                      {projectCopy.metrics.length > 0 ? (
                        <section aria-label={workCopy.metricsLabel}>
                          <h4 className={META}>{workCopy.metricsLabel}</h4>
                          <ul className="mt-3 grid grid-cols-2 gap-3">
                            {projectCopy.metrics.map((metric) => (
                              <li
                                key={metric.label}
                                className="rounded-control border border-line bg-surface-muted/60 px-4 py-3"
                              >
                                <p className="font-mono text-xl font-medium text-primary sm:text-2xl">
                                  {metric.value}
                                </p>
                                <p className="mt-1 text-xs text-body">
                                  {metric.label}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </section>
                      ) : null}

                      {projectCopy.focus.length > 0 ? (
                        <section aria-label={workCopy.focusLabel}>
                          <h4 className={META}>{workCopy.focusLabel}</h4>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {projectCopy.focus.map((item) => (
                              <li
                                key={item}
                                className="rounded-full border border-line px-3 py-1.5 text-xs text-body"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </section>
                      ) : null}
                    </div>
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