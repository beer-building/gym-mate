import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

import {
	LoginSchema,
	RegisterSchema,
	RegisterTelegramSchema,
	TelegramLoginSchema
} from '../../schemas/users'
import { UsersService } from '../../services'

const usersRoutes: FastifyPluginAsyncTypebox = async (server) => {
	const usersService = new UsersService(server)

	server.post('/', { schema: RegisterSchema }, async (request, reply) => {
		const createdUser = await usersService.registerUser(request.body)

		reply.status(201).send(usersService.buildUserResponse(createdUser))
	})

	server.post('/telegram', { schema: RegisterTelegramSchema }, async (request, reply) => {
		const createdUser = await usersService.registerTelegramUser(request.body)

		reply.status(201).send(usersService.buildUserResponse(createdUser))
	})

	server.post('/telegram/login', { schema: TelegramLoginSchema }, async (request, reply) => {
		const user = await usersService.findUserByChatId(request.body.user.chatId)

		reply.status(200).send(usersService.buildUserResponse(user))
	})

	server.post('/login', { schema: LoginSchema }, async (request, reply) => {
		const { email, password } = request.body.user

		const user = await usersService.loginUser(email, password)

		reply.status(200).send(usersService.buildUserResponse(user))
	})
}

export default usersRoutes
