import { Muscle } from '@prisma/client'
import { Type } from '@sinclair/typebox'
import type { Static } from '@sinclair/typebox'

export const BodyLoadSchema = Type.Object({
	muscle: Type.Enum(Muscle),
	value: Type.Number()
})

export const ExerciseSchema = Type.Object({
	id: Type.Number(),
	title: Type.String(),
	description: Type.Union([Type.String(), Type.Null()]),
	bodyLoad: Type.Array(BodyLoadSchema)
})

export type ExerciseSchema = Static<typeof ExerciseSchema>
