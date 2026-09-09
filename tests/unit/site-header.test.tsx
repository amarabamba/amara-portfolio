import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { track } from '@/analytics'
import { SiteHeader } from '@/components/site-header'
import { I18nProvider } from '@/i18n/i18n'

vi.mock('@/analytics', () => ({ track: vi.fn() }))

const mockedTrack = vi.mocked(track)

function renderHeader() {
  return render(
    <I18nProvider>
      <SiteHeader />
    </I18nProvider>,
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  window.localStorage.clear()
})

describe('SiteHeader', () => {
  it('affiche la navigation et le lien CV en version desktop', () => {
    renderHeader()
    expect(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
      'href',
      '/CV_Bamba_Amara_Full.pdf',
    )
  })

  it('ouvre et ferme le menu mobile', async () => {
    const user = userEvent.setup()
    renderHeader()

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('navigation', { name: 'Mobile navigation' }),
    ).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeInTheDocument()
  })

  it('ferme le menu mobile avec Échap et recentre le focus', async () => {
    const user = userEvent.setup()
    renderHeader()

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    await user.keyboard('{Escape}')

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeInTheDocument()
    expect(toggle).toHaveFocus()
  })

  it('ferme le menu mobile après un clic sur un lien', async () => {
    const user = userEvent.setup()
    renderHeader()
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    const nav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(nav).getByText('Work'))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('remonte le téléchargement du CV', async () => {
    const user = userEvent.setup()
    renderHeader()

    await user.click(screen.getByRole('link', { name: 'Resume' }))
    expect(mockedTrack).toHaveBeenCalledWith('cv_download')
  })
})