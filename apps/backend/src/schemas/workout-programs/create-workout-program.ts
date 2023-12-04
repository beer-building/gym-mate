import { FastifySchema } from 'fastify'
import { RouteGenericInterface } from 'fastify/types/route'

import { CreateWorkoutProgramDto, ErrorReply, WorkoutProgramReply } from '@gym-mate/shared-types'

export interface CreateWorkoutProgramRequest extends RouteGenericInterface {
	Body: CreateWorkoutProgramDto
	Reply: WorkoutProgramReply
}

export const CreateWorkoutProgramSchema: FastifySchema = {
	body: CreateWorkoutProgramDto,
	description: 'Create empty workout program',
	tags: ['Authentication'],
	summary: 'Workout program',
	response: {
		201: WorkoutProgramReply,
		400: ErrorReply
	}
}
