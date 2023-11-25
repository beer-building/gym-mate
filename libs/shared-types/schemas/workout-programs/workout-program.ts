import { Type } from '@sinclair/typebox'
import { WorkoutProgram } from '@prisma/client'

type WorkoutProgramUnit = Omit<WorkoutProgram, 'userId'>

export type WorkoutProgramReply = {
  workoutProgram: WorkoutProgramUnit
}

export type WorkoutProgramsReply = {
  workoutPrograms: Array<WorkoutProgram>
}

const workoutProgram = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  userId: Type.Number(),
  description: Type.Optional(Type.String()),
  createdAt: Type.Optional(Type.String())
})

export const WorkoutProgramReply = Type.Object({
  workoutProgram
})

export const WorkoutProgramsReply = Type.Object({
  workoutPrograms: Type.Array(workoutProgram)
})
