import { ErrorReply, WorkoutReply, CreateWorkoutDto } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const CreateWorkoutSchema = {
	description: 'Create workout in workout program',
	params: IdParams,
	body: CreateWorkoutDto,
	tags: ['Authentication'],
	summary: 'Workout program workout',
	response: {
		201: WorkoutReply,
		400: ErrorReply
	}
}
