import { env } from '@orbits/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: 'apps/api/src/db/schema/**',
  out: 'apps/api/src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  casing: 'snake_case',
})
