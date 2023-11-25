import { Static, Type } from '@sinclair/typebox'

export const EditWorkoutProgramDto = Type.Object({
  workoutProgram: Type.Object({
    title: Type.String(),
    description: Type.Optional(Type.String())
  })
})

export type EditWorkoutProgramDto = Static<typeof EditWorkoutProgramDto>
