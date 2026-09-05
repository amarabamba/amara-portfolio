import { m } from 'motion/react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { fadeUp, stagger } from '@/lib/motion'
import { useI18n } from '@/i18n/context'
import { capabilities } from '@/content/capabilities'

export function Capabilities() {
  const { t } = useI18n()
  const capabilitiesCopy = t.content.capabilities

  return (
    <Section id="capabilities" className="scroll-mt-16">
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <m.div variants={fadeUp}>
            <SectionHeader
              index={capabilities.index}
              eyebrow={capabilitiesCopy.eyebrow}
              title={capabilitiesCopy.title}
            />
          </m.div>

          <m.ul
            variants={stagger}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {capabilities.items.map((item) => {
              const itemCopy = capabilitiesCopy.items[item.slug]
              return (
                <m.li key={item.slug} variants={fadeUp} className="h-full">
                  <div className="flex h-full flex-col rounded-card border border-line bg-surface p-5 sm:p-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.id}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                      {itemCopy.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-body">
                      {itemCopy.description}
                    </p>
                  </div>
                </m.li>
              )
            })}
          </m.ul>
        </m.div>
      </Container>
    </Section>
  )
}