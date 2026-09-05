import { ArrowUpRight, FileText, Mail, MapPin } from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { contact } from '@/content/contact'
import { site } from '@/content/site'

export function Contact() {
  const { t } = useI18n()
  const contactCopy = t.content.contact

  const cards: Array<{
    key: string
    label: string
    caption: string
    value?: string
    href?: string
    icon: ComponentType<{ className?: string }>
    external?: boolean
  }> = [
    {
      key: 'email',
      label: contactCopy.emailLabel,
      caption: contactCopy.emailCaption,
      value: contact.email.value,
      href: contact.email.href,
      icon: Mail,
    },
    {
      key: 'location',
      label: contactCopy.locationLabel,
      caption: contactCopy.locationCaption,
      value: contact.location.value,
      icon: MapPin,
    },
    {
      key: 'linkedin',
      label: contactCopy.linkedinLabel,
      caption: contactCopy.linkedinCaption,
      value: 'linkedin.com/in/amarabamba',
      href: site.socials.linkedin.href,
      icon: LinkedinIcon,
      external: true,
    },
    {
      key: 'github',
      label: contactCopy.githubLabel,
      caption: contactCopy.githubCaption,
      value: 'github.com/amarabamba',
      href: site.socials.github.href,
      icon: GithubIcon,
      external: true,
    },
  ]

  return (
    <Section id="contact" className="scroll-mt-16">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <m.div variants={fadeUp}>
            <SectionHeader
              index={contact.index}
              eyebrow={contactCopy.eyebrow}
              title={contactCopy.title}
              description={contactCopy.lead}
            />
          </m.div>

          <m.ul
            variants={stagger}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {cards.map((card) => {
              const Icon = card.icon
              const content = (
                <>
                  <span className="grid size-10 place-items-center rounded-control border border-line bg-surface-muted/60">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <span className="mt-4 block">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                      {card.label}
                    </span>
                    <span className="mt-1 block text-lg font-medium text-ink">
                      {card.value}
                    </span>
                    <span className="mt-1 block text-xs text-body">
                      {card.caption}
                    </span>
                  </span>
                  {card.external ? (
                    <span className="absolute right-5 top-5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="size-4" />
                    </span>
                  ) : null}
                </>
              )

              return (
                <m.li key={card.key} variants={fadeUp} className="h-full">
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noreferrer' : undefined}
                      className="group relative flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-primary/40 sm:p-7"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="relative flex h-full flex-col rounded-card border border-line bg-surface p-6 sm:p-7">
                      {content}
                    </div>
                  )}
                </m.li>
              )
            })}
          </m.ul>

          <m.div variants={fadeUp} className="mt-6">
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'lg' }),
                'inline-flex min-h-12 w-full gap-2 py-3 sm:w-auto sm:px-6',
              )}
            >
              <FileText className="size-4 text-primary" />
              <span className="text-base">
                {contactCopy.cvLabel} — {contactCopy.cvCaption}
              </span>
            </a>
          </m.div>
        </m.div>
      </Container>
    </Section>
  )
}