import { EditWorkoutExerciseDto, ErrorReply, WorkoutExerciseReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const EditWorkoutExerciseSchema = {
	description: 'Edit workout exercise by id',
	params: IdParams,
	body: EditWorkoutExerciseDto,
	tags: ['Workout exercise'],
	summary: 'Edit Workout Exercise by id',
	response: {
		200: WorkoutExerciseReply,
		400: ErrorReply
	}
}
