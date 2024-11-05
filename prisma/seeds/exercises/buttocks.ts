import { Equipment, Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Bulgarian squats',
			equipment: Equipment.DUMBBELL,
			description: 'The Bulgarian squat is a great exercise for the buttocks and thighs.',
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
		},
		{
			title: 'Dumbbell Step Up',
			equipment: Equipment.DUMBBELL,
			description: 'The dumbbell step-up is a great exercise for the buttocks and thighs.',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 9
						},
						{
							muscle: Muscle.FRONT_THIGH,
							value: 7
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
		},
		{
			title: 'Barbell Hip Thrust',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/barbell-hip-thrust',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 10
						},
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 3
						},
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 3
						}
					]
				}
			}
		},
		{
			title: 'Buttocks Kickback',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/barbell-hip-thrust',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.OUTER_THIGH,
							value: 10
						},
						{
							muscle: Muscle.BUTTOCKS,
							value: 3
						}
					]
				}
			}
		},
		{
			title: 'Romanian Deadlift',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-stiff-leg-deadlift.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 9
						},
						{
							muscle: Muscle.BUTTOCKS,
							value: 7
						},
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 7
						},
						{
							muscle: Muscle.FRONT_THIGH,
							value: 3
						},
						{
							muscle: Muscle.INNER_THIGH,
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
		},
		{
			title: 'Barbell Hip Thrust',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/barbell-hip-thrust',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Good Mornings',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/good-mornings.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Glute Kickback',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/standing-glute-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Glute Kick Back',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/glute-kick-back.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Smith Machine Squat',
			equipment: Equipment.SMITH_MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/wide-smith-machine-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Glute Bridge',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-glute-bridge',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Hyperextension',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/reverse-hyperextension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Glute Bridge',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/single-leg-glute-bridge',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Glute Bridge',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/barbell-glute-bridge',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Side Lying Clam',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/side-lying-clam',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hip Thruster with Mini Band',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/hip-thruster-with-mini-band',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Hip Thrust',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-hip-thrust',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Glute Bridge',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/banded-glute-bridge',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Good Mornings Off Pins',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/good-morning-off-pins',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Hip Thrust with Dumbbell',
			equipment: Equipment.DUMBBELL,
			description:
				'https://www.muscleandstrength.com/exercises/single-leg-hip-thrust-with-dumbbell',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Curtsy Lunge (AKA Drop Lunge)',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/curtsy-lunge',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Good Morning',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/banded-good-mornings',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lateral Band Walk',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/lateral-band-walk',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '90/90 Piriformis Stretch',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/90-90-piriformis-stretch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Marching Glute Bridge',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/marching-glute-bridge',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'GHD Back Extension',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/ghd-back-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Good Morning',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/single-leg-good-morning',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Hip Thruster',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/banded-hip-thruster',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},

		{
			title: 'Hip Extensions',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/hip-extensions.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Multi Directional Toe Touch',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/banded-multi-directional-toe-touch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'X-Band Walk',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/x-band-walk',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Hip Thrust',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/single-leg-hip-thrust',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Good Mornings',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/seated-good-mornings.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Side Lying Clam with Band',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/side-lying-clam-with-band',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Sled Pull Through',
			equipment: Equipment.SLED,
			description: 'https://www.muscleandstrength.com/exercises/sled-pull-through',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Knee to Chest Single Leg Glute Bridge',
			equipment: Equipment.NONE,
			description:
				'https://www.muscleandstrength.com/exercises/knee-to-chest-single-leg-glute-bridge',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dynamic Pigeon',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/dynamic-pigeon',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Figure 4 Glute Stretch',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/figure-4-glute-stretch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing External Rotation',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/standing-external-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'GHD Back Extension Iso Hold',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/ghd-back-extension-iso-hold',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Supine Hip Internal Rotation',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/supine-hip-internal-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Supine Hip Internal Rotation',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/supine-hip-internal-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Hip Thruster',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-hip-thruster',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Diagonal Band Walk',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/diagonal-band-walk',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 0
						}
					]
				}
			}
		}
	]

	for await (const exercise of exercises) {
		await prisma.exercise.upsert({
			where: { title: exercise.title },
			update: {},
			create: exercise
		})
	}
})
