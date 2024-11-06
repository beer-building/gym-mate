import { Muscle, Prisma, Equipment } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Standing calf raise',
			equipment: Equipment.MACHINE,
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
		},
		{
			title: 'Seated Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/seated-calf-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Dumbbell Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-calf-raise.html',
			equipment: Equipment.DUMBBELL,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '45 Degree Leg Press Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/45-degress-calf-press.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Machine Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/standing-machine-calf-raise',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing One-Leg Calf Raise With Dumbbell',
			description:
				'https://www.muscleandstrength.com/exercises/standing-one-leg-calf-raise-with-dumbbell.html',
			equipment: Equipment.DUMBBELL,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Barbell Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/standing-calf-raise.html',
			equipment: Equipment.BARBELL,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Standing Calf Raise',
			description:
				'https://www.muscleandstrength.com/exercises/bodyweight-standing-calf-raise.html',
			equipment: Equipment.NONE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-calf-raise.html',
			equipment: Equipment.SMITH_MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Leg Seated Dumbbell Calf Raise',
			description:
				'https://www.muscleandstrength.com/exercises/one-leg-seated-dumbbell-calf-raise.html',
			equipment: Equipment.DUMBBELL,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Leg Standing Bodyweight Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/one-leg-standing-calf-raise.html',
			equipment: Equipment.NONE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Donkey Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/donkey-calf-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Leg Floor Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/one-leg-floor-calf-raise.html',
			equipment: Equipment.NONE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hack Squat Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/hack-calf-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Seated Calf Raise',
			description:
				'https://www.muscleandstrength.com/exercises/smith-machine-seated-calf-raise.html',
			equipment: Equipment.SMITH_MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Barbell Calf Raise (On Floor)',
			description: 'https://www.muscleandstrength.com/exercises/floor-barbell-calf-raise.html',
			equipment: Equipment.BARBELL,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Toes In Standing Machine Calf Raise',
			description:
				'https://www.muscleandstrength.com/exercises/toes-in-standing-machine-calf-raise',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Floor Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/floor-calf-raise.html',
			equipment: Equipment.NONE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Knee Break Ankle Mobilization',
			description: 'https://www.muscleandstrength.com/exercises/knee-break-ankle-mobilization',
			equipment: Equipment.NONE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Leg Cable Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/one-leg-cable-calf-raise.html',
			equipment: Equipment.CABLE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/cable-calf-raise.html',
			equipment: Equipment.CABLE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rocking Gastrocnemius Emphasis Ankle Mobilization',
			description:
				'https://www.muscleandstrength.com/exercises/rocking-gastroc-emphasis-ankle-mobilization',
			equipment: Equipment.NONE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Toes In Seated Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/toes-in-seated-calf-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '45 Degree Calf Raise (Toes In)',
			description: 'https://www.muscleandstrength.com/exercises/toes-in-45-degree-calf-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '45 Degree Toe Raise',
			description: 'https://www.muscleandstrength.com/exercises/45-degree-toe-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '45 Degree Calf Raise (Toes Out)',
			description: 'https://www.muscleandstrength.com/exercises/toes-out-45-degree-calf-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Leg Donkey Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/one-leg-donkey-calf-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rocking Soleus Emphasis Ankle Mobilization',
			description:
				'https://www.muscleandstrength.com/exercises/rocking-soleus-emphasis-ankle-mobilization',
			equipment: Equipment.NONE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball On-The-Wall Calf Raise',
			description:
				'https://www.muscleandstrength.com/exercises/exercise-ball-on-the-wall-calf-raise.html',
			equipment: Equipment.BALL,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Toes Out Seated Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/toes-out-seated-calf-raise.html',
			equipment: Equipment.MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Toes Out Smith Machine Calf Raise',
			description:
				'https://www.muscleandstrength.com/exercises/toes-out-smith-machine-calf-raise.html',
			equipment: Equipment.SMITH_MACHINE,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SHIN,
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
