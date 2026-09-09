import { expect, test } from '@playwright/test'
import { Readable } from 'node:stream'

test('le CV se télécharge en PDF depuis le header', async ({ page }) => {
  await page.goto('/')

  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('link', { name: 'Resume', exact: true }).click()
  const download = await downloadPromise

  expect(download.suggestedFilename()).toBe('CV_Bamba_Amara_Full.pdf')

  const stream = await download.createReadStream()
  expect(stream).not.toBeNull()
  const buffer = await streamToBuffer(stream as Readable)
  expect(buffer.subarray(0, 4).toString('ascii')).toBe('%PDF')
})

test('le lien CV de la section contact est valide', async ({ page }) => {
  await page.goto('/#contact')
  const link = page.getByRole('link', { name: /Download the full CV|CV/ }).first()
  await expect(link).toHaveAttribute('href', '/CV_Bamba_Amara_Full.pdf')
  await expect(link).toHaveAttribute('target', '_blank')
})

function streamToBuffer(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    stream.on('data', (chunk: Buffer) => chunks.push(chunk))
    stream.on('end', () => resolve(Buffer.concat(chunks)))
    stream.on('error', reject)
  })
}