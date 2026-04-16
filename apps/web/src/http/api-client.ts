import { env } from '@orbits/env'
import ky from 'ky'
export const api = ky.create({
  baseUrl: env.BETTER_AUTH_URL,
})
