import { FastifyPluginAsync } from 'fastify'

// eslint-disable-next-line
const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	fastify.get('/', async function (request, reply) {
		return { root: 'health check' }
	})
}

export default root
