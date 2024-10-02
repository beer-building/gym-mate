import { FastifyInstance } from 'fastify'
import { ExercisesRepository } from '../repositories'

export class ExercisesService {
	server: FastifyInstance
	exercisesRepository: ExercisesRepository

	constructor(server: FastifyInstance) {
		this.server = server
		this.exercisesRepository = new ExercisesRepository(server.prisma)
	}

	async getExercise(exerciseId: number) {
		const exercise = await this.exercisesRepository.getExercise(exerciseId)

		if (!exercise) throw this.server.httpErrors.badRequest('Exercise with this id does not exist')

		return exercise
	}

	async getExercises() {
		const exercises = await this.exercisesRepository.getExercises()

		return exercises
	}
}
