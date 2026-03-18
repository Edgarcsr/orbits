import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().startsWith('postgresql://'),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
  API_PORT: z.number().default(3333),
  API_HOST: z.string().default('0.0.0.0'),
  BUCKET_STORAGE_ENDPOINT: z.url(),
  BUCKET_STORAGE_ACCESS_KEY: z.string(),
  BUCKET_STORAGE_SECRET_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
