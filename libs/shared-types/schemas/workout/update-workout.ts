import { type Static, Type } from '@sinclair/typebox'

export const UpdateWorkoutSchema = Type.Object({
	title: Type.Optional(Type.String())
})

export const UpdateWorkoutDto = Type.Object({
	workout: UpdateWorkoutSchema
})

export type UpdateWorkoutDto = Static<typeof UpdateWorkoutDto>
