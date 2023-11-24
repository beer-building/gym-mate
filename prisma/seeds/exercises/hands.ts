import { PrismaClient, Muscle } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.exercise.create({
    data: {
      title: 'Chin-ups',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.BICEPS,
              value: 8
            },
            {
              muscle: Muscle.LATISSIMUS,
              value: 8
            },
            {
              muscle: Muscle.FOREARMS,
              value: 8
            },
            {
              muscle: Muscle.TRAPEZE,
              value: 3
            },
            {
              muscle: Muscle.REAR_DELTA,
              value: 1
            }
          ]
        }
      }
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Close grip bench press',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.TRICEPS,
              value: 8
            },
            {
              muscle: Muscle.CHEST,
              value: 7
            },
            {
              muscle: Muscle.FRONT_DELTA,
              value: 2
            }
          ]
        }
      }
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Seated wrist curl with barbell',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.FOREARMS,
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
