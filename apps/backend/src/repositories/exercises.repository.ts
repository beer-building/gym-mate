import { Equipment, PrismaClient } from '@prisma/client'

export class ExercisesRepository {
	prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}

	async getExercise(id: number) {
		return this.prisma.exercise.findUnique({
			where: { id },
			include: { bodyLoad: true }
		})
	}

	async getExercises(query: { equipment?: Equipment }) {
		return this.prisma.exercise.findMany({
			include: { bodyLoad: true },
			where: { equipment: query.equipment }
		})
	}
}
