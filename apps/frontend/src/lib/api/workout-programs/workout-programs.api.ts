import { HttpService } from '$lib/shared/services/http-service';
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
		const res = await HttpService.instance.get<WorkoutProgramsReply>('/workout-programs');
		return res.data;
	})
});

export const create = createMutation({
	effect: createEffect<CreateWorkoutProgramDto, WorkoutProgramReply, ErrorReply>(async (data) => {
		const res = await HttpService.instance.post<WorkoutProgramReply>('/workout-programs', data);
		return res.data;
	})
});
