import { FastifyInstance } from 'fastify'
import { WorkoutsRepository } from '../repositories'
import { WorkoutProgramService } from './workout-program.service'
import { UpdateWorkoutDto } from '@gym-mate/shared-types'

export class WorkoutsService {
	server: FastifyInstance

	workoutRepository: WorkoutsRepository
	workoutProgramService: WorkoutProgramService

	constructor(server: FastifyInstance) {
		this.server = server
		this.workoutRepository = new WorkoutsRepository(server)
		this.workoutProgramService = new WorkoutProgramService(server)
	}

	async findWorkoutProgramWorkouts(id: number) {
		return this.workoutRepository.findWorkoutProgramWorkouts(id)
	}

	async findWorkout(id: number) {
		return this.workoutRepository.findWorkout(id)
	}

	async updateWorkout(
		workoutId: number,
		dto: UpdateWorkoutDto,
		userId: number,
		workoutProgramId: number
	) {
		await this.workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId)

		return this.workoutRepository.updateWorkout(workoutId, dto)
	}

	async createWorkout(userId: number, workoutProgramId: number) {
		await this.workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId)

		return this.workoutRepository.createWorkout(workoutProgramId)
	}

	async deleteWorkout(workoutId: number, userId: number, workoutProgramId: number) {
		await this.workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId)

		return this.workoutRepository.deleteWorkout(workoutId)
	}

	findWorkouts() {}
}
