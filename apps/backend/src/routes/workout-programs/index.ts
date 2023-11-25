import { FastifyPluginAsync } from 'fastify'
import {
  CreateWorkoutProgramRequest,
  CreateWorkoutProgramSchema
} from '../../schemas/workout-programs'
import { WorkoutProgramService } from '../../services/workout-program.service'
import {
  EditWorkoutProgramRequest,
  EditWorkoutProgramSchema
} from '../../schemas/workout-programs/edit-workout-program'
import { workoutProgramErrors } from '../../constants'

const workoutProgramsRoutes: FastifyPluginAsync = async (server) => {
  const workoutProgramService = new WorkoutProgramService(server)

  server.post<CreateWorkoutProgramRequest>(
    '/',
    { schema: CreateWorkoutProgramSchema, onRequest: server.authenticate },
    async (request, reply) => {
      const workoutProgram = await workoutProgramService.createWorkoutProgram(
        request.body,
        request.user
      )

      reply.status(201)

      return { workoutProgram }
    }
  )

  server.post<EditWorkoutProgramRequest>(
    '/:id/edit',
    { schema: EditWorkoutProgramSchema, onRequest: server.authenticate },
    async (request, reply) => {
      const workoutProgramId = Number(request.params.id)

      const existWorkoutProgram = workoutProgramService.findWorkoutProgram(workoutProgramId)

      if (!existWorkoutProgram) throw server.httpErrors.badRequest(workoutProgramErrors.NOT_EXIST)

      const workoutProgram = await workoutProgramService.updateWorkoutProgram(
        request.body,
        workoutProgramId
      )

      return { workoutProgram }
    }
  )
}

export default workoutProgramsRoutes
