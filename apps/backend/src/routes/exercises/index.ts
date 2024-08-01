import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { ExercisesService } from '../../services'
import { GetExerciseSchema } from '../../schemas'

const exercisesRoute: FastifyPluginAsyncTypebox = async (server) => {
	const exercisesService = new ExercisesService(server)

	server.addHook('onRequest', server.authenticate)

	server.get('/:id', { schema: GetExerciseSchema }, async (request, reply) => {
		const exerciseId = request.params.id

		const exercise = await exercisesService.getExercise(exerciseId)

		reply.status(200).send({ exercise })
	})
}

export default exercisesRoute
