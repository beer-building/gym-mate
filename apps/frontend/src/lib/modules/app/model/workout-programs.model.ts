import { workoutProgramsApi } from '$lib/api/workout-programs';
import type { WorkoutProgram } from '@prisma/client';
import { createEvent, createStore, sample } from 'effector';

export const workoutPrograms$ = createStore<Array<WorkoutProgram>>([]);

export const pageMounted = createEvent();

sample({
	clock: pageMounted,
	target: workoutProgramsApi.getAll.start
});

sample({
	clock: workoutProgramsApi.getAll.finished.success,
	fn: ({ result }) => result.workoutPrograms,
	target: workoutPrograms$
});
