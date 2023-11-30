import { ErrorReply, GetWorkoutProgramReply } from '@gym-mate/shared-types';
import { IdParams } from '../id-params';

export const GetWorkoutProgramSchema = {
	description: 'Get workout programs list',
	tags: ['Authentication'],
	summary: 'Workout Program',
	params: IdParams,
	response: {
		200: GetWorkoutProgramReply,
		400: ErrorReply
	}
};
