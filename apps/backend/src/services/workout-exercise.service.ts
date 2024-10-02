import { FastifyInstance } from 'fastify'
import { WorkoutExerciseHistoryRepository, WorkoutExerciseRepository } from '../repositories'
import { EditWorkoutExerciseDto } from '@gym-mate/shared-types'

export class WorkoutExerciseService {
	server: FastifyInstance
	workoutExercisesRepository: WorkoutExerciseRepository
	workoutExerciseHistoryRepository: WorkoutExerciseHistoryRepository

	constructor(server: FastifyInstance) {
		this.server = server
		this.workoutExercisesRepository = new WorkoutExerciseRepository(server.prisma)
		this.workoutExerciseHistoryRepository = new WorkoutExerciseHistoryRepository(server.prisma)
	}

	async getExercise(exerciseId: number) {
		const exercise = await this.workoutExercisesRepository.getExercise(exerciseId)

		if (!exercise) throw this.server.httpErrors.badRequest('Exercise with this id does not exist')

		return exercise
	}

	async updateExercise(exerciseId: number, dto: EditWorkoutExerciseDto) {
		await this.getExercise(exerciseId)

		const exercise = await this.workoutExercisesRepository.updateExercise(exerciseId, dto)

		if (
			dto.workoutExercise.reps !== exercise.reps ||
			dto.workoutExercise.sets !== exercise.sets ||
			dto.workoutExercise.weight !== exercise.weight
		) {
			this.workoutExerciseHistoryRepository.createHistory(dto, exercise.id)
		}

		return exercise
	}

	async getExercises() {
		const exercises = await this.workoutExercisesRepository.getExercises()

		return exercises
	}
}
