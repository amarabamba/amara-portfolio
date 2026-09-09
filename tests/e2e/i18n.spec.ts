import { expect, test } from '@playwright/test'

test('bascule de langue, persiste et survit au rechargement', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Amara Bamba — Software Engineer')

  await page.getByRole('button', { name: 'French' }).click()
  await expect(page).toHaveTitle('Amara Bamba — Ingénieur Logiciel')
  expect(await page.locator('html').getAttribute('lang')).toBe('fr')

  const stored = await page.evaluate(() =>
    window.localStorage.getItem('portfolio-language'),
  )
  expect(stored).toBe('fr')

  await page.reload()
  await expect(page).toHaveTitle('Amara Bamba — Ingénieur Logiciel')
  expect(await page.locator('html').getAttribute('lang')).toBe('fr')
})