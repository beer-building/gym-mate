import { Static, Type } from '@sinclair/typebox'
import { ExerciseSchema } from './exercise'

export const FullExerciseReply = Type.Object({
	exercise: ExerciseSchema
})

export type FullExerciseReply = Static<typeof FullExerciseReply>
