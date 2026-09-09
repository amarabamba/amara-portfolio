import { expect, test } from '@playwright/test'

const NAV_ANCHORS = ['work', 'engineering', 'experience', 'about', 'contact']

test('la page principale répond 200 et affiche le contenu attendu', async ({
  page,
}) => {
  const pageErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') pageErrors.push(message.text())
  })
  page.on('pageerror', (error) => pageErrors.push(error.message))

  const response = await page.goto('/')
  expect(response?.status()).toBe(200)

  await expect(page).toHaveTitle(/Amara Bamba — Software Engineer/)
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /Full-stack Software Engineer/,
  )
  await expect(page.getByRole('main')).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

  for (const anchor of NAV_ANCHORS) {
    const section = page.locator(`#${anchor}`)
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
  }

  expect(pageErrors).toEqual([])
})