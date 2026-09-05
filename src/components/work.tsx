import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { work } from '@/content/work'

const LABEL =
  'font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'

export function Work() {
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
              eyebrow={work.eyebrow}
              title={work.title}
              description={work.lead}
            />
          </m.div>

          <m.ul
            variants={stagger}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {work.projects.map((project, index) => (
              <m.li key={project.name} variants={fadeUp} className="h-full">
                <article className="flex h-full flex-col rounded-card border border-line bg-surface p-5 transition-[border-color,box-shadow] duration-200 hover:border-line-strong hover:shadow-sm sm:p-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:mt-3">
                    {project.type}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-body">
                    {project.description}
                  </p>

                  {project.facts.length > 0 ? (
                    <section
                      className="mt-6 border-t border-line pt-5"
                      aria-label="Key figures"
                    >
                      <h4 className={LABEL}>Key figures</h4>
                      <ul className="mt-3 space-y-2">
                        {project.facts.map((fact) => (
                          <li
                            key={fact}
                            className="text-sm font-medium text-ink"
                          >
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  {project.focus.length > 0 ? (
                    <section className="mt-5" aria-label="Focus areas">
                      <h4 className={LABEL}>Focus</h4>
                      <p className="mt-2 text-sm text-body">
                        {project.focus.join(' · ')}
                      </p>
                    </section>
                  ) : null}

                  {project.stack.length > 0 ? (
                    <section
                      className="mt-auto pt-6"
                      aria-label="Stack"
                    >
                      <h4 className={LABEL}>Stack</h4>
                      <p className="mt-2 font-mono text-[13px] text-ink">
                        {project.stack.join(' · ')}
                      </p>
                    </section>
                  ) : null}
                </article>
              </m.li>
            ))}
          </m.ul>
        </m.div>
      </Container>
    </Section>
  )
}