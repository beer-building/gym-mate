import { httpService } from '$lib/shared/services/http-service'
import { createMutation, createQuery } from '@farfetched/core'
import type {
	CreateWorkoutProgramDto,
	ErrorReply,
	WorkoutProgramReply,
	WorkoutProgramsReply
} from '@gym-mate/shared-types'
import { createEffect } from 'effector'

export const getAll = createQuery({
	effect: httpService.get<WorkoutProgramsReply, ErrorReply>('/workout-programs')
})

export const create = createMutation({
	effect: httpService.post<CreateWorkoutProgramDto, WorkoutProgramReply, ErrorReply>(
		'/workout-programs'
	)
})

export const workoutProgram = createQuery({
	effect: createEffect((id: string) => {
		return httpService.get<WorkoutProgramReply, ErrorReply>(`/workout-programs/${id}`)()
	})
})
