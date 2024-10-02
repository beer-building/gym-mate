import { EditWorkoutExerciseDto } from '@gym-mate/shared-types'
import { PrismaClient } from '@prisma/client'

export class WorkoutExerciseRepository {
	prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}

	async getExercise(id: number) {
		return this.prisma.workoutExercise.findUnique({
			where: { id },
			include: { exercise: { include: { bodyLoad: true } } }
		})
	}

	async getExercises() {
		return this.prisma.workoutExercise.findMany({
			include: { exercise: true }
		})
	}

	async updateExercise(id: number, dto: EditWorkoutExerciseDto) {
		return this.prisma.workoutExercise.update({
			where: { id },
			data: dto.workoutExercise,
			include: { exercise: { include: { bodyLoad: true } } }
		})
	}
}
