import { EditWorkoutExerciseDto } from '@gym-mate/shared-types'
import { FastifyInstance } from 'fastify'

export class WorkoutExerciseRepository {
	server: FastifyInstance

	constructor(server: FastifyInstance) {
		this.server = server
	}

	async getExercise(id: number) {
		return this.server.prisma.workoutExercise.findUnique({
			where: { id },
			include: { exercise: { include: { bodyLoad: true } } }
		})
	}

	async getExercises() {
		return this.server.prisma.workoutExercise.findMany({
			include: { exercise: true }
		})
	}

	async updateExercise(id: number, dto: EditWorkoutExerciseDto) {
		return this.server.prisma.workoutExercise.update({
			where: { id },
			data: dto.workoutExercise,
			include: { exercise: { include: { bodyLoad: true } } }
		})
	}
}
