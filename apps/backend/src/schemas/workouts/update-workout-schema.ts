import { ErrorReply, UpdateWorkoutDto, WorkoutReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const UpdateWorkoutSchema = {
	description: 'Update workout in workout program',
	params: IdParams,
	body: UpdateWorkoutDto,
	tags: ['Authentication'],
	summary: 'Workout program workout',
	response: {
		200: WorkoutReply,
		400: ErrorReply
	}
}
