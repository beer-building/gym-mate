import { FastifyInstance } from 'fastify';
import { WorkoutsRepository } from '../repositories';

export class WorkoutsService {
	server: FastifyInstance;

	workoutProgramRepository: WorkoutsRepository;

	constructor(server: FastifyInstance) {
		this.server = server;
		this.workoutProgramRepository = new WorkoutsRepository(server);
	}
}
