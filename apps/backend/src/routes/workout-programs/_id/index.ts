import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { WorkoutProgramService } from '../../../services';
import {
	EditWorkoutProgramSchema,
	GetWorkoutProgramSchema
} from '../../../schemas/workout-programs';

const workoutProgramRoutes: FastifyPluginAsyncTypebox = async (server) => {
	const workoutProgramService = new WorkoutProgramService(server);

	server.addHook('onRequest', server.authenticate);

	server.get('/', { schema: GetWorkoutProgramSchema }, async (request, reply) => {
		const userId = request.user.id;
		const workoutProgramId = request.params.id;

		const workoutProgram = await workoutProgramService.findUserWorkoutProgram(
			userId,
			workoutProgramId
		);

		reply.send({ workoutProgram });
	});

	server.post('/edit', { schema: EditWorkoutProgramSchema }, async (request, reply) => {
		const userId = request.user.id;
		const workoutProgramId = request.params.id;

		await workoutProgramService.findWorkoutProgram(userId, workoutProgramId);

		const workoutProgram = await workoutProgramService.updateWorkoutProgram(
			request.body,
			workoutProgramId
		);

		return { workoutProgram };
	});
};

export default workoutProgramRoutes;
