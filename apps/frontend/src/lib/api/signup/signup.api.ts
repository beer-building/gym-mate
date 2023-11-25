import type { SignupResponse } from '$lib/shared/types';
import { createQuery } from '@farfetched/core';
import type { CreateUserDto } from '@gym-mate/shared-types';

export const signupQuery = createQuery({
	handler: async (userData: CreateUserDto): Promise<SignupResponse> => {
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
