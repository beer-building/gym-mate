import { PrismaClient, Muscle } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.exercise.create({
    data: {
      title: 'Seated/standing dumbbell press',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.FRONT_DELTA,
              value: 8
            },
            {
              muscle: Muscle.MIDDLE_DELTA,
              value: 6
            },
            {
              muscle: Muscle.TRICEPS,
              value: 6
            }
          ]
        }
      }
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Pull from the top rear delt block',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.REAR_DELTA,
              value: 8
            },
            {
              muscle: Muscle.TRAPEZE,
              value: 5
            },
            {
              muscle: Muscle.LATISSIMUS,
              value: 2
            },
            {
              muscle: Muscle.BICEPS,
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
