import fp from 'fastify-plugin'
import { User } from '@prisma/client'
import fastifyJwt, { FastifyJWTOptions } from '@fastify/jwt'
import { FastifyReply, FastifyRequest } from 'fastify'

// eslint-disable-next-line
export default fp<FastifyJWTOptions>(async (server, opts) => {
	server.register(fastifyJwt, {
		secret: server.config.JWT_SECRET
	})

	server.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			await request.jwtVerify()
		} catch (err) {
			reply.send(err)
		}
	})
})

declare module '@fastify/jwt' {
	interface FastifyJWT {
		payload: User
	}
}

declare module 'fastify' {
	export interface FastifyInstance {
		authenticate(request: FastifyRequest, reply: FastifyReply): void
	}
}
