import { ErrorReply, AddWorkoutExerciseDto, WorkoutReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const AddExerciseToWorkoutSchema = {
	description: 'Update workout exercises in workout',
	params: IdParams,
	body: AddWorkoutExerciseDto,
	tags: ['Authentication'],
	response: {
		200: WorkoutReply,
		400: ErrorReply
	}
}
