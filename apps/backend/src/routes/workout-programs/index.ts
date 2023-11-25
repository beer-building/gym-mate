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
import {
  GetWorkoutProgramsRequest,
  GetWorkoutProgramsSchema
} from '../../schemas/workout-programs/get-workout-programs'

const workoutProgramsRoutes: FastifyPluginAsync = async (server) => {
  const workoutProgramService = new WorkoutProgramService(server)

  server.addHook('onRequest', server.authenticate)

  server.get<GetWorkoutProgramsRequest>(
    '/',
    { schema: GetWorkoutProgramsSchema },
    async (request) => {
      const userId = request.user.id
      const workoutPrograms = await workoutProgramService.findUserWorkoutPrograms(userId)

      return { workoutPrograms }
    }
  )

  server.post<CreateWorkoutProgramRequest>(
    '/',
    { schema: CreateWorkoutProgramSchema },
    async (request, reply) => {
      const userId = request.user.id

      const workoutProgram = await workoutProgramService.createWorkoutProgram(request.body, userId)

      reply.status(201)

      return { workoutProgram }
    }
  )

  server.post<EditWorkoutProgramRequest>(
    '/:id/edit',
    { schema: EditWorkoutProgramSchema },
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
