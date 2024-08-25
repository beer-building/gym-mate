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
}
