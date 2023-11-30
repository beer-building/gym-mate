import {
	CreateWorkoutProgramSchema,
	EditWorkoutProgramSchema,
	GetWorkoutProgramsSchema,
	GetWorkoutProgramSchema
} from '../../schemas/workout-programs';
import { WorkoutProgramService } from '../../services/workout-program.service';
import { workoutProgramErrors } from '../../constants';
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

const workoutProgramsRoutes: FastifyPluginAsyncTypebox = async (server) => {
	const workoutProgramService = new WorkoutProgramService(server);

	server.addHook('onRequest', server.authenticate);

	server.get('/', { schema: GetWorkoutProgramsSchema }, async (request) => {
		const userId = request.user.id;
		const workoutPrograms = await workoutProgramService.findUserWorkoutPrograms(userId);

		return { workoutPrograms };
	});

	server.get('/:id', { schema: GetWorkoutProgramSchema }, async (request, reply) => {
		const userId = request.user.id;
		const workoutProgramId = request.params.id;

		const workoutProgram = await workoutProgramService.findUserWorkoutProgram(
			userId,
			workoutProgramId
		);

		if (!workoutProgram) throw server.httpErrors.badRequest(workoutProgramErrors.NOT_EXIST);

		reply.send({ workoutProgram });
	});

	server.post('/', { schema: CreateWorkoutProgramSchema }, async (request, reply) => {
		const userId = request.user.id;

		const workoutProgram = await workoutProgramService.createWorkoutProgram(request.body, userId);

		reply.status(201).send({ workoutProgram });
	});

	server.post('/:id/edit', { schema: EditWorkoutProgramSchema }, async (request, reply) => {
		const workoutProgramId = request.params.id;

		const existWorkoutProgram = workoutProgramService.findWorkoutProgram(workoutProgramId);

		if (!existWorkoutProgram) throw server.httpErrors.badRequest(workoutProgramErrors.NOT_EXIST);

		const workoutProgram = await workoutProgramService.updateWorkoutProgram(
			request.body,
			workoutProgramId
		);

		return { workoutProgram };
	});
};

export default workoutProgramsRoutes;
