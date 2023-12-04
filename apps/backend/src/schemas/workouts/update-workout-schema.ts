import { ErrorReply, UpdateWorkoutDto, WorkoutReply } from '@gym-mate/shared-types';
import { WorkoutProgramWorkoutParams } from '../id-params';

export const UpdateWorkoutSchema = {
	description: 'Update workout in workout program',
	params: WorkoutProgramWorkoutParams,
	body: UpdateWorkoutDto,
	tags: ['Authentication'],
	summary: 'Workout program workout',
	response: {
		204: WorkoutReply,
		400: ErrorReply
	}
};
