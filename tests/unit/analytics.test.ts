import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@vercel/speed-insights', () => ({ injectSpeedInsights: vi.fn() }))

async function loadAnalytics() {
  vi.resetModules()
  return import('@/analytics')
}

beforeEach(() => {
  document.head.innerHTML = ''
  const windowWithDataLayer = window as unknown as { dataLayer?: unknown[]; gtag?: unknown }
  windowWithDataLayer.dataLayer = undefined
  windowWithDataLayer.gtag = undefined
})

describe('analytics', () => {
  it('track est inoffensif quand gtag est absent', async () => {
    vi.stubEnv('VITE_GA_MEASUREMENT_ID', undefined)
    vi.stubEnv('VITE_GOOGLE_ADS_ID', undefined)

    const { track } = await loadAnalytics()
    expect(() => track('cv_download')).not.toThrow()
    expect((window as unknown as { dataLayer?: unknown[] }).dataLayer).toBeUndefined()
  })

  it('n’injecte pas GA sans identifiant configuré', async () => {
    vi.stubEnv('VITE_GA_MEASUREMENT_ID', undefined)

    const { initAnalytics } = await loadAnalytics()
    initAnalytics()
    expect(
      document.head.querySelectorAll('script[src*="googletagmanager"]'),
    ).toHaveLength(0)
  })

  it('injecte GA quand un identifiant est configuré', async () => {
    vi.stubEnv('VITE_GA_MEASUREMENT_ID', 'G-TEST123')
    vi.stubEnv('VITE_GOOGLE_ADS_ID', undefined)

    const { initAnalytics } = await loadAnalytics()
    initAnalytics()
    const script = document.head.querySelector('script[src*="googletagmanager"]')
    expect(script).not.toBeNull()
    expect(script?.getAttribute('src')).toContain('G-TEST123')
  })

  it('initAnalytics est idempotent', async () => {
    vi.stubEnv('VITE_GA_MEASUREMENT_ID', undefined)

    const { initAnalytics } = await loadAnalytics()
    const { injectSpeedInsights } = await import('@vercel/speed-insights')
    initAnalytics()
    initAnalytics()
    expect(vi.mocked(injectSpeedInsights)).toHaveBeenCalledTimes(1)
  })
})