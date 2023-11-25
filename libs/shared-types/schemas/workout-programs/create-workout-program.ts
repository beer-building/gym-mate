import { Static, Type } from '@sinclair/typebox'

export const CreateWorkoutProgramDto = Type.Object({
  workoutProgram: Type.Object({
    title: Type.String(),
    description: Type.Optional(Type.String())
  })
})

export type CreateWorkoutProgramDto = Static<typeof CreateWorkoutProgramDto>
