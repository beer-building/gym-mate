import { Type } from '@sinclair/typebox'
import { WorkoutProgram } from '@prisma/client'

export type WorkoutProgramReply = {
  workoutProgram: Omit<WorkoutProgram, 'userId'>
}

export const WorkoutProgramReply = Type.Object({
  workoutProgram: Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    createdAt: Type.Optional(Type.String())
  })
})
