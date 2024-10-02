import { ErrorReply, UpdateWorkoutDto, WorkoutReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const UpdateWorkoutSchema = {
	description: 'Update workout in workout program',
	params: IdParams,
	body: UpdateWorkoutDto,
	tags: ['Workouts'],
	summary: 'Update workout in workout program',
	response: {
		200: WorkoutReply,
		400: ErrorReply
	}
}
