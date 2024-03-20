import { EditWorkoutProgramDto, ErrorReply, WorkoutProgramReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const EditWorkoutProgramSchema = {
	body: EditWorkoutProgramDto,
	description: 'Edit workout program',
	tags: ['Workout program'],
	summary: 'Edit workout program',
	params: IdParams,
	response: {
		201: WorkoutProgramReply,
		400: ErrorReply
	}
}
