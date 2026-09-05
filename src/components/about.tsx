import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { useI18n } from '@/i18n/context'
import { about } from '@/content/about'

const LABEL =
  'font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary'

export function About() {
  const { t } = useI18n()
  const aboutCopy = t.content.about

  return (
    <Section id="about" className="scroll-mt-16">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <m.div variants={fadeUp}>
            <SectionHeader
              index={about.index}
              eyebrow={aboutCopy.eyebrow}
              title={aboutCopy.title}
            />
          </m.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <m.div
              variants={stagger}
              className="max-w-prose space-y-5"
            >
              {aboutCopy.paragraphs.map((paragraph) => (
                <m.p
                  key={paragraph.slice(0, 24)}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-body sm:text-lg"
                >
                  {paragraph}
                </m.p>
              ))}
            </m.div>

            <m.div variants={stagger} className="flex flex-col gap-6">
              <m.section variants={fadeUp}>
                <h3 className={LABEL}>{aboutCopy.educationTitle}</h3>
                <ul className="mt-4 space-y-4 rounded-card border border-line bg-surface p-6">
                  {aboutCopy.education.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="pt-1 font-mono text-xs text-primary-deep">
                        {item.year}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">{item.title}</p>
                        <p className="mt-0.5 text-xs text-subtle">{item.school}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </m.section>

              <m.section variants={fadeUp}>
                <h3 className={LABEL}>{aboutCopy.certificationsTitle}</h3>
                <ul className="mt-4 space-y-4 rounded-card border border-line bg-surface p-6">
                  {aboutCopy.certifications.map((cert) => (
                    <li key={cert.name} className="flex gap-4">
                      {cert.year ? (
                        <span className="w-8 shrink-0 pt-1 font-mono text-xs text-primary-deep">
                          {cert.year}
                        </span>
                      ) : null}
                      <div>
                        <p className="text-sm font-medium text-ink">{cert.name}</p>
                        <p className="mt-0.5 text-xs text-subtle">
                          {cert.issuer} · {cert.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </m.section>

              <m.section variants={fadeUp}>
                <h3 className={LABEL}>{aboutCopy.interestsTitle}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {aboutCopy.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-body"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </m.section>
            </m.div>
          </div>
        </m.div>
      </Container>
    </Section>
  )
}