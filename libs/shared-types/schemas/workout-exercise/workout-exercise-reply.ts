import { Type } from '@sinclair/typebox'
import type { Static } from '@sinclair/typebox'
import { ExerciseSchema } from '../exercises'

export const WorkoutExerciseSchema = Type.Object({
	id: Type.Integer(),
	workoutId: Type.Integer(),
	exercise: ExerciseSchema,
	sets: Type.Integer(),
	reps: Type.Integer(),
	weight: Type.Integer(),
	rest: Type.Integer()
})

export const WorkoutExerciseReply = Type.Object({
	workoutExercise: WorkoutExerciseSchema
})

export type WorkoutExerciseReply = Static<typeof WorkoutExerciseReply>
