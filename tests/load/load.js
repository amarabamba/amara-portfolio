import { sleep } from 'k6'
import { collectAssets, get, pageChecks, assetChecks } from './config.js'

const single = Number(__ENV.VUS || 0)

export const options = {
  scenarios: {
    load: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: single > 0
        ? [
            { duration: '1m', target: single },
            { duration: '1m', target: single },
            { duration: '30s', target: 0 },
          ]
        : [
            { duration: '1m', target: 10 },
            { duration: '1m', target: 25 },
            { duration: '1m', target: 50 },
            { duration: '1m', target: 100 },
            { duration: '1m', target: 250 },
            { duration: '1m', target: 500 },
            { duration: '1m', target: 500 },
            { duration: '1m', target: 0 },
          ],
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000', 'p(99)<2000'],
    'http_req_duration{name:home}': ['p(95)<1000', 'p(99)<2000'],
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