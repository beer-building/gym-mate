import { FastifyInstance } from 'fastify'

import { CreateWorkoutProgramDto, EditWorkoutProgramDto } from '@gym-mate/shared-types'
import { WorkoutProgramRepository } from '../repositories/workout-program.repository'

export class WorkoutProgramService {
  server: FastifyInstance

  workoutProgramRepository: WorkoutProgramRepository

  constructor(server: FastifyInstance) {
    this.server = server
    this.workoutProgramRepository = new WorkoutProgramRepository(server)
  }

  async createWorkoutProgram(dto: CreateWorkoutProgramDto, userId: number) {
    return this.workoutProgramRepository.createWorkoutProgram(dto, userId)
  }

  async findWorkoutProgram(workoutProgramId: number) {
    return this.workoutProgramRepository.findWorkoutProgram(workoutProgramId)
  }

  async updateWorkoutProgram(dto: EditWorkoutProgramDto, workoutProgramId: number) {
    return this.workoutProgramRepository.updateWorkoutProgram(dto, workoutProgramId)
  }

  async findUserWorkoutPrograms(userId: number) {
    return this.workoutProgramRepository.findUserWorkoutPrograms(userId)
  }
}
