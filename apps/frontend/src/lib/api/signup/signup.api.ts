import { createMutation } from '@farfetched/core';
import type { CreateUserDto, UserReplyType } from '@gym-mate/shared-types';

export const signupQuery = createMutation({
	handler: async (userData: CreateUserDto): Promise<UserReplyType> => {
		const requestOptions: RequestInit = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		};
		const response = await fetch('http://localhost:3000/users', requestOptions);

		return response.json();
	}
});
