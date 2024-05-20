import { ErrorReply, WorkoutReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const CreateWorkoutSchema = {
	description: 'Create workout in workout program',
	params: IdParams,
	tags: ['Workouts'],
	summary: 'Create workout in workout program',
	response: {
		201: WorkoutReply,
		400: ErrorReply
	}
}
