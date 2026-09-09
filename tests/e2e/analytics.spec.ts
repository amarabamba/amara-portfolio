import { expect, test } from '@playwright/test'
import process from 'node:process'

const EXPECT_GA = process.env.PLAYWRIGHT_EXPECT_GA !== 'false'

test('les scripts Vercel Analytics sont chargés', async ({ page }) => {
  await page.goto('/')
  await expect
    .poll(
      () =>
        page.evaluate(() =>
          Array.from(document.scripts).some((script) =>
            (script.src || '').includes('vercel'),
          ),
        ),
      { timeout: 15_000 },
    )
    .toBe(true)
})

test('GA4 est injecté quand un identifiant est configuré', async ({ page }) => {
  test.skip(!EXPECT_GA, 'GA3 non configuré pour la cible testée')
  await page.goto('/')
  await expect(page.locator('script[src*="googletagmanager.com"]')).toHaveCount(1)
})

test('GA4 est absent quand aucun identifiant n’est configuré', async ({ page }) => {
  test.skip(EXPECT_GA, 'GA configuré pour la cible testée')
  await page.goto('/')
  await expect(page.locator('script[src*="googletagmanager.com"]')).toHaveCount(0)
})