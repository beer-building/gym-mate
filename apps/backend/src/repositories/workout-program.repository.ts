import { CreateWorkoutProgramDto, EditWorkoutProgramDto } from '@gym-mate/shared-types'
import { User } from '@prisma/client'
import { FastifyInstance } from 'fastify'

export class WorkoutProgramRepository {
  server: FastifyInstance

  constructor(server: FastifyInstance) {
    this.server = server
  }

  async createWorkoutProgram(dto: CreateWorkoutProgramDto, user: User) {
    return this.server.prisma.workoutProgram.create({
      data: { ...dto.workoutProgram, userId: user.id }
    })
  }

  async findWorkoutProgram(id: number) {
    return this.server.prisma.workoutProgram.findUnique({ where: { id } })
  }

  async updateWorkoutProgram(dto: EditWorkoutProgramDto, workoutProgramId: number) {
    return this.server.prisma.workoutProgram.update({
      where: { id: workoutProgramId },
      data: dto.workoutProgram
    })
  }
}
