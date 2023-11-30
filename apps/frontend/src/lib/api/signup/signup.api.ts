import { createMutation } from '@farfetched/core';
import type { CreateUserDto, ErrorReply, UserReplyType } from '@gym-mate/shared-types';
import { createEffect } from 'effector';

export const signupQuery = createMutation({
	effect: createEffect<CreateUserDto, UserReplyType, ErrorReply>(
		async (userData: CreateUserDto) => {
			const response = await fetch('http://localhost:3000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userData)
			});

			return response.json();
		}
	)
});
