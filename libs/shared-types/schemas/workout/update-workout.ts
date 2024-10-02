import { type Static, Type } from '@sinclair/typebox'

export const UpdateWorkoutSchema = Type.Object({
	title: Type.Optional(Type.String())
})

export const UpdateWorkoutDto = Type.Object({
	workout: UpdateWorkoutSchema
})

export const AddWorkoutExerciseDto = Type.Object({
	exerciseId: Type.Number()
})

export type AddWorkoutExerciseDto = Static<typeof AddWorkoutExerciseDto>
export type UpdateWorkoutDto = Static<typeof UpdateWorkoutDto>
