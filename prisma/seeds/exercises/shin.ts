import { Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
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
		},
		{
			title: 'Seated Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/seated-calf-raise.html',
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
			title: 'Banded Tibialis Raise',
			description: 'https://www.muscleandstrength.com/exercises/banded-tibialis-raise',
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
			title: 'Skipping Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/skipping-jump-rope',
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
			title: '(Posterior) Calves Tiger Tail',
			description: 'https://www.muscleandstrength.com/exercises/posterior-calf-tiger-tail',
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
			title: 'Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/jump-rope',
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
			title: 'Anterior Calf Tiger Tail',
			description: 'https://www.muscleandstrength.com/exercises/anterior-calf-tiger-tail',
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
			title: 'Front to Back Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/front-to-back-jump-rope',
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
			title: 'Reverse Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/reverse-jump-rope',
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
			title: 'Side to Side Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/side-to-side-jump-rope',
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
			title: 'Anterior Calf Lacrosse Ball',
			description: 'https://www.muscleandstrength.com/exercises/anterior-calf-lacrosse-ball',
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
			title: 'One-Leg Seated Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/one-leg-seated-calf-raise.html',
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
			title: 'Posterior Calf Foam Rolling',
			description: 'https://www.muscleandstrength.com/exercises/foam-rolling-posterior-calf',
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
			title: 'Smith Machine Toe Raise',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-toe-raise.html',
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
			title: 'Single Leg Side to Side Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/single-leg-side-to-side-jump-rope',
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
			title: 'One-Leg Hack Squat Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/hack-one-leg-calf-raise.html',
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
			title: 'Alternating Single Leg Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/alternating-single-leg-jump-rope',
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
			title: 'Smith Machine Seated Toe Raise',
			description:
				'https://www.muscleandstrength.com/exercises/smith-machine-seated-toe-raise.html',
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
			title: 'One-Leg 45 Degree Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/one-leg-45-degree-calf-raise.html',
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
			title: 'One-Leg Smith Machine Seated Calf Raise',
			description:
				'https://www.muscleandstrength.com/exercises/one-leg-smith-machine-seated-calf-raise.html',
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
			title: 'Peroneal Tiger Tail',
			description: 'https://www.muscleandstrength.com/exercises/peroneal-tiger-tail',
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
			title: 'Double Jump Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/double-jump-jump-ropes',
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
			title: 'Rocking Standing Calf Raise',
			description: 'https://www.muscleandstrength.com/exercises/rocking-standing-calf-raise.html',
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
			title: 'Anterior Calf Tiger Tail',
			description: 'https://www.muscleandstrength.com/exercises/anterior-calf-tiger-tail',
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
			title: 'Front to Back Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/front-to-back-jump-rope',
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
			title: 'Reverse Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/reverse-jump-rope',
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
			title: 'Side to Side Jump Rope',
			description: 'https://www.muscleandstrength.com/exercises/side-to-side-jump-rope',
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
			title: 'Anterior Calf Lacrosse Ball',
			description: 'https://www.muscleandstrength.com/exercises/anterior-calf-lacrosse-ball',
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
