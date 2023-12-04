import { FastifySchema } from 'fastify'

import { RouteGenericInterface } from 'fastify/types/route'

import { UpdateUserDto, UserReply } from '@gym-mate/shared-types'

export interface UpdateUserRequest extends RouteGenericInterface {
	Body: UpdateUserDto
}

export const UpdateUserSchema: FastifySchema = {
	body: UpdateUserDto,
	response: {
		200: UserReply
	}
}
