import { Type } from '@sinclair/typebox'
import type { Static } from '@sinclair/typebox'

import { ExerciseSchema } from './exercise'
import { Equipment } from '@prisma/client'

export const FullExerciseReply = Type.Object({
	exercise: ExerciseSchema
})

export const GetExerciseQuery = Type.Object({
	equipment: Type.Optional(Type.Enum(Equipment))
})

export type FullExerciseReply = Static<typeof FullExerciseReply>
