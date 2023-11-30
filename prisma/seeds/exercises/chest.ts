import { Muscle } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
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
})
