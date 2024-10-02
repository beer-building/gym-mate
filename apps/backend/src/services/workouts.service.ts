import { FastifyInstance } from 'fastify'
import { WorkoutsRepository } from '../repositories'
import { WorkoutProgramService } from './workout-program.service'
import { CreateWorkoutDto, UpdateWorkoutDto } from '@gym-mate/shared-types'
import { workoutErrors } from '../constants'

export class WorkoutsService {
	server: FastifyInstance

	workoutRepository: WorkoutsRepository
	workoutProgramService: WorkoutProgramService

	constructor(server: FastifyInstance) {
		this.server = server
		this.workoutRepository = new WorkoutsRepository(server.prisma)
		this.workoutProgramService = new WorkoutProgramService(server)
	}

	async findWorkoutProgramWorkouts(id: number) {
		return this.workoutRepository.findWorkoutProgramWorkouts(id)
	}

	async findWorkout(id: number) {
		const workout = await this.workoutRepository.findWorkout(id)
		if (!workout || !workout.workoutProgramId)
			throw this.server.httpErrors.badRequest(workoutErrors.NOT_EXIST)

		return workout
	}

	async getFullWorkout(id: number) {
		const workout = await this.workoutRepository.getFullWorkout(id)

		if (!workout) throw this.server.httpErrors.badRequest(workoutErrors.NOT_EXIST)

		return workout
	}

	async updateWorkout(workoutId: number, dto: UpdateWorkoutDto, userId: number) {
		const workout = await this.workoutRepository.findWorkout(workoutId)

		if (!workout || !workout.workoutProgramId)
			throw this.server.httpErrors.badRequest(workoutErrors.NOT_EXIST)

		await this.workoutProgramService.findUserWorkoutProgram(userId, workout?.workoutProgramId)

		return this.workoutRepository.updateWorkout(workoutId, dto)
	}

	async addExerciseToWorkout(workoutId: number, dto: number) {
		const workout = await this.getFullWorkout(workoutId)

		if (workout.workoutExercises.find(({ exercise }) => exercise.id === dto)) {
			throw this.server.httpErrors.conflict(workoutErrors.ALREADY_ADDED)
		}

		return this.workoutRepository.addExerciseToWorkout(workoutId, dto)
	}

	async createWorkout(userId: number, workoutProgramId: number, dto: CreateWorkoutDto) {
		await this.workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId)

		return this.workoutRepository.createWorkout(workoutProgramId, dto)
	}

	async deleteWorkout(workoutId: number, userId: number, workoutProgramId: number) {
		await this.workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId)

		return this.workoutRepository.deleteWorkout(workoutId)
	}

	findWorkouts() {}
}
