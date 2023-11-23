import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    const allUsers = await fastify.prisma.user.findMany()

    return { root: allUsers }
  })
}

export default root
