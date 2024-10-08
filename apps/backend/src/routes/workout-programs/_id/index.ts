import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { WorkoutProgramService } from '../../../services'
import {
	DeleteProgramSchema,
	EditWorkoutProgramSchema,
	GetWorkoutProgramSchema
} from '../../../schemas/workout-programs'

const workoutProgramRoutes: FastifyPluginAsyncTypebox = async (server) => {
	const workoutProgramService = new WorkoutProgramService(server)

	server.addHook('onRequest', server.authenticate)

	server.get('/', { schema: GetWorkoutProgramSchema }, async (request, reply) => {
		const userId = request.user.id
		const workoutProgramId = request.params.id

		const workoutProgram = await workoutProgramService.findUserWorkoutProgram(
			userId,
			workoutProgramId
		)

		reply.send({ workoutProgram })
	})

	server.put('/', { schema: EditWorkoutProgramSchema }, async (request) => {
		const userId = request.user.id
		const workoutProgramId = request.params.id

		const updatedWorkoutProgram = await workoutProgramService.updateUserWorkoutProgram(
			request.body,
			workoutProgramId,
			userId
		)

		return { workoutProgram: updatedWorkoutProgram }
	})

	server.delete('/', { schema: DeleteProgramSchema }, async (request) => {
		const userId = request.user.id
		const workoutProgramId = request.params.id

		await workoutProgramService.deleteUserWorkoutProgram(userId, workoutProgramId)

		return { success: true }
	})
}

export default workoutProgramRoutes
