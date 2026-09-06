import { sleep } from 'k6'
import { BASE_URL, get, pageChecks } from './config.js'

const vus = Number(__ENV.VUS || 3)
const duration = __ENV.DURATION || '20s'

export const options = {
  vus,
  duration,
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000'],
  },
}

export default function () {
  pageChecks(get(`${BASE_URL}/`, 'home'))
  sleep(1)
}