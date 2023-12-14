import { CreateUserDto, ErrorReply, UserReply } from '@gym-mate/shared-types'

export const RegisterSchema = {
	body: CreateUserDto,
	description: 'Sign up a user',
	tags: ['Authentication'],
	summary: 'sign up',
	response: {
		201: UserReply,
		400: ErrorReply
	}
}
