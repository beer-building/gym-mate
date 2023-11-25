import { FastifyInstance } from 'fastify'
import { genSalt, hash } from 'bcryptjs'
import { User } from '@prisma/client'

import { CreateUserDto, UserReplyType } from '@gym-mate/shared-types'
import { UsersRepository } from '../repositories'

export class UsersService {
  server: FastifyInstance

  usersRepository: UsersRepository

  constructor(server: FastifyInstance) {
    this.server = server
    this.usersRepository = new UsersRepository(server)
  }

  async findUser(email: string) {
    return await this.usersRepository.findUser(email)
  }

  async createUser({ user }: CreateUserDto) {
    const salt = await genSalt(10)
    const passwordHash = await hash(user.password, salt)

    Reflect.deleteProperty(user, 'password')

    const formattedUser = { ...user, passwordHash }

    const newUser = await this.usersRepository.createUser(formattedUser)

    return newUser
  }

  buildUserResponse(user: User): UserReplyType {
    const userResponse = {
      id: user.id,
      email: user.email,
      username: user.username,
      image: user.image || '',
      token: this.server.jwt.sign(user)
    }

    return { user: userResponse }
  }
}
