import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { WorkoutsService } from '../../services'
import { GetWorkoutSchema } from '../../schemas'

const workoutsRoute: FastifyPluginAsyncTypebox = async (server) => {
	const workoutsService = new WorkoutsService(server)

	server.addHook('onRequest', server.authenticate)

	server.get('/:id', { schema: GetWorkoutSchema }, async (request, reply) => {
		const workoutId = request.params.id

		const workout = await workoutsService.getFullWorkout(workoutId)

		reply.status(200).send({ workout })
	})
}

export default workoutsRoute
