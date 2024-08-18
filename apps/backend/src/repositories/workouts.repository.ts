import { CreateWorkoutDto, UpdateWorkoutDto } from '@gym-mate/shared-types'
import { FastifyInstance } from 'fastify'

export class WorkoutsRepository {
	server: FastifyInstance

	constructor(server: FastifyInstance) {
		this.server = server
	}

	async createWorkout(workoutProgramId: number, dto: CreateWorkoutDto) {
		return this.server.prisma.workout.create({
			data: { workoutProgramId, ...dto.workout }
		})
	}

	async updateWorkout(id: number, dto: UpdateWorkoutDto) {
		return this.server.prisma.workout.update({
			data: { ...dto.workout },
			where: { id }
		})
	}

	async findWorkout(id: number) {
		return this.server.prisma.workout.findUnique({
			where: { id }
		})
	}

	async getFullWorkout(id: number) {
		return this.server.prisma.workout.findUnique({
			where: { id },
			include: { exercises: { include: { exercise: { include: { bodyLoad: true } } } } }
		})
	}

	async findWorkoutProgramWorkouts(workoutProgramId: number) {
		return this.server.prisma.workout.findMany({
			where: { workoutProgramId }
		})
	}

	async deleteWorkout(workoutId: number) {
		return this.server.prisma.workout.delete({
			where: { id: workoutId }
		})
	}
}
