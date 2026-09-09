import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { track } from '@/analytics'
import { Contact } from '@/components/contact'
import { I18nProvider } from '@/i18n/i18n'

vi.mock('@/analytics', () => ({ track: vi.fn() }))

const mockedTrack = vi.mocked(track)

function renderContact() {
  return render(
    <I18nProvider>
      <Contact />
    </I18nProvider>,
  )
}

describe('Contact', () => {
  it('affiche la carte localisation sans lien sortant', () => {
    renderContact()
    expect(screen.getAllByText(/Abidjan, Côte d’Ivoire/).length).toBeGreaterThan(0)
    expect(
      screen.queryByRole('link', { name: /Abidjan, Côte d’Ivoire/ }),
    ).not.toBeInTheDocument()
  })

  it('le lien email est un mailto et remonte un événement', async () => {
    const user = userEvent.setup()
    renderContact()

    const link = screen.getByRole('link', { name: /amara\.dianney@gmail\.com/ })
    expect(link).toHaveAttribute('href', 'mailto:amara.dianney@gmail.com')
    await user.click(link)
    expect(mockedTrack).toHaveBeenCalledWith('contact_email_click')
  })

  it('les liens sociaux s’ouvrent dans un nouvel onglet et remontent un événement', async () => {
    const user = userEvent.setup()
    renderContact()

    const linkedin = screen.getByRole('link', { name: /linkedin\.com\/in\/amarabamba/ })
    expect(linkedin).toHaveAttribute('target', '_blank')
    expect(linkedin).toHaveAttribute('rel', 'noreferrer')
    await user.click(linkedin)
    expect(mockedTrack).toHaveBeenCalledWith('linkedin_click')

    const github = screen.getByRole('link', { name: /github\.com\/amarabamba/ })
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', 'noreferrer')
    await user.click(github)
    expect(mockedTrack).toHaveBeenCalledWith('github_click')
  })

  it('le bouton CV pointe vers le PDF et remonte un événement', async () => {
    const user = userEvent.setup()
    renderContact()

    const cv = screen.getByRole('link', { name: /CV/ })
    expect(cv).toHaveAttribute('href', '/CV_Bamba_Amara_Full.pdf')
    await user.click(cv)
    expect(mockedTrack).toHaveBeenCalledWith('cv_download')
  })
})