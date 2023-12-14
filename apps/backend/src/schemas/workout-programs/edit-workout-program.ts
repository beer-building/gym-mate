import { EditWorkoutProgramDto, ErrorReply, WorkoutProgramReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const EditWorkoutProgramSchema = {
	body: EditWorkoutProgramDto,
	description: 'Edit workout program',
	tags: ['Authentication'],
	summary: 'Workout program',
	params: IdParams,
	response: {
		201: WorkoutProgramReply,
		400: ErrorReply
	}
}
