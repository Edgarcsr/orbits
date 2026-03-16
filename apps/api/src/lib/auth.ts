import { env } from '@orbits/env'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { openAPI } from 'better-auth/plugins'
import { db } from '../db/client.js'

export const auth = betterAuth({
  plugins: [
    openAPI({
      disableDefaultReference: true,
    }),
  ],
  trustedOrigins: ['http://localhost:3333'],
  database: drizzleAdapter(db, { provider: 'pg', usePlural: true }),
  baseURL: env.BETTER_AUTH_URL,
  emailAndPassword: { enabled: true },
})
