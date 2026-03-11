import { fromNodeHeaders } from 'better-auth/node'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { auth } from '../../../lib/auth'

export const meRoute: FastifyPluginAsyncZod = async (server) => {
  server.get('/api/me', async (request, reply) => {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(request.headers),
    })
    if (!session) {
      return reply.status(401).send({ error: 'Unauthorized' })
    }
    return reply.send(session)
  })
}
