import { Type } from '@sinclair/typebox';
import { ErrorReply } from '@gym-mate/shared-types';
import { WorkoutProgramWorkoutParams } from '../id-params';

export const DeleteWorkoutSchema = {
	description: 'Delete workout in workout program',
	params: WorkoutProgramWorkoutParams,
	tags: ['Authentication'],
	summary: 'Delete workout',
	response: {
		200: Type.Object({ ok: Type.Boolean() }),
		400: ErrorReply
	}
};
