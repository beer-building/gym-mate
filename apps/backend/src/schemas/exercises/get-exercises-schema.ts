import { ErrorReply, ExercisesByMuscleGroupReply } from '@gym-mate/shared-types'

export const GetExercisesSchema = {
	description: 'Get exercises list grouped by muscle group',
	tags: ['Exercise'],
	summary: 'Exercises list',
	response: {
		200: ExercisesByMuscleGroupReply,
		400: ErrorReply
	}
}
