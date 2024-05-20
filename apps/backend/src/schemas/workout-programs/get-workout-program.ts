import { ErrorReply, GetWorkoutProgramReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const GetWorkoutProgramSchema = {
	description: 'Get workout program by id',
	tags: ['Workout program'],
	summary: 'Get workout program by id',
	params: IdParams,
	response: {
		200: GetWorkoutProgramReply,
		400: ErrorReply
	}
}
