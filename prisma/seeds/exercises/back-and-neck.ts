import { Muscle } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
  await prisma.exercise.create({
    data: {
      title: 'Hyperextension',
      description: `Useful, simple and irreplaceable exercise! 
      Perfectly loads the muscles of the lower back and buttocks and at the same time there is no axial load on the spine. 
      If you hunch a little and round your back in the upper phase, you can force your buttocks to carry out the main load.`,
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.SMALL_OF_THE_BACK,
              value: 10
            },
            {
              muscle: Muscle.BUTTOCKS,
              value: 7
            },
            {
              muscle: Muscle.POSTERIOR_THIGH,
              value: 7
            }
          ]
        }
      }
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Wide-grip chest pull-ups',
      description: `When pulling to the chest with a wide grip, the latissimus dorsi muscles work very well. 
      However, this variation is a little more difficult than shoulder-width pull-ups.`,
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.LATISSIMUS,
              value: 10
            },
            {
              muscle: Muscle.TRAPEZE,
              value: 6
            },
            {
              muscle: Muscle.SMALL_OF_THE_BACK,
              value: 6
            },
            {
              muscle: Muscle.FOREARMS,
              value: 5
            },
            {
              muscle: Muscle.REAR_DELTA,
              value: 4
            },
            {
              muscle: Muscle.BICEPS,
              value: 4
            }
          ]
        }
      }
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Lying Neck Curl',
      description: `It is necessary to extend and bend the neck to its full length, but rather slowly and without sudden movements.
      For starters, a 2.5 kg disk will be enough for you. In general, the weight should be such that you can do at least 10 repetitions.`,
      bodyLoad: {
        createMany: {
          data: [
            {
              muscle: Muscle.NECK,
              value: 8
            }
          ]
        }
      }
    }
  })
})
