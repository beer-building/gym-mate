import { LargeMuscleGroup, PrismaClient, SmallMuscleGroup } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  /*
   * BACK AND NECK
   */
  await prisma.exercise.create({
    data: {
      title: 'Hyperextension',
      description: `Useful, simple and irreplaceable exercise! 
      Perfectly loads the muscles of the lower back and buttocks and at the same time there is no axial load on the spine. 
      If you hunch a little and round your back in the upper phase, you can force your buttocks to carry out the main load.`,
      largeMuscleGroup: LargeMuscleGroup.BACK_AND_NECK,
      smallMuscleGroup: SmallMuscleGroup.SMALL_OF_THE_BACK
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Wide-grip chest pull-ups',
      description: `When pulling to the chest with a wide grip, the latissimus dorsi muscles work very well. 
      However, this variation is a little more difficult than shoulder-width pull-ups.`,
      largeMuscleGroup: LargeMuscleGroup.BACK_AND_NECK,
      smallMuscleGroup: SmallMuscleGroup.LATISSIMUS_MUSCLES
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Wide-grip chest pull-ups',
      description: `When pulling to the chest with a wide grip, the latissimus dorsi muscles work very well. 
      However, this variation is a little more difficult than shoulder-width pull-ups.`,
      largeMuscleGroup: LargeMuscleGroup.BACK_AND_NECK,
      smallMuscleGroup: SmallMuscleGroup.LATISSIMUS_MUSCLES
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Standing barbell shrugs',
      description: `Raise your shoulders up. Hold for half a second. Then lower in an arc. Alternatively, 
      you can do this exercise with a barbell behind your back, as well as in an inclined position. 
      This will allow you to work more bundles of the trapezius muscle.`,
      largeMuscleGroup: LargeMuscleGroup.BACK_AND_NECK,
      smallMuscleGroup: SmallMuscleGroup.TRAPEZE
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Lying Neck Curl',
      description: `It is necessary to extend and bend the neck to its full length, but rather slowly and without sudden movements. 
      For starters, a 2.5 kg disk will be enough for you. In general, the weight should be such that you can do at least 10 repetitions.`,
      largeMuscleGroup: LargeMuscleGroup.BACK_AND_NECK,
      smallMuscleGroup: SmallMuscleGroup.NECK
    }
  })

  /*
   * BUTTOCKS
   */
  await prisma.exercise.create({
    data: {
      title: 'Bulgarian squats',
      largeMuscleGroup: LargeMuscleGroup.BUTTOCKS
    }
  })

  /*
   * ABS_AND_OBLIQUES
   */
  await prisma.exercise.create({
    data: {
      title: 'Hanging Leg Raise',
      largeMuscleGroup: LargeMuscleGroup.ABS_AND_OBLIQUES,
      smallMuscleGroup: SmallMuscleGroup.ABS
    }
  })
  await prisma.exercise.create({
    data: {
      title: 'Standing side bends with dumbbells',
      largeMuscleGroup: LargeMuscleGroup.ABS_AND_OBLIQUES,
      smallMuscleGroup: SmallMuscleGroup.OBLIQUES
    }
  })

  // SHOULDERS
  await prisma.exercise.create({
    data: {
      title: 'Seated/standing dumbbell press',
      largeMuscleGroup: LargeMuscleGroup.SHOULDERS,
      smallMuscleGroup: SmallMuscleGroup.ANTERIOR_DELTA
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Bench press',
      largeMuscleGroup: LargeMuscleGroup.SHOULDERS,
      smallMuscleGroup: SmallMuscleGroup.MIDDLE_DELTA
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Pull from the top. rear delt block',
      largeMuscleGroup: LargeMuscleGroup.SHOULDERS,
      smallMuscleGroup: SmallMuscleGroup.REAR_DELTA
    }
  })

  // HANDS
  await prisma.exercise.create({
    data: {
      title: 'Chin-ups',
      largeMuscleGroup: LargeMuscleGroup.HANDS,
      smallMuscleGroup: SmallMuscleGroup.BICEPS
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Close grip bench press',
      largeMuscleGroup: LargeMuscleGroup.HANDS,
      smallMuscleGroup: SmallMuscleGroup.TRICEPS
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Seated wrist curl with barbell',
      largeMuscleGroup: LargeMuscleGroup.HANDS,
      smallMuscleGroup: SmallMuscleGroup.FOREARMS
    }
  })

  // CHEST
  await prisma.exercise.create({
    data: {
      title: 'Classic bench press',
      largeMuscleGroup: LargeMuscleGroup.CHEST
    }
  })

  // LEGS
  await prisma.exercise.create({
    data: {
      title: 'Lunges with dumbbells',
      largeMuscleGroup: LargeMuscleGroup.LEGS,
      smallMuscleGroup: SmallMuscleGroup.FRONT_THIGH
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Classic bench press',
      largeMuscleGroup: LargeMuscleGroup.LEGS,
      smallMuscleGroup: SmallMuscleGroup.POSTERIOR_THIGH
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Classic bench press',
      largeMuscleGroup: LargeMuscleGroup.LEGS,
      smallMuscleGroup: SmallMuscleGroup.INNER_THIGH
    }
  })

  await prisma.exercise.create({
    data: {
      title: 'Classic bench press',
      largeMuscleGroup: LargeMuscleGroup.LEGS,
      smallMuscleGroup: SmallMuscleGroup.OUTER_THIGH
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
