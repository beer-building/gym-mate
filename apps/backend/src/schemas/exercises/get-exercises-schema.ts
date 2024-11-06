import { ErrorReply, ExercisesByMuscleGroupReply, GetExerciseQuery } from '@gym-mate/shared-types'

export const GetExercisesSchema = {
	description: 'Get exercises list grouped by muscle group',
	tags: ['Exercise'],
	summary: 'Exercises list',
	querystring: GetExerciseQuery,
	response: {
		200: ExercisesByMuscleGroupReply,
		400: ErrorReply
	}
}
