import http from 'k6/http'
import { check } from 'k6'

export const BASE_URL = __ENV.BASE_URL || 'https://amarabambadev.vercel.app'

const REQ_DEFAULTS = {
  headers: {
    'Accept-Encoding': 'gzip',
    'User-Agent': 'k6-portfolio-load/1.0',
  },
}

const JS_RE = /src="(\/assets\/[^"]+\.js)"/
const CSS_RE = /href="(\/assets\/[^"]+\.css)"/
const FONT_RE = /url\((\/assets\/[^)]+\.woff2)\)/

export function assetUrl(path) {
  return `${BASE_URL}${path}`
}

export function get(url, name) {
  return http.get(url, {
    ...REQ_DEFAULTS,
    responseType: 'none',
    tags: { name },
  })
}

export function collectAssets() {
  const home = http.get(`${BASE_URL}/`, REQ_DEFAULTS)
  const site = { homeUrl: `${BASE_URL}/`, js: null, css: null, font: null }
  if (home.status !== 200 || !home.body) return site

  const js = home.body.match(JS_RE)
  const css = home.body.match(CSS_RE)
  if (js) site.js = assetUrl(js[1])
  if (css) {
    site.css = assetUrl(css[1])
    const cssRes = http.get(assetUrl(css[1]), REQ_DEFAULTS)
    const font = cssRes.body && cssRes.body.match(FONT_RE)
    if (font) site.font = assetUrl(font[1])
  }
  return site
}

function header(res, name) {
  const lower = name.toLowerCase()
  const key = Object.keys(res.headers).find((k) => k.toLowerCase() === lower)
  return key ? res.headers[key] : ''
}

export function pageChecks(res) {
  return check(res, {
    'home status 200': (r) => r.status === 200,
    'home content-type html': (r) => header(r, 'content-type').includes('text/html'),
    'home body non vide': (r) =>
      Number(header(r, 'content-length') || 0) > 0 ||
      header(r, 'content-encoding') !== '' ||
      (r.body && r.body.length > 0),
  })
}

export function assetChecks(res) {
  return check(res, {
    'asset status 200': (r) => r.status === 200,
  })
}