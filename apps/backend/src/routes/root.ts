import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
	fastify.get('/', async function () {
		return { root: 'health check' }
	})
}

export default root
