import { FastifyPluginAsync } from 'fastify'

// eslint-disable-next-line
const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	// eslint-disable-next-line
	fastify.get('/', async function (request, reply) {
		const allUsers = await fastify.prisma.user.findMany()

		return { root: allUsers }
	})
}

export default root
