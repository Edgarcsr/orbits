import { randomUUID } from 'node:crypto'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { s3Client } from '../../lib/s3client'

export const uploadVideoRoute: FastifyPluginCallbackZod = async (server) => {
  server.post('/upload-video', async () => {
    const signedUrl = await getSignedUrl(
      s3Client,
      new PutObjectCommand({
        Bucket: 'orbits-dev',
        Key: `videos/${randomUUID()}.mp4`,
        ContentType: 'video/mp4',
      }),
      {
        expiresIn: 300,
      },
    )

    return { signedUrl }
  })
}
