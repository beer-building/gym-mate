import { CreateTelegramUserDto, ErrorReply, LoginUserDto, UserReply } from '@gym-mate/shared-types'

export const LoginSchema = {
	body: LoginUserDto,
	description: 'Sign in user',
	tags: ['Authentication'],
	summary: 'sign in',
	response: {
		200: UserReply,
		401: ErrorReply
	}
}

export const TelegramLoginSchema = {
	body: CreateTelegramUserDto,
	description: 'Sign in a via telegram',
	tags: ['Authentication'],
	summary: 'sign up',
	response: {
		200: UserReply,
		400: ErrorReply
	}
}
