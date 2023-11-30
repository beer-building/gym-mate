import { CreateWorkoutProgramDto, ErrorReply, WorkoutProgramReply } from '@gym-mate/shared-types';

export const CreateWorkoutProgramSchema = {
	body: CreateWorkoutProgramDto,
	description: 'Create empty workout program',
	tags: ['Authentication'],
	summary: 'Workout program',
	response: {
		201: WorkoutProgramReply,
		400: ErrorReply
	}
};
