import { FastifyPluginAsync } from 'fastify'
import { compare } from 'bcryptjs'

import { LoginRequest, LoginSchema, RegisterRequest, RegisterSchema } from '../../schemas/users'
import { UsersService } from '../../services'
import { usersErrors } from '../../constants'

const usersRoute: FastifyPluginAsync = async (server) => {
	const usersService = new UsersService(server)

	server.post<RegisterRequest>('/', { schema: RegisterSchema }, async (request, reply) => {
		const { email } = request.body.user

		const existUser = await usersService.findUser(email)

		if (existUser) throw server.httpErrors.badRequest(usersErrors.ALREADY_REGISTERED_ERROR)

		const createdUser = await usersService.createUser(request.body)

		reply.status(201)

		return usersService.buildUserResponse(createdUser)
	})

	server.post<LoginRequest>('/login', { schema: LoginSchema }, async (request, reply) => {
		const { email, password } = request.body.user
		const existUser = await usersService.findUser(email)

		if (!existUser) throw server.httpErrors.unauthorized(usersErrors.USER_NOT_FOUND_ERROR)

		const isCorrectPass = await compare(password, existUser.passwordHash)

		if (!isCorrectPass) throw server.httpErrors.unauthorized(usersErrors.WRONG_PASS_ERROR)

		reply.status(200)

		return usersService.buildUserResponse(existUser)
	})

	// TEST
	// eslint-disable-next-line
	server.get('/', { onRequest: server.authenticate }, async (request, reply) => request.user)
}

export default usersRoute
