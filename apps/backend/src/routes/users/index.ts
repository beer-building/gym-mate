import { compare } from 'bcryptjs';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

import { LoginSchema, RegisterSchema } from '../../schemas/users';
import { UsersService } from '../../services';
import { usersErrors } from '../../constants';

const usersRoutes: FastifyPluginAsyncTypebox = async (server) => {
	const usersService = new UsersService(server);

	server.post('/', { schema: RegisterSchema }, async (request, reply) => {
		const { email } = request.body.user;

		const existUser = await usersService.findUser(email);

		if (existUser) throw server.httpErrors.badRequest(usersErrors.ALREADY_REGISTERED_ERROR);

		const createdUser = await usersService.createUser(request.body);

		reply.status(201);

		return usersService.buildUserResponse(createdUser);
	});

	server.post('/login', { schema: LoginSchema }, async (request, reply) => {
		const { email, password } = request.body.user;
		const existUser = await usersService.findUser(email);

		if (!existUser) throw server.httpErrors.unauthorized(usersErrors.USER_NOT_FOUND_ERROR);

		const isCorrectPass = await compare(password, existUser.passwordHash);

		if (!isCorrectPass) throw server.httpErrors.unauthorized(usersErrors.WRONG_PASS_ERROR);

		reply.status(200);

		return usersService.buildUserResponse(existUser);
	});
};

export default usersRoutes;
