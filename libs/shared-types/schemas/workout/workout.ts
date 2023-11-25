import { Type } from '@sinclair/typebox'

export const workout = Type.Object({
  id: Type.Number(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
  workoutProgramId: Type.Number()
})
