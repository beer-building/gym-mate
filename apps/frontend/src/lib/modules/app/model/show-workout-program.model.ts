import { createEvent, createStore, sample } from 'effector'
import { workoutProgramsApi } from '$lib/api'
import type { WorkoutProgramUnit } from '@gym-mate/shared-types'

export const workoutProgram$ = createStore({} as WorkoutProgramUnit)
export const pagePending$ = workoutProgramsApi.workoutProgram.$pending

export const pageMounted = createEvent<string>()

sample({
	clock: pageMounted,
	target: workoutProgramsApi.workoutProgram.start
})

sample({
	clock: workoutProgramsApi.workoutProgram.finished.success,
	fn: ({ result }) => result.workoutProgram,
	target: workoutProgram$
})
