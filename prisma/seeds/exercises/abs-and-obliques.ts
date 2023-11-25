import { Muscle } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
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
})
