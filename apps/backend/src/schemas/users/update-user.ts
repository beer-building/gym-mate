import { FastifySchema } from 'fastify'
import { Static, Type } from '@sinclair/typebox'
import { RouteGenericInterface } from 'fastify/types/route'

import { UserReply } from './user-reply'

export interface UpdateUserRequest extends RouteGenericInterface {
  Body: UpdateUserDto
}

export const UpdateUserDto = Type.Object({
  user: Type.Object({
    email: Type.Optional(Type.String({ format: 'email' })),
    token: Type.Optional(Type.String()),
    username: Type.Optional(Type.String()),
    bio: Type.Optional(Type.String()),
    image: Type.Optional(Type.String({ format: 'uri', default: '' }))
  })
})

export type UpdateUserDto = Static<typeof UpdateUserDto>

export const UpdateUserSchema: FastifySchema = {
  body: UpdateUserDto,
  response: {
    200: UserReply
  }
}
