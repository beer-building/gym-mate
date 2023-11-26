import fp from 'fastify-plugin'
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env'
import { Static } from '@sinclair/typebox'

import { ConfigSchema } from '@gym-mate/shared-types'

declare module 'fastify' {
	interface FastifyInstance {
		config: Static<typeof ConfigSchema>
	}
}

export default fp<FastifyEnvOptions>(async (server, opts) => {
	server.register(fastifyEnv, { schema: ConfigSchema })
})
