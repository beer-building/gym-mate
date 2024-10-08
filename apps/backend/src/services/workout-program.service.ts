import { FastifyInstance } from 'fastify'

import { CreateWorkoutProgramDto, EditWorkoutProgramDto } from '@gym-mate/shared-types'
import { WorkoutProgramRepository } from '../repositories'
import { workoutProgramErrors } from '../constants'

export class WorkoutProgramService {
	server: FastifyInstance

	workoutProgramRepository: WorkoutProgramRepository

	constructor(server: FastifyInstance) {
		this.server = server
		this.workoutProgramRepository = new WorkoutProgramRepository(server.prisma)
	}

	createWorkoutProgram(dto: CreateWorkoutProgramDto, userId: number) {
		return this.workoutProgramRepository.createWorkoutProgram(dto, userId)
	}

	async findWorkoutProgram(workoutProgramId: number) {
		const existWorkoutProgram =
			await this.workoutProgramRepository.findWorkoutProgram(workoutProgramId)

		if (!existWorkoutProgram)
			throw this.server.httpErrors.badRequest(workoutProgramErrors.NOT_EXIST)

		return existWorkoutProgram
	}

	updateWorkoutProgram(dto: EditWorkoutProgramDto, workoutProgramId: number) {
		return this.workoutProgramRepository.updateWorkoutProgram(dto, workoutProgramId)
	}

	async updateUserWorkoutProgram(
		dto: EditWorkoutProgramDto,
		workoutProgramId: number,
		userId: number
	) {
		await this.findUserWorkoutProgram(userId, workoutProgramId)

		return this.workoutProgramRepository.updateWorkoutProgram(dto, workoutProgramId)
	}

	findUserWorkoutPrograms(userId: number) {
		return this.workoutProgramRepository.findUserWorkoutPrograms(userId)
	}

	async findUserWorkoutProgram(userId: number, workoutProgramId: number) {
		const workoutProgram = await this.workoutProgramRepository.findUserWorkoutProgram(
			userId,
			workoutProgramId
		)

		if (!workoutProgram) throw this.server.httpErrors.badRequest(workoutProgramErrors.NOT_EXIST)

		return workoutProgram
	}

	deleteUserWorkoutProgram(userId: number, workoutProgramId: number) {
		return this.workoutProgramRepository.deleteWorkoutProgram(userId, workoutProgramId)
	}
}
