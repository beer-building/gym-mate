import { Type, type Static } from '@sinclair/typebox'

export const CreateUserDto = Type.Object({
	user: Type.Object({
		username: Type.String(),
		password: Type.String(),
		email: Type.String({ format: 'email' })
	})
})

export const CreateTelegramUserDto = Type.Object({
	user: Type.Object({
		chatId: Type.String()
	})
})

export type CreateUserDto = Static<typeof CreateUserDto>
export type CreateTelegramUserDto = Static<typeof CreateTelegramUserDto>
