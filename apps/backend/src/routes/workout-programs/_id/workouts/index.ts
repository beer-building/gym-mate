import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import {
	DeleteWorkoutSchema,
	GetWorkoutsSchema,
	UpdateWorkoutSchema,
	CreateWorkoutSchema
} from '../../../../schemas'
import { WorkoutsService } from '../../../../services'

const workoutsRoute: FastifyPluginAsyncTypebox = async (server) => {
	const workoutsService = new WorkoutsService(server)

	server.addHook('onRequest', server.authenticate)

	server.get('/', { schema: GetWorkoutsSchema }, async (request) => {
		const workoutProgramId = request.params.id

		const workouts = await workoutsService.findWorkoutProgramWorkouts(workoutProgramId)

		return { workouts }
	})

	server.post('/', { schema: CreateWorkoutSchema }, async (request) => {
		const workoutProgramId = request.params.id
		const userId = request.user.id

		const newWorkout = await workoutsService.createWorkout(userId, workoutProgramId)

		return { workout: newWorkout }
	})

	server.put('/:workoutId', { schema: UpdateWorkoutSchema }, async (request, reply) => {
		const workoutProgramId = request.params.id
		const workoutId = request.params.workoutId
		const userId = request.user.id
		const dto = request.body

		const workout = await workoutsService.updateWorkout(workoutId, dto, userId, workoutProgramId)

		reply.status(204).send({ workout })
	})

	server.delete('/:workoutId', { schema: DeleteWorkoutSchema }, async (request) => {
		const workoutProgramId = request.params.id
		const workoutId = request.params.workoutId
		const userId = request.user.id

		await workoutsService.deleteWorkout(workoutId, userId, workoutProgramId)

		return { ok: true }
	})
}

export default workoutsRoute
