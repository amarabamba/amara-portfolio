import { ArrowUp } from 'lucide-react'
import { track } from '@/analytics'
import { Container } from '@/components/container'
import { Monogram } from '@/components/monogram'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { useI18n } from '@/i18n/context'
import { site } from '@/content/site'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-10 py-12">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Monogram className="size-7" />
              <span className="text-base font-semibold tracking-tight text-ink">
                {site.name}
              </span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-body">{t.ui.footer.role}</p>
          </div>

          <nav
            aria-label={t.ui.footer.nav}
            className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-1"
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex py-1 text-sm text-body underline-offset-4 transition-colors hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t.ui.nav[item.id]}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <div
            role="group"
            aria-label={t.ui.footer.socials}
            className="flex items-center gap-2"
          >
            <a
              href={site.socials.linkedin.href}
              target="_blank"
              rel="noreferrer"
              aria-label={t.ui.footer.socials}
              onClick={() => track('linkedin_click')}
              className="grid size-10 place-items-center rounded-control border border-line bg-surface text-body transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={site.socials.github.href}
              target="_blank"
              rel="noreferrer"
              aria-label={t.ui.footer.socials}
              onClick={() => track('github_click')}
              className="grid size-10 place-items-center rounded-control border border-line bg-surface text-body transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>

          <p className="font-mono text-xs text-subtle">
            © 2026 {site.name} — {t.ui.footer.builtBy}
          </p>

          <a
            href="#top"
            className="group inline-flex min-h-10 items-center gap-1.5 text-sm text-body transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t.ui.footer.backToTop}
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}