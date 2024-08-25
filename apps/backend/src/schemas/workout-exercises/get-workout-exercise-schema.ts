import { ErrorReply, WorkoutExerciseReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const GetWorkoutExerciseSchema = {
	description: 'Get workout exercise by id',
	params: IdParams,
	tags: ['Workout exercise'],
	summary: 'Workout Exercise by id',
	response: {
		200: WorkoutExerciseReply,
		400: ErrorReply
	}
}
