import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { track } from '@/analytics'
import { LanguageSwitcher } from '@/components/language-switcher'
import { I18nProvider } from '@/i18n/i18n'
import { dictionaries } from '@/i18n/translations'

vi.mock('@/analytics', () => ({ track: vi.fn() }))

const mockedTrack = vi.mocked(track)

function renderSwitcher() {
  return render(
    <I18nProvider>
      <LanguageSwitcher />
    </I18nProvider>,
  )
}

beforeEach(() => {
  window.localStorage.clear()
  document.head.innerHTML = ''
  document.documentElement.removeAttribute('lang')
  document.title = ''

  const description = document.createElement('meta')
  description.name = 'description'
  const ogTitle = document.createElement('meta')
  ogTitle.setAttribute('property', 'og:title')
  const ogDescription = document.createElement('meta')
  ogDescription.setAttribute('property', 'og:description')
  document.head.append(description, ogTitle, ogDescription)
})

afterEach(() => {
  window.localStorage.clear()
})

describe('i18n', () => {
  it('démarre en anglais par défaut', () => {
    renderSwitcher()
    expect(screen.getByRole('button', { name: 'English' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'French' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toBe(dictionaries.en.meta.title)
  })

  it('lit la langue persistée au démarrage', () => {
    window.localStorage.setItem('portfolio-language', 'fr')
    renderSwitcher()
    expect(screen.getByRole('button', { name: 'Français' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(document.documentElement.lang).toBe('fr')
  })

  it('bascule vers le français, persiste et synchronise la page', async () => {
    const user = userEvent.setup()
    renderSwitcher()
    await user.click(screen.getByRole('button', { name: 'French' }))

    expect(window.localStorage.getItem('portfolio-language')).toBe('fr')
    expect(document.documentElement.lang).toBe('fr')
    expect(document.title).toBe(dictionaries.fr.meta.title)
    expect(screen.getByRole('button', { name: 'Français' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Anglais' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      dictionaries.fr.meta.description,
    )
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      'content',
      dictionaries.fr.meta.title,
    )
    expect(mockedTrack).toHaveBeenCalledWith('language_change', { language: 'fr' })
  })

  it('revient vers l’anglais', async () => {
    const user = userEvent.setup()
    renderSwitcher()
    await user.click(screen.getByRole('button', { name: 'French' }))
    await user.click(screen.getByRole('button', { name: 'Anglais' }))

    expect(window.localStorage.getItem('portfolio-language')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })
})