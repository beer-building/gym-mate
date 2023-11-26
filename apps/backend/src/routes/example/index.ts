import { FastifyPluginAsync } from 'fastify'

// eslint-disable-next-line
const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	// eslint-disable-next-line
	fastify.get('/', async function (request, reply) {
		return 'this is an example'
	})
}

export default example
