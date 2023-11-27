import { Type, type Static } from '@sinclair/typebox';

export const UpdateUserDto = Type.Object({
	user: Type.Object({
		email: Type.Optional(Type.String({ format: 'email' })),
		token: Type.Optional(Type.String()),
		username: Type.Optional(Type.String()),
		bio: Type.Optional(Type.String()),
		image: Type.Optional(Type.String({ format: 'uri', default: '' }))
	})
});

export type UpdateUserDto = Static<typeof UpdateUserDto>;
