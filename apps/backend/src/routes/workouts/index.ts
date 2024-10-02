import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { WorkoutsService } from '../../services'
import { GetWorkoutSchema, UpdateWorkoutSchema, AddExerciseToWorkoutSchema } from '../../schemas'

const workoutsRoute: FastifyPluginAsyncTypebox = async (server) => {
	const workoutsService = new WorkoutsService(server)

	server.addHook('onRequest', server.authenticate)

	server.get('/:id', { schema: GetWorkoutSchema }, async (request, reply) => {
		const workoutId = request.params.id

		const workout = await workoutsService.getFullWorkout(workoutId)

		reply.status(200).send({ workout })
	})

	server.put('/:id', { schema: UpdateWorkoutSchema }, async (request, reply) => {
		const workoutId = request.params.id
		const userId = request.user.id
		const body = request.body

		const workout = await workoutsService.updateWorkout(workoutId, body, userId)

		reply.status(200).send({ workout })
	})

	server.put(
		'/:id/add_exercise',
		{ schema: AddExerciseToWorkoutSchema },
		async (request, reply) => {
			const workoutId = request.params.id
			const body = request.body

			const workout = await workoutsService.addExerciseToWorkout(workoutId, body.exerciseId)

			reply.status(200).send({ workout })
		}
	)
}

export default workoutsRoute
