import { type Static, Type } from '@sinclair/typebox'

export const CreateWorkoutProgramDto = Type.Object({
	workoutProgram: Type.Object({
		title: Type.String({ minLength: 3 }),
		description: Type.Optional(Type.String())
	})
})

export type CreateWorkoutProgramDto = Static<typeof CreateWorkoutProgramDto>
