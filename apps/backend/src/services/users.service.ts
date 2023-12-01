import { FastifyInstance } from 'fastify';
import { compare, genSalt, hash } from 'bcryptjs';
import { User } from '@prisma/client';

import { CreateUserDto, UserReplyType } from '@gym-mate/shared-types';
import { UsersRepository } from '../repositories';
import { usersErrors } from '../constants';

export class UsersService {
	server: FastifyInstance;

	usersRepository: UsersRepository;

	constructor(server: FastifyInstance) {
		this.server = server;
		this.usersRepository = new UsersRepository(server);
	}

	async checkRegisteredUser(email: string) {
		const existUser = await this.usersRepository.findUser(email);

		if (existUser) throw this.server.httpErrors.badRequest(usersErrors.ALREADY_REGISTERED_ERROR);

		return existUser;
	}

	async createUser(user: CreateUserDto['user']) {
		const salt = await genSalt(10);
		const passwordHash = await hash(user.password, salt);

		Reflect.deleteProperty(user, 'password');

		const formattedUser = { ...user, passwordHash };

		const newUser = await this.usersRepository.createUser(formattedUser);

		return newUser;
	}

	async registerUser({ user }: CreateUserDto) {
		const existUser = await this.usersRepository.findUser(user.email);

		if (existUser) throw this.server.httpErrors.badRequest(usersErrors.ALREADY_REGISTERED_ERROR);

		const createdUser = await this.createUser(user);

		return createdUser;
	}

	async loginUser(email: string, password: string) {
		const existUser = await this.usersRepository.findUser(email);

		if (!existUser) throw this.server.httpErrors.unauthorized(usersErrors.USER_NOT_FOUND_ERROR);

		const isCorrectPass = await compare(password, existUser.passwordHash);

		if (!isCorrectPass) throw this.server.httpErrors.unauthorized(usersErrors.WRONG_PASS_ERROR);

		return existUser;
	}

	buildUserResponse(user: User): UserReplyType {
		const userResponse = {
			id: user.id,
			email: user.email,
			username: user.username,
			image: user.image || '',
			token: this.server.jwt.sign(user)
		};

		return { user: userResponse };
	}
}
