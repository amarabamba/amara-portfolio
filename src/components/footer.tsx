import { Container } from '@/components/container'
import { footerNav } from '@/content/site'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-base font-semibold text-ink">Amara Bamba</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Software Engineer
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Amara Bamba
        </p>
      </Container>
    </footer>
  )
}