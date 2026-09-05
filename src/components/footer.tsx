import { Container } from '@/components/container'
import { useI18n } from '@/i18n/context'
import { site } from '@/content/site'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-base font-semibold text-ink">{site.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.ui.footer.role}
            </p>
          </div>

          <nav aria-label={t.ui.footer.nav}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                  >
                    {t.ui.nav[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © 2026 {site.name}
        </p>
      </Container>
    </footer>
  )
}