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

	// async findWorkoutProgram(id: number) {
	//   return this.server.prisma.workoutProgram.findUnique({ where: { id } })
	// }

	// async updateWorkoutProgram(dto: EditWorkoutProgramDto, workoutProgramId: number) {
	//   return this.server.prisma.workoutProgram.update({
	//     where: { id: workoutProgramId },
	//     data: dto.workoutProgram
	//   })
	// }

	// async findUserWorkoutPrograms(userId: number) {
	//   return this.server.prisma.workoutProgram.findMany({
	//     where: { userId }
	//   })
	// }

	async findWorkoutProgramWorkouts(workoutProgramId: number) {
		return this.server.prisma.workout.findMany({
			where: { workoutProgramId }
		});
	}
}
