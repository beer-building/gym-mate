import { Static, Type } from '@sinclair/typebox'
import { ExerciseSchema } from './exercise'

export const MuscleGroupExerciseSchema = Type.Object({
	BACK_AND_NECK: Type.Array(ExerciseSchema),
	ABS_AND_OBLIQUES: Type.Array(ExerciseSchema),
	SHOULDERS: Type.Array(ExerciseSchema),
	BUTTOCKS: Type.Array(ExerciseSchema),
	HANDS: Type.Array(ExerciseSchema),
	CHEST: Type.Array(ExerciseSchema),
	LEGS: Type.Array(ExerciseSchema),
	SHIN: Type.Array(ExerciseSchema)
})

// TODO: RENAME
export const ExercisesByMuscleGroupReply = Type.Object({
	exercises: Type.Array(ExerciseSchema)
})

export type ExercisesByMuscleGroupReply = Static<typeof ExercisesByMuscleGroupReply>
