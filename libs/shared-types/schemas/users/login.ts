import { Type, type Static } from '@sinclair/typebox';

export const LoginUserDto = Type.Object({
	user: Type.Object({
		email: Type.String({ format: 'email' }),
		password: Type.String()
	})
});

export type LoginUserDto = Static<typeof LoginUserDto>;
