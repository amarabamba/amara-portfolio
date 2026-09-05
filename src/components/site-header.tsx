import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/container'
import { Monogram } from '@/components/monogram'
import { buttonVariants } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useI18n } from '@/i18n/context'
import { site } from '@/content/site'

const NAV_LINK =
  'inline-flex min-h-10 items-center px-3 text-sm text-body transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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
        scrolled
          ? 'border-line bg-canvas/90 backdrop-blur-sm'
          : 'border-transparent bg-canvas/60 backdrop-blur-sm',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group inline-flex min-h-10 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="grid size-8 place-items-center rounded-control border border-line bg-surface transition-colors group-hover:border-primary/60">
            <Monogram className="size-5" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </a>

        <nav
          aria-label={t.ui.header.primaryNav}
          className="hidden items-center md:flex"
        >
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
            className="grid size-10 place-items-center rounded-control border border-line bg-surface text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">
              {open ? t.ui.header.closeMenu : t.ui.header.openMenu}
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="site-nav"
          aria-label={t.ui.header.mobileNav}
          className="border-t border-line bg-canvas md:hidden"
        >
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