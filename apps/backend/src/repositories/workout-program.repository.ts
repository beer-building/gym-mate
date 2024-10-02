import { CreateWorkoutProgramDto, EditWorkoutProgramDto } from '@gym-mate/shared-types'
import { PrismaClient } from '@prisma/client'

export class WorkoutProgramRepository {
	prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}

	async createWorkoutProgram(dto: CreateWorkoutProgramDto, userId: number) {
		return this.prisma.workoutProgram.create({
			data: { ...dto.workoutProgram, userId }
		})
	}

	async findWorkoutProgram(id: number) {
		return this.prisma.workoutProgram.findUnique({ where: { id } })
	}

	async updateWorkoutProgram(dto: EditWorkoutProgramDto, workoutProgramId: number) {
		return this.prisma.workoutProgram.update({
			where: { id: workoutProgramId },
			data: dto.workoutProgram
		})
	}

	async findUserWorkoutPrograms(userId: number) {
		return this.prisma.workoutProgram.findMany({
			where: { userId }
		})
	}

	async findUserWorkoutProgram(userId: number, workoutProgramId: number) {
		return this.prisma.workoutProgram.findUnique({
			where: { userId: userId, id: workoutProgramId },
			include: { workouts: true }
		})
	}

	async deleteWorkoutProgram(userId: number, workoutProgramId: number) {
		return this.prisma.workoutProgram.delete({
			where: { userId: userId, id: workoutProgramId }
		})
	}
}
