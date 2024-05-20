import { FastifySchema } from 'fastify'

import { ErrorReply, WorkoutProgramsReply } from '@gym-mate/shared-types'

export const GetWorkoutProgramsSchema: FastifySchema = {
	description: 'Get workout programs list',
	tags: ['Workout program'],
	summary: 'Workout programs list',
	response: {
		200: WorkoutProgramsReply,
		400: ErrorReply
	}
}
