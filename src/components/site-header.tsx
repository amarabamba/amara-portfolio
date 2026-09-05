import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/container'
import { buttonVariants } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useI18n } from '@/i18n/context'
import { site } from '@/content/site'

const NAV_LINK =
  'inline-flex min-h-10 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-200',
        scrolled ? 'border-line bg-surface' : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="inline-flex min-h-10 items-center text-base font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          {site.name}
        </a>

        <nav aria-label={t.ui.header.primaryNav} className="hidden items-center md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className={NAV_LINK}>
              {t.ui.nav[item.id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <a
            href={site.resumeHref}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'hidden min-h-10 px-4 sm:inline-flex',
            )}
          >
            {t.ui.header.resume}
          </a>

          <button
            type="button"
            ref={toggleRef}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-nav"
            className="grid size-10 place-items-center rounded-control text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">
              {open ? t.ui.header.closeMenu : t.ui.header.openMenu}
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <nav id="site-nav" aria-label={t.ui.header.mobileNav} className="border-t border-line bg-surface md:hidden">
          <Container className="flex flex-col pb-6 pt-2">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center border-b border-line text-sm text-body last:border-b-0 hover:text-ink"
              >
                {t.ui.nav[item.id]}
              </a>
            ))}
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'secondary' }),
                'mt-4 min-h-11 self-start px-4',
              )}
            >
              {t.ui.header.resume}
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  )
}