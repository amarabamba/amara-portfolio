import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

function menuToggle(page: Page) {
  return page.getByRole('button', { name: /(Open|Close) menu/ })
}

test.describe('navigation mobile', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('la navigation desktop est masquée sur mobile', async ({ page }) => {
    await page.goto('/')
    await expect(
      page.getByRole('navigation', { name: 'Primary navigation' }),
    ).toBeHidden()
    await expect(menuToggle(page)).toBeVisible()
  })

  test('ouvre le menu, navigue vers une section et le referme', async ({ page }) => {
    await page.goto('/')
    const toggle = menuToggle(page)
    await toggle.click()

    const mobileNav = page.getByRole('navigation', { name: 'Mobile navigation' })
    await expect(mobileNav).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await mobileNav.getByRole('link', { name: 'Work' }).click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(mobileNav).toBeHidden()
    expect(page.url()).toContain('#work')
  })

  test('ferme avec Échap et recentre le focus', async ({ page }) => {
    await page.goto('/')
    const toggle = menuToggle(page)
    await toggle.click()
    await page.keyboard.press('Escape')
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(toggle).toBeFocused()
  })
})