import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { DeleteWorkoutSchema, GetWorkoutsSchema, UpdateWorkoutSchema } from '../../../../schemas'
import { WorkoutProgramService, WorkoutsService } from '../../../../services'
import { CreateWorkoutSchema } from '../../../../schemas'

const workoutsRoute: FastifyPluginAsyncTypebox = async (server) => {
	const workoutsService = new WorkoutsService(server)
	const workoutProgramService = new WorkoutProgramService(server)

	server.addHook('onRequest', server.authenticate)

	server.get('/', { schema: GetWorkoutsSchema }, async (request) => {
		const workoutProgramId = request.params.id

		const workouts = await workoutsService.findWorkoutProgramWorkouts(workoutProgramId)

		return { workouts }
	})

	server.post('/', { schema: CreateWorkoutSchema }, async (request) => {
		const workoutProgramId = request.params.id
		const userId = request.user.id

		await workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId)

		const newWorkout = await workoutsService.createWorkout(workoutProgramId)

		return { workout: newWorkout }
	})

	server.put('/:workoutId', { schema: UpdateWorkoutSchema }, async (request, reply) => {
		const workoutProgramId = request.params.id
		const workoutId = request.params.workoutId
		const userId = request.user.id
		const body = request.body

		await workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId)

		const workout = await workoutsService.updateWorkout(workoutId, body)

		reply.status(204).send({ workout })
	})

	server.delete('/:workoutId', { schema: DeleteWorkoutSchema }, async (request) => {
		const workoutProgramId = request.params.id
		const workoutId = request.params.workoutId
		const userId = request.user.id

		await workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId)

		await workoutsService.deleteWorkout(workoutId)

		return { ok: true }
	})
}

export default workoutsRoute
