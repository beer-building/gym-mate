import { User, Prisma, PrismaClient } from '@prisma/client'
import { UpdateUserDto } from '@gym-mate/shared-types'

export class UsersRepository {
	prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}

	async findUserByEmail(email: string): Promise<User | null> {
		return this.prisma.user.findUnique({ where: { email } })
	}

	async findUserByChatId(chatId: string): Promise<User | null> {
		return this.prisma.user.findUnique({ where: { chatId } })
	}

	async createUser(user: Prisma.UserCreateInput): Promise<User> {
		return this.prisma.user.create({ data: user })
	}

	async updateUser({ id }: User, { user }: UpdateUserDto): Promise<User | null> {
		return this.prisma.user.update({
			where: {
				id
			},
			data: user
		})
	}
}
