import { PrismaClient, Muscle } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.exercise.create({
    data: {
      title: 'Standing calf raise',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.SHIN,
              value: 10
            }
          ]
        }
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
