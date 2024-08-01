import { Static, Type } from '@sinclair/typebox'
import { TDate } from '../t-date'
import { ExerciseSchema } from '../exercises'

export const WorkoutSchema = Type.Object({
	id: Type.Number(),
	createdAt: TDate(),
	updatedAt: TDate(),
	title: Type.String()
})

const withExercises = Type.Object({
	exercises: Type.Array(ExerciseSchema)
})

const FullWorkoutSchema = Type.Intersect([WorkoutSchema, withExercises])

export const WorkoutReply = Type.Object({
	workout: WorkoutSchema
})

export const FullWorkoutReply = Type.Object({
	workout: FullWorkoutSchema
})

export type FullWorkoutReply = Static<typeof FullWorkoutReply>
