import { ErrorReply, FullExerciseReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const GetExerciseSchema = {
	description: 'Get exercise by id',
	params: IdParams,
	tags: ['Authentication'],
	summary: 'Exercise by id',
	response: {
		200: FullExerciseReply,
		400: ErrorReply
	}
}
