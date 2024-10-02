import { CreateWorkoutDto, UpdateWorkoutDto } from '@gym-mate/shared-types'
import { PrismaClient } from '@prisma/client'

export class WorkoutsRepository {
	prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}

	async createWorkout(workoutProgramId: number, dto: CreateWorkoutDto) {
		return this.prisma.workout.create({
			data: { workoutProgramId, ...dto.workout }
		})
	}

	async addExerciseToWorkout(id: number, dto: number) {
		return this.prisma.workout.update({
			where: { id },
			data: {
				workoutExercises: {
					createMany: {
						data: {
							exerciseId: dto
						}
					}
				}
			}
		})
	}

	async updateWorkout(id: number, dto: UpdateWorkoutDto) {
		return this.prisma.workout.update({
			data: { ...dto.workout },
			where: { id }
		})
	}

	async findWorkout(id: number) {
		return this.prisma.workout.findUnique({
			where: { id }
		})
	}

	async getFullWorkout(id: number) {
		return this.prisma.workout.findUnique({
			where: { id },
			include: { workoutExercises: { include: { exercise: { include: { bodyLoad: true } } } } }
		})
	}

	async findWorkoutProgramWorkouts(workoutProgramId: number) {
		return this.prisma.workout.findMany({
			where: { workoutProgramId }
		})
	}

	async deleteWorkout(workoutId: number) {
		return this.prisma.workout.delete({
			where: { id: workoutId }
		})
	}
}
