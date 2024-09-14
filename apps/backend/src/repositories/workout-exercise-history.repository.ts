import { EditWorkoutExerciseDto } from '@gym-mate/shared-types'
import { Exercise } from '@prisma/client'
import { FastifyInstance } from 'fastify'

export class WorkoutExerciseHistoryRepository {
	server: FastifyInstance

	constructor(server: FastifyInstance) {
		this.server = server
	}

	async createHistory(
		{ workoutExercise }: EditWorkoutExerciseDto,
		workoutExerciseId: Exercise['id']
	) {
		return this.server.prisma.workoutExerciseHistory.create({
			data: {
				workoutExerciseId,
				reps: workoutExercise.reps,
				sets: workoutExercise.sets,
				weight: workoutExercise.weight
			}
		})
	}
}
