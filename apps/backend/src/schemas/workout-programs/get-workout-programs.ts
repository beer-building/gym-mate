import { ErrorReply, WorkoutProgramsReply } from '@gym-mate/shared-types';

export const GetWorkoutProgramsSchema = {
	description: 'Get workout programs list',
	tags: ['Authentication'],
	summary: 'Workout programs list',
	response: {
		200: WorkoutProgramsReply,
		400: ErrorReply
	}
};
