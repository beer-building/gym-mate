import { PrismaClient } from '@prisma/client'
import { DefaultArgs, PrismaClientOptions } from '@prisma/client/runtime/library'

export const createMigration = (
  migration: (prisma: PrismaClient<PrismaClientOptions, never, DefaultArgs>) => Promise<void>
) => {
  const prisma = new PrismaClient()

  migration(prisma)
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
}
