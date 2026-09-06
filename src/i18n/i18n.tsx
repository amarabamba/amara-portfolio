import { useEffect, useState, type ReactNode } from 'react'
import { track } from '@/analytics'
import { I18nContext, type I18n } from './context'
import { dictionaries, languages, type Language } from './translations'

const STORAGE_KEY = 'portfolio-language'

function isLanguage(value: string | null): value is Language {
  return languages.some((lang) => lang === value)
}

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isLanguage(stored) ? stored : 'en'
  } catch {
    return 'en'
  }
}

function setMetaContent(name: string, content: string) {
  const tag = document.querySelector(
    `meta[name="${name}"], meta[property="${name}"]`,
  )
  if (tag) tag.setAttribute('content', content)
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    setMetaContent('description', t.meta.description)
    setMetaContent('og:title', t.meta.title)
    setMetaContent('og:description', t.meta.description)
  }, [lang, t])

  const value: I18n = {
    lang,
    setLang: (next) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // storage indisponible : la langue n'est pas persistée, pas de crash
      }
      setLang(next)
      track('language_change', { language: next })
    },
    t,
  }

  return <I18nContext value={value}>{children}</I18nContext>
}