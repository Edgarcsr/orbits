import { env } from '@fluxo/env'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './auth-schema'

const db = drizzle(new Pool({ connectionString: process.env.DATABASE_URL }), {
  schema,
})

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: 'pg', schema }),
  baseURL: `${env.API_HOST}:${env.API_PORT}`,
  emailAndPassword: { enabled: true },
})
