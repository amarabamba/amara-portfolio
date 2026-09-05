import { createContext, useContext } from 'react'
import type { Dictionary, Language } from './translations'

export type I18n = {
  lang: Language
  setLang: (lang: Language) => void
  t: Dictionary
}

export const I18nContext = createContext<I18n | null>(null)

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}