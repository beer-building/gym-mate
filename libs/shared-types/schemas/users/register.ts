import { Type, type Static } from '@sinclair/typebox'

export const CreateUserDto = Type.Object({
	user: Type.Object({
		username: Type.String(),
		password: Type.String(),
		email: Type.String({ format: 'email' })
	})
})

export type CreateUserDto = Static<typeof CreateUserDto>
