import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { GetWorkoutsSchema } from '../../../../schemas';
import { WorkoutsService } from '../../../../services';

const workoutsRoute: FastifyPluginAsyncTypebox = async (server) => {
	const workoutsService = new WorkoutsService(server);

	server.addHook('onRequest', server.authenticate);

	server.get('/', { schema: GetWorkoutsSchema }, async (request) => {
		const workoutProgramId = request.params.id;
		const userId = request.user.id;

		const workouts = await workoutsService.findWorkoutProgramWorkouts(userId, workoutProgramId);

		return { workouts };
	});
};

export default workoutsRoute;
