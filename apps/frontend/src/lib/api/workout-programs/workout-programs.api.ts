import { $token } from '$lib/services/auth/auth.service';
import { createMutation, createQuery } from '@farfetched/core';
import type {
	CreateWorkoutProgramDto,
	ErrorReply,
	WorkoutProgramReply,
	WorkoutProgramsReply
} from '@gym-mate/shared-types';
import { createEffect } from 'effector';

export const getAll = createQuery({
	effect: createEffect<void, WorkoutProgramsReply, ErrorReply>(async () => {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${$token.getState().token}`
			}
		};

		const response = await fetch('http://localhost:3000/workout-programs', requestOptions);

		return response.json();
	})
});

export const create = createMutation({
	effect: createEffect<CreateWorkoutProgramDto, WorkoutProgramReply, ErrorReply>(
		(data) =>
			new Promise(async (resolve, reject) => {
				const requestOptions: RequestInit = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${$token.getState().token}`
					},
					body: JSON.stringify(data)
				};

				const response = await (
					await fetch('http://localhost:3000/workout-programs', requestOptions)
				).json();

				if ('statusCode' in response) {
					reject(response);
				}

				resolve(response);
			})
	)
});
