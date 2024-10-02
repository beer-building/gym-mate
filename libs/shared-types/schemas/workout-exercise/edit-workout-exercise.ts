import { type Static, Type } from '@sinclair/typebox'

export const EditWorkoutExerciseDto = Type.Object({
	workoutExercise: Type.Object({
		sets: Type.Optional(Type.Integer()),
		reps: Type.Optional(Type.Integer()),
		weight: Type.Optional(Type.Integer()),
		rest: Type.Optional(Type.Integer())
	})
})

export type EditWorkoutExerciseDto = Static<typeof EditWorkoutExerciseDto>
