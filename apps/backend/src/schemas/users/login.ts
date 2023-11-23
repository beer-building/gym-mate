import { FastifySchema } from 'fastify'
import { Static, Type } from '@sinclair/typebox'
import { RouteGenericInterface } from 'fastify/types/route'

import { UserReply, UserReplyType } from './user-reply'

const LoginUserDto = Type.Object({
  user: Type.Object({
    email: Type.String({ format: 'email' }),
    password: Type.String()
  })
})

export type LoginUserDto = Static<typeof LoginUserDto>

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
