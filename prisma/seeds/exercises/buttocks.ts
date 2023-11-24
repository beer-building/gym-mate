import { PrismaClient, Muscle } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.exercise.create({
    data: {
      title: 'Bulgarian squats',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.BUTTOCKS,
              value: 10
            },
            {
              muscle: Muscle.FRONT_THIGH,
              value: 8
            },
            {
              muscle: Muscle.POSTERIOR_THIGH,
              value: 6
            },
            {
              muscle: Muscle.INNER_THIGH,
              value: 5
            },
            {
              muscle: Muscle.SMALL_OF_THE_BACK,
              value: 3
            },
            {
              muscle: Muscle.FOREARMS,
              value: 3
            },
            {
              muscle: Muscle.OUTER_THIGH,
              value: 2
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
