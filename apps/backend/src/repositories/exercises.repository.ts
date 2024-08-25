import { FastifyInstance } from 'fastify'

export class ExercisesRepository {
	server: FastifyInstance

	constructor(server: FastifyInstance) {
		this.server = server
	}

	async getExercise(id: number) {
		return this.server.prisma.exercise.findUnique({
			where: { id },
			include: { bodyLoad: true }
		})
	}

	async getExercises() {
		return this.server.prisma.exercise.findMany({
			include: { bodyLoad: true }
		})
	}
}
