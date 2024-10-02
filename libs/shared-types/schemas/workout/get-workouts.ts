import { Type } from '@sinclair/typebox'
import type { Static } from '@sinclair/typebox'

import { WorkoutSchema } from './workout'

export const WorkoutsReply = Type.Object({
	workouts: Type.Array(WorkoutSchema)
})

export type WorkoutsReply = Static<typeof WorkoutsReply>
