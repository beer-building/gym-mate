import fp from 'fastify-plugin'
import fastifySwagger, { SwaggerOptions } from '@fastify/swagger'
import fastifySwaggerUI, { FastifySwaggerUiOptions } from '@fastify/swagger-ui'

export default fp(async (fastify, opts) => {
	await fastify.register<SwaggerOptions>(fastifySwagger, {
		swagger: {
			info: {
				title: 'Test swagger',
				description: 'Testing the Fastify swagger API',
				version: '0.1.0'
			},
			externalDocs: {
				url: 'https://swagger.io',
				description: 'Find more info here'
			},
			host: 'localhost',
			schemes: ['http'],
			consumes: ['application/json'],
			produces: ['application/json']
		}
	})

	await fastify.register<FastifySwaggerUiOptions>(fastifySwaggerUI, {
		routePrefix: '/documentation',
		uiConfig: {
			docExpansion: 'full',
			deepLinking: false
		},
		staticCSP: true,
		transformStaticCSP: (header) => header,
		transformSpecification: (swaggerObject, request, reply) => {
			return swaggerObject
		},
		transformSpecificationClone: true
	})
})
