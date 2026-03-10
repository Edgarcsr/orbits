import { env } from '@fluxo/env'
import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)
app.withTypeProvider<ZodTypeProvider>()

app
  .listen({
    port: env.API_PORT,
    host: env.API_HOST,
  })
  .then(() => {
    console.log(`Server is running on http://${env.API_HOST}:${env.API_PORT}`)
  })
