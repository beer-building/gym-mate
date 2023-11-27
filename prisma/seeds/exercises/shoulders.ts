import { Muscle } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
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
})
