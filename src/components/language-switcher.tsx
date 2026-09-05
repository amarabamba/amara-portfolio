import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { languages } from '@/i18n/translations'

const BUTTON =
  'inline-flex min-h-10 min-w-11 items-center justify-center px-2.5 text-sm font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.ui.languageSwitcher.label}
      className="flex items-center overflow-hidden rounded-control border border-line bg-surface/60"
    >
      {languages.map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={t.ui.languageSwitcher[code]}
            className={cn(
              BUTTON,
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-body hover:text-ink',
            )}
          >
            {code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}