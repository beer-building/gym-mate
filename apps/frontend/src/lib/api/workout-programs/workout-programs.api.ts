import { $token } from '$lib/services/auth/auth.service';
import { createQuery } from '@farfetched/core';
import type { WorkoutProgramsReply } from '@gym-mate/shared-types';

export const getAll = createQuery<void, WorkoutProgramsReply>({
	handler: async () => {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${$token.getState().token}`
			}
		};
		const response = await fetch('http://localhost:3000/workout-programs', requestOptions);

		return response.json();
	}
});
