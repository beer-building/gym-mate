import { PrismaClient, Muscle } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.exercise.create({
    data: {
      title: 'Classic bench press',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.CHEST,
              value: 10
            },
            {
              muscle: Muscle.TRICEPS,
              value: 6
            },
            {
              muscle: Muscle.FRONT_DELTA,
              value: 3
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
