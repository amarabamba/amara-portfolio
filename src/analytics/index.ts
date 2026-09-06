import { injectSpeedInsights } from '@vercel/speed-insights'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined
const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined

export type AnalyticsEvent =
  | 'cv_download'
  | 'contact_email_click'
  | 'linkedin_click'
  | 'github_click'
  | 'language_change'
  | 'conversion'

type GtagWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

function getGtag() {
  return (window as GtagWindow).gtag
}

function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return

  const w = window as GtagWindow
  w.dataLayer = w.dataLayer ?? []
  if (typeof w.gtag !== 'function') {
    w.gtag = (...args: unknown[]) => {
      w.dataLayer?.push(args)
    }
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.addEventListener('load', () => {
    w.gtag?.('js', new Date())
    w.gtag?.('config', GA_MEASUREMENT_ID, { anonymize_ip: true })
    if (GOOGLE_ADS_ID) {
      w.gtag?.('config', GOOGLE_ADS_ID)
    }
  })
  document.head.appendChild(script)
}

let initialized = false

export function initAnalytics() {
  if (initialized) return
  initialized = true

  injectSpeedInsights()
  loadGoogleAnalytics()
}

export function track(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  const gtag = getGtag()
  if (typeof gtag !== 'function') return
  gtag('event', event, params)
}

export function trackConversion(params: Record<string, unknown> = {}) {
  const gtag = getGtag()
  if (typeof gtag !== 'function') return
  gtag('event', 'conversion', params)
}