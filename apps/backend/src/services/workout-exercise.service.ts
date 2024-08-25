import { FastifyInstance } from 'fastify'
import { WorkoutExerciseRepository } from '../repositories'

export class WorkoutExerciseService {
	server: FastifyInstance
	workoutExercisesRepository: WorkoutExerciseRepository

	constructor(server: FastifyInstance) {
		this.server = server
		this.workoutExercisesRepository = new WorkoutExerciseRepository(server)
	}

	async getExercise(exerciseId: number) {
		const exercise = await this.workoutExercisesRepository.getExercise(exerciseId)

		if (!exercise) throw this.server.httpErrors.badRequest('Exercise with this id does not exist')

		return exercise
	}

	async getExercises() {
		const exercises = await this.workoutExercisesRepository.getExercises()

		return exercises
	}
}
