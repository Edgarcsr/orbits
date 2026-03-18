import { S3Client } from '@aws-sdk/client-s3'
import { env } from '@orbits/env'

export const s3Client = new S3Client({
  region: 'garage',
  endpoint: env.BUCKET_STORAGE_ENDPOINT,
  credentials: {
    accessKeyId: env.BUCKET_STORAGE_ACCESS_KEY,
    secretAccessKey: env.BUCKET_STORAGE_SECRET_KEY,
  },
  forcePathStyle: true,
  requestChecksumCalculation: 'WHEN_REQUIRED',
})
