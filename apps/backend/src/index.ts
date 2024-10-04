import Fastify from 'fastify'

import { app } from './app'

const fastify = Fastify({
	logger: true,
	ajv: {
		customOptions: {
			removeAdditional: 'all',
			coerceTypes: true,
			useDefaults: true
		}
	}
})

app(fastify, {})

fastify.listen({ port: 3000, host: '0.0.0.0' })
