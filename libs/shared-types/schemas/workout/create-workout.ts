import { type Static, Type } from '@sinclair/typebox'

export const CreateWorkoutDto = Type.Object({
	workout: Type.Object({
		title: Type.Optional(Type.String())
	})
})

export type CreateWorkoutDto = Static<typeof CreateWorkoutDto>
