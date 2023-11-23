import { FastifyInstance } from 'fastify'
import { genSalt, hash } from 'bcryptjs'
import { User } from '@prisma/client'

import { CreateUserDto, UserReplyType } from '../schemas/users'
import { UsersRepository } from '../repositories'

export class UsersService {
  server: FastifyInstance

  usersRepository: UsersRepository

  constructor(server: FastifyInstance) {
    this.server = server
    this.usersRepository = new UsersRepository(server)
  }

  async findUser(email: string): Promise<User | null> {
    const user = await this.usersRepository.findUser(email)

    if (!user) return null

    return user
  }

  async createUser({ user }: CreateUserDto): Promise<User> {
    const salt = await genSalt(10)
    const passwordHash = await hash(user.password, salt)

    Reflect.deleteProperty(user, 'password')

    const formattedUser = {
      ...user,
      passwordHash
    }

    Reflect.deleteProperty(formattedUser, 'password')

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
