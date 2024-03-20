import { ErrorReply, UpdateWorkoutDto, WorkoutReply } from '@gym-mate/shared-types'
import { WorkoutProgramWorkoutParams } from '../id-params'

export const UpdateWorkoutSchema = {
	description: 'Update workout in workout program',
	params: WorkoutProgramWorkoutParams,
	body: UpdateWorkoutDto,
	tags: ['Workouts'],
	summary: 'Update workout in workout program',
	response: {
		204: WorkoutReply,
		400: ErrorReply
	}
}
