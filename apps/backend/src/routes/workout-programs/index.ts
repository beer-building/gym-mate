import {
	CreateWorkoutProgramSchema,
	GetWorkoutProgramsSchema
} from '../../schemas/workout-programs'
import { WorkoutProgramService } from '../../services'
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

const workoutProgramsRoutes: FastifyPluginAsyncTypebox = async (server) => {
	const workoutProgramService = new WorkoutProgramService(server)

	server.addHook('onRequest', server.authenticate)

	server.get('/', { schema: GetWorkoutProgramsSchema }, async (request) => {
		const userId = request.user.id
		const workoutPrograms = await workoutProgramService.findUserWorkoutPrograms(userId)

		return { workoutPrograms }
	})

	server.post('/', { schema: CreateWorkoutProgramSchema }, async (request, reply) => {
		const userId = request.user.id

		const workoutProgram = await workoutProgramService.createWorkoutProgram(request.body, userId)

		reply.status(201).send({ workoutProgram })
	})
}

export default workoutProgramsRoutes
