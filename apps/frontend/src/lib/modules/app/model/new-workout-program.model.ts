import { goto } from '$app/navigation';
import { workoutProgramsApi } from '$lib/api/workout-programs';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { spread } from 'patronum';

export const programName = createStore('');
export const programDescription = createStore('');

export const errorMessage = createStore('');

export const fieldChanged = createEvent<Record<string, string>>();

export const createWorkoutProgram = createEvent();

const redirectToWorkoutProgramsFx = createEffect(() => {
	goto('/app/workout-programs');
});

spread({
	source: fieldChanged,
	targets: {
		programName,
		programDescription
	}
});

sample({
	clock: createWorkoutProgram,
	source: [programName, programDescription] as const,
	fn: ([title, description]) => ({ workoutProgram: { title, description } }),
	target: workoutProgramsApi.create.start
});

sample({
	clock: workoutProgramsApi.create.finished.success,
	target: redirectToWorkoutProgramsFx
});

sample({
	clock: workoutProgramsApi.create.finished.failure,
	fn: ({ error }) => error.message,
	target: errorMessage
});
