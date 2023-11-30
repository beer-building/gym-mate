import fp from 'fastify-plugin'
import cors from '@fastify/cors'

export default fp(async (server) => {
  server.register(cors, {
    origin: '*'
  })
})
