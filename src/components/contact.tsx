import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { useI18n } from '@/i18n/context'
import { contact } from '@/content/contact'

const LABEL =
  'font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'

export function Contact() {
  const { t } = useI18n()
  const contactCopy = t.content.contact

  return (
    <Section id="contact" className="scroll-mt-16">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <m.div variants={fadeUp}>
            <SectionHeader
              index={contact.index}
              eyebrow={contactCopy.eyebrow}
              title={contactCopy.title}
            />
          </m.div>

          <m.ul
            variants={stagger}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <m.li variants={fadeUp} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-line bg-surface p-5 sm:p-6">
                <h3 className={LABEL}>{contactCopy.emailLabel}</h3>
                <a
                  href={contact.email.href}
                  className="mt-3 text-lg font-medium text-ink underline-offset-4 hover:text-ember hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  {contact.email.value}
                </a>
              </div>
            </m.li>

            <m.li variants={fadeUp} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-line bg-surface p-5 sm:p-6">
                <h3 className={LABEL}>{contactCopy.locationLabel}</h3>
                <p className="mt-3 text-lg font-medium text-ink">
                  {contact.location.value}
                </p>
              </div>
            </m.li>
          </m.ul>
        </m.div>
      </Container>
    </Section>
  )
}