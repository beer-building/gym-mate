import { Muscle } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
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
})
