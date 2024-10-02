import { EditWorkoutExerciseDto } from '@gym-mate/shared-types'
import { Exercise, PrismaClient } from '@prisma/client'

export class WorkoutExerciseHistoryRepository {
	prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}

	async createHistory(
		{ workoutExercise }: EditWorkoutExerciseDto,
		workoutExerciseId: Exercise['id']
	) {
		return this.prisma.workoutExerciseHistory.create({
			data: {
				workoutExerciseId,
				reps: workoutExercise.reps,
				sets: workoutExercise.sets,
				weight: workoutExercise.weight
			}
		})
	}
}
