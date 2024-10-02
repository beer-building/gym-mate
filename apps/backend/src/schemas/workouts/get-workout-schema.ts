import { ErrorReply, FullWorkoutReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const GetWorkoutSchema = {
	description: 'Get workout programs workout',
	params: IdParams,
	tags: ['Authentication'],
	summary: 'Workout-program workout',
	response: {
		200: FullWorkoutReply,
		400: ErrorReply
	}
}
