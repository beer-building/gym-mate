import { Static, Type } from '@sinclair/typebox'
import { FastifySchema } from 'fastify'
import { RouteGenericInterface } from 'fastify/types/route'

import { ErrorReply } from '../error'
import { UserReply, UserReplyType } from './user-reply'

const CreateUserDto = Type.Object({
  user: Type.Object({
    username: Type.String(),
    password: Type.String(),
    email: Type.String({ format: 'email' })
  })
})

export type CreateUserDto = Static<typeof CreateUserDto>

export interface RegisterRequest extends RouteGenericInterface {
  Body: CreateUserDto
  Reply: UserReplyType
}

export const RegisterSchema: FastifySchema = {
  body: CreateUserDto,
  description: 'Sign up a user',
  tags: ['Authentication'],
  summary: 'sign up',
  response: {
    201: UserReply,
    400: ErrorReply
  }
}
