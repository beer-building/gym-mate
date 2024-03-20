import { workoutProgramsApi } from '$lib/api'
import type { WorkoutProgram } from '@prisma/client'
import { createEvent, createStore, sample } from 'effector'

export const workoutPrograms = createStore<Array<WorkoutProgram>>([])
export const isLoading = createStore(true)

export const pageMounted = createEvent()

sample({
	clock: pageMounted,
	target: workoutProgramsApi.getAll.start
})

sample({
	clock: workoutProgramsApi.getAll.finished.success,
	fn: ({ result }) => result.workoutPrograms,
	target: workoutPrograms
})

sample({
	clock: workoutProgramsApi.getAll.finished.success,
	fn: () => false,
	target: isLoading
})

sample({
	clock: workoutProgramsApi.getAll.finished.failure,
	fn: () => false,
	target: isLoading
})
