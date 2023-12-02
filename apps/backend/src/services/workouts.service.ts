import { FastifyInstance } from 'fastify';
import { WorkoutsRepository } from '../repositories';
import { WorkoutProgramService } from './workout-program.service';

export class WorkoutsService {
	server: FastifyInstance;

	workoutRepository: WorkoutsRepository;
	workoutProgramService: WorkoutProgramService;

	constructor(server: FastifyInstance) {
		this.server = server;
		this.workoutRepository = new WorkoutsRepository(server);
		this.workoutProgramService = new WorkoutProgramService(server);
	}

	async findWorkoutProgramWorkouts(userId: number, workoutProgramId: number) {
		return this.workoutRepository.findWorkoutProgramWorkouts(workoutProgramId);
	}

	async createWorkout(workoutProgramId: number) {
		return this.workoutRepository.createWorkout(workoutProgramId);
	}

	findWorkouts() {}
}
