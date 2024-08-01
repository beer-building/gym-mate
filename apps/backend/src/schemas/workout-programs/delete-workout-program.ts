import { ErrorReply, SuccessReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export const DeleteProgramSchema = {
	description: 'Delete workout program',
	tags: ['Authentication'],
	summary: 'Delete Workout program',
	params: IdParams,
	response: {
		200: SuccessReply,
		400: ErrorReply
	}
}
