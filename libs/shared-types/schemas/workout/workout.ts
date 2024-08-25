import { Static, Type } from '@sinclair/typebox'
import { TDate } from '../t-date'
import { WorkoutExerciseSchema } from '../workout-exercise'

export const WorkoutSchema = Type.Object({
	id: Type.Number(),
	createdAt: TDate(),
	updatedAt: TDate(),
	title: Type.String()
})

const withWorkoutExercises = Type.Object({
	workoutExercises: Type.Array(WorkoutExerciseSchema)
})

const FullWorkoutSchema = Type.Intersect([WorkoutSchema, withWorkoutExercises])

export const WorkoutReply = Type.Object({
	workout: WorkoutSchema
})

export const FullWorkoutReply = Type.Object({
	workout: FullWorkoutSchema
})

export type FullWorkoutReply = Static<typeof FullWorkoutReply>
export type WorkoutReply = Static<typeof WorkoutReply>
