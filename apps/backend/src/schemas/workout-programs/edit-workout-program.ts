import { FastifySchema } from 'fastify'
import { RouteGenericInterface } from 'fastify/types/route'

import { EditWorkoutProgramDto, ErrorReply, WorkoutProgramReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export interface EditWorkoutProgramRequest extends RouteGenericInterface {
  Body: EditWorkoutProgramDto
  Reply: WorkoutProgramReply
  Params: { id: number }
}

export const EditWorkoutProgramSchema: FastifySchema = {
  body: EditWorkoutProgramDto,
  description: 'Edit workout program',
  tags: ['Authentication'],
  summary: 'Workout program',
  params: IdParams,
  response: {
    201: WorkoutProgramReply,
    400: ErrorReply
  }
}
