import { PrismaClient, Muscle } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.exercise.create({
    data: {
      title: 'Hanging Leg Raise',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.ABS,
              value: 8
            },
            {
              muscle: Muscle.FOREARMS,
              value: 3
            }
          ]
        }
      }
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Standing side bends with dumbbells',
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.OBLIQUES,
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
