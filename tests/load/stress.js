import { sleep } from 'k6'
import { collectAssets, get, pageChecks, assetChecks } from './config.js'

const target = Number(__ENV.VUS || 100)

export const options = {
  scenarios: {
    stress: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '1m', target },
        { duration: '2m', target },
        { duration: '30s', target: 0 },
      ],
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.02'],
    'http_req_duration{name:home}': ['p(95)<2000', 'p(99)<3000'],
  },
}

export function setup() {
  return collectAssets()
}

export default function (site) {
  pageChecks(get(site.homeUrl, 'home'))
  if (site.js) assetChecks(get(site.js, 'js'))
  if (site.css) assetChecks(get(site.css, 'css'))
  if (site.font) assetChecks(get(site.font, 'font'))
  sleep(0.5)
}