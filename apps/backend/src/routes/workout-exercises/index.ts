import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { WorkoutExerciseService } from '../../services'
import { GetWorkoutExerciseSchema } from '../../schemas'

const route: FastifyPluginAsyncTypebox = async (server) => {
	const workoutExerciseService = new WorkoutExerciseService(server)

	server.addHook('onRequest', server.authenticate)

	server.get('/:id', { schema: GetWorkoutExerciseSchema }, async (request, reply) => {
		const exerciseId = request.params.id

		const workoutExercise = await workoutExerciseService.getExercise(exerciseId)

		reply.status(200).send({ workoutExercise })
	})
}

export default route
