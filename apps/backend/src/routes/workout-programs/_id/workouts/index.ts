import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { GetWorkoutsSchema } from '../../../../schemas';
import { WorkoutProgramService, WorkoutsService } from '../../../../services';
import { CreateWorkoutSchema } from '../../../../schemas/workouts/create-workout-schema';

const workoutsRoute: FastifyPluginAsyncTypebox = async (server) => {
	const workoutsService = new WorkoutsService(server);
	const workoutProgramService = new WorkoutProgramService(server);

	server.addHook('onRequest', server.authenticate);

	server.get('/', { schema: GetWorkoutsSchema }, async (request) => {
		const workoutProgramId = request.params.id;
		const userId = request.user.id;

		const workouts = await workoutsService.findWorkoutProgramWorkouts(userId, workoutProgramId);

		return { workouts };
	});

	server.post('/', { schema: CreateWorkoutSchema }, async (request) => {
		const workoutProgramId = request.params.id;
		const userId = request.user.id;

		await workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId);

		const newWorkout = await workoutsService.createWorkout(workoutProgramId);

		return { workout: newWorkout };
	});
};

export default workoutsRoute;
