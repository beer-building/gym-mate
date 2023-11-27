import { FastifyInstance } from 'fastify'
import { User } from '@prisma/client'
import { CreateUserDto, UpdateUserDto } from '@gym-mate/shared-types'

export class UsersRepository {
  server: FastifyInstance

  constructor(server: FastifyInstance) {
    this.server = server
  }

  async findUser(email: string) {
    return this.server.prisma.user.findUnique({ where: { email } })
  }

  async createUser(user: Omit<CreateUserDto['user'], 'password'> & { passwordHash: string }) {
    return this.server.prisma.user.create({ data: user })
  }

  async updateUser({ id }: User, { user }: UpdateUserDto) {
    return this.server.prisma.user.update({
      where: {
        id
      },
      data: user
    })
  }
}
