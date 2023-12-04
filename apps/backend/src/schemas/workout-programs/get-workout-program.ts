import { FastifySchema } from 'fastify'
import { RouteGenericInterface } from 'fastify/types/route'

import { ErrorReply, GetWorkoutProgramReply, WorkoutProgramReply } from '@gym-mate/shared-types'
import { IdParams } from '../id-params'

export interface GetWorkoutProgramRequest extends RouteGenericInterface {
  Reply: WorkoutProgramReply
  Params: { id: number }
}

export const GetWorkoutProgramSchema: FastifySchema = {
  description: 'Get workout programs list',
  tags: ['Authentication'],
  summary: 'Workout Program',
  params: IdParams,
  response: {
    200: GetWorkoutProgramReply,
    400: ErrorReply
  }
}
