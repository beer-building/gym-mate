import { FastifySchema } from 'fastify'

import { RouteGenericInterface } from 'fastify/types/route'

import { LoginUserDto, UserReply, UserReplyType } from '@gym-mate/shared-types'

export interface LoginRequest extends RouteGenericInterface {
	Body: LoginUserDto
	Reply: UserReplyType
}

export const LoginSchema: FastifySchema = {
	body: LoginUserDto,
	description: 'Sign in user',
	tags: ['Authentication'],
	summary: 'sign in',
	response: {
		200: UserReply
	}
}
