import { FastifySchema } from 'fastify'
import { RouteGenericInterface } from 'fastify/types/route'

import { ErrorReply, WorkoutProgramsReply } from '@gym-mate/shared-types'

export interface GetWorkoutProgramsRequest extends RouteGenericInterface {
	Reply: WorkoutProgramsReply
}

export const GetWorkoutProgramsSchema: FastifySchema = {
	description: 'Get workout programs list',
	tags: ['Authentication'],
	summary: 'Workout programs list',
	response: {
		200: WorkoutProgramsReply,
		400: ErrorReply
	}
}
