import { ErrorReply, WorkoutsReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const GetWorkoutsSchema = {
	description: 'Get workout programs workouts',
	params: IdParams,
	tags: ['Authentication'],
	summary: 'Workout-program workouts',
	response: {
		200: WorkoutsReply,
		400: ErrorReply
	}
}
