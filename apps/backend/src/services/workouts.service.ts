import { FastifyInstance } from 'fastify';
import { WorkoutsRepository } from '../repositories';
import { WorkoutProgramService } from './workout-program.service';
import { UpdateWorkoutDto } from '@gym-mate/shared-types';

export class WorkoutsService {
	server: FastifyInstance;

	workoutRepository: WorkoutsRepository;
	workoutProgramService: WorkoutProgramService;

	constructor(server: FastifyInstance) {
		this.server = server;
		this.workoutRepository = new WorkoutsRepository(server);
		this.workoutProgramService = new WorkoutProgramService(server);
	}

	async findWorkoutProgramWorkouts(id: number) {
		return this.workoutRepository.findWorkoutProgramWorkouts(id);
	}

	async findWorkout(id: number) {
		return this.workoutRepository.findWorkout(id);
	}

	async updateWorkout(id: number, dto: UpdateWorkoutDto) {
		return this.workoutRepository.updateWorkout(id, dto);
	}

	async createWorkout(workoutProgramId: number) {
		return this.workoutRepository.createWorkout(workoutProgramId);
	}

	async deleteWorkout(workoutId: number) {
		return this.workoutRepository.deleteWorkout(workoutId);
	}

	findWorkouts() {}
}
