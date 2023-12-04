import { UpdateWorkoutDto } from '@gym-mate/shared-types';
import { FastifyInstance } from 'fastify';

export class WorkoutsRepository {
	server: FastifyInstance;

	constructor(server: FastifyInstance) {
		this.server = server;
	}

	async createWorkout(workoutProgramId: number) {
		return this.server.prisma.workout.create({
			data: { workoutProgramId }
		});
	}

	async updateWorkout(id: number, dto: UpdateWorkoutDto) {
		return this.server.prisma.workout.update({
			data: { ...dto.workout },
			where: { id }
		});
	}

	async findWorkout(id: number) {
		return this.server.prisma.workout.findUnique({
			where: { id }
		});
	}

	async findWorkoutProgramWorkouts(workoutProgramId: number) {
		return this.server.prisma.workout.findMany({
			where: { workoutProgramId }
		});
	}
}
