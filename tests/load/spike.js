import { sleep } from 'k6'
import { collectAssets, get, pageChecks, assetChecks } from './config.js'

export const options = {
  scenarios: {
    spike: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 10 },
        { duration: '10s', target: 500 },
        { duration: '20s', target: 500 },
        { duration: '10s', target: 1000 },
        { duration: '20s', target: 1000 },
        { duration: '10s', target: 10 },
        { duration: '30s', target: 10 },
      ],
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.02'],
    'http_req_duration{name:home}': ['p(95)<3000'],
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