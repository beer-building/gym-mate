import { Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
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
		},
		{
			title: 'Military Press (AKA Overhead Press)',
			description: 'https://www.muscleandstrength.com/exercises/military-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_DELTA,
							value: 9
						},
						{
							muscle: Muscle.TRICEPS,
							value: 7
						},
						{
							muscle: Muscle.MIDDLE_DELTA,
							value: 4
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Lateral Raise',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 3
						},
						{
							muscle: Muscle.MIDDLE_DELTA,
							value: 10
						}
					]
				}
			}
		},
		{
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
		},
		{
			title: 'One-Arm Dumbbell Lateral Raise',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-lateral-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 8 },
						{ muscle: Muscle.FRONT_DELTA, value: 2 },
						{ muscle: Muscle.REAR_DELTA, value: 1 }
					]
				}
			}
		},
		{
			title: 'Dumbbell Upright Row',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-upright-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 7 },
						{ muscle: Muscle.FRONT_DELTA, value: 4 },
						{ muscle: Muscle.REAR_DELTA, value: 2 }
					]
				}
			}
		},
		{
			title: 'Cable Upright Row',
			description: 'https://www.muscleandstrength.com/exercises/cable-upright-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 7 },
						{ muscle: Muscle.FRONT_DELTA, value: 4 },
						{ muscle: Muscle.REAR_DELTA, value: 2 }
					]
				}
			}
		},
		{
			title: 'Smith Machine Upright Row',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-upright-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 7 },
						{ muscle: Muscle.FRONT_DELTA, value: 4 },
						{ muscle: Muscle.REAR_DELTA, value: 2 }
					]
				}
			}
		},
		{
			title: 'Bent Over Low Pulley Rear Delt Fly',
			description: 'https://www.muscleandstrength.com/exercises/bent-over-cable-rear-delt-fly',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.REAR_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Band Pull Apart',
			description: 'https://www.muscleandstrength.com/exercises/band-pull-apart',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.REAR_DELTA, value: 7 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 3 }
					]
				}
			}
		},
		{
			title: 'Weight Plate Front Raise',
			description: 'https://www.muscleandstrength.com/exercises/weight-plate-front-raise.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.FRONT_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Half Kneeling Landmine Press',
			description: 'https://www.muscleandstrength.com/exercises/half-kneeling-landmine-press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 3 }
					]
				}
			}
		},
		{
			title: 'Standing Arnold Press',
			description: 'https://www.muscleandstrength.com/exercises/standing-arnold-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 7 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Z Press',
			description: 'https://www.muscleandstrength.com/exercises/z-press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 4 }
					]
				}
			}
		},
		{
			title: 'Seated Neutral Grip Dumbbell Shoulder Press',
			description:
				'https://www.muscleandstrength.com/exercises/seated-palms-in-dumbbell-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Push Press',
			description: 'https://www.muscleandstrength.com/exercises/push-press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 7 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Kettlebell Halo',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-halo',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 3 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 2 },
						{ muscle: Muscle.REAR_DELTA, value: 3 }
					]
				}
			}
		},
		{
			title: 'Clean Press',
			description: 'https://www.muscleandstrength.com/exercises/clean-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Banded Shoulder Dislocates',
			description: 'https://www.muscleandstrength.com/exercises/banded-shoulder-dislocates',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.REAR_DELTA, value: 4 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 2 }
					]
				}
			}
		},
		{
			title: 'Bent Over Rear Delt Fly (Head on Bench)',
			description:
				'https://www.muscleandstrength.com/exercises/bent-over-rear-delt-fly-head-on-bench',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.REAR_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Incline Rear Delt Fly',
			description:
				'https://www.muscleandstrength.com/exercises/dumbbell-reverse-fly-on-incline-bench.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.REAR_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Kettlebell Angled Press',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-angled-press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 4 }
					]
				}
			}
		},
		{
			title: 'Arm Circles',
			description: 'https://www.muscleandstrength.com/exercises/arm-circles',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 3 },
						{ muscle: Muscle.REAR_DELTA, value: 3 }
					]
				}
			}
		},
		{
			title: 'Banded Standing Shoulder Press',
			description: 'https://www.muscleandstrength.com/exercises/banded-standing-shoulder-press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 7 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Dumbbell Lateral Raise',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 9 },
						{ muscle: Muscle.FRONT_DELTA, value: 1 }
					]
				}
			}
		},
		{
			title: 'Military Press (AKA Overhead Press)',
			description: 'https://www.muscleandstrength.com/exercises/military-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Bent Over Dumbbell Reverse Fly',
			description:
				'https://www.muscleandstrength.com/exercises/bent-over-dumbbell-reverse-fly.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Seated Dumbbell Press',
			description: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Seated Arnold Press',
			description: 'https://www.muscleandstrength.com/exercises/seated-arnold-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 7 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Standing Dumbbell Shoulder Press',
			description: 'https://www.muscleandstrength.com/exercises/standing-dumbbell-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Smith Machine Shoulder Press',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-shoulder-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Seated Dumbbell Lateral Raise',
			description: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-lateral-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 9 },
						{ muscle: Muscle.FRONT_DELTA, value: 1 }
					]
				}
			}
		},
		{
			title: 'Seated Barbell Shoulder Press',
			description: 'https://www.muscleandstrength.com/exercises/seated-shoulder-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Standing Cable Reverse Fly',
			description: 'https://www.muscleandstrength.com/exercises/standing-cable-flys.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Cable Face Pull',
			description: 'https://www.muscleandstrength.com/exercises/cable-face-pull',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 7 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 3 }
					]
				}
			}
		},
		{
			title: 'Seated Behind the Neck Shoulder Press',
			description:
				'https://www.muscleandstrength.com/exercises/seated-barbell-press-behind-neck.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 7 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Seated Bent Over Dumbbell Reverse Fly',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-reverse-fly.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Standing Dumbbell Front Raise',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-front-raise.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.FRONT_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Machine Shoulder Press',
			description: 'https://www.muscleandstrength.com/exercises/machine-shoulder-press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Cable Lateral Raise',
			description: 'https://www.muscleandstrength.com/exercises/two-arm-cable-lateral-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 9 },
						{ muscle: Muscle.FRONT_DELTA, value: 1 }
					]
				}
			}
		},
		{
			title: 'Single Arm Cable Lateral Raise (Crossbody)',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-cable-lateral-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.MIDDLE_DELTA, value: 9 },
						{ muscle: Muscle.FRONT_DELTA, value: 1 }
					]
				}
			}
		},
		{
			title: 'Machine Reverse Fly',
			description: 'https://www.muscleandstrength.com/exercises/machine-reverse-fly',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Machine Lateral Raise',
			description: 'https://www.muscleandstrength.com/exercises/machine-lateral-raise.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Barbell Front Raise',
			description: 'https://www.muscleandstrength.com/exercises/barbell-front-raise.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.FRONT_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'One Arm Kettlebell Z Press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 7 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 4 }
					]
				}
			}
		},
		{
			title: 'Standing Banded Face Pull',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.REAR_DELTA, value: 6 },
						{ muscle: Muscle.TRAPEZE, value: 4 }
					]
				}
			}
		},
		{
			title: 'Cable External Rotation',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.REAR_DELTA, value: 5 }]
				}
			}
		},
		{
			title: 'Cable Face Pull with External Rotation',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.REAR_DELTA, value: 6 },
						{ muscle: Muscle.TRAPEZE, value: 3 }
					]
				}
			}
		},
		{
			title: 'Side Lying Rear Delt Fly',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.REAR_DELTA, value: 8 }]
				}
			}
		},
		{
			title: 'Landmine Lateral Raise',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 7 }]
				}
			}
		},
		{
			title: 'Banded Lateral Raise',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 6 }]
				}
			}
		},
		{
			title: 'Kettlebell Lateral Raise',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 6 }]
				}
			}
		},
		{
			title: 'Standing Kettlebell Press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Lateral Raise Partials',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 6 }]
				}
			}
		},
		{
			title: 'Alternating Dumbbell Front Raise',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.FRONT_DELTA, value: 7 }]
				}
			}
		},
		{
			title: 'Standing One Arm Kettlebell Press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 8 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 4 }
					]
				}
			}
		},
		{
			title: 'Dumbbell 6 Ways (Raise)',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.FRONT_DELTA, value: 4 },
						{ muscle: Muscle.MIDDLE_DELTA, value: 4 },
						{ muscle: Muscle.REAR_DELTA, value: 4 }
					]
				}
			}
		}
	]

	// TODO: https://www.muscleandstrength.com/exercises/shoulders - 3, 4, 5 page not added

	for await (const exercise of exercises) {
		await prisma.exercise.upsert({
			where: { title: exercise.title },
			update: {},
			create: exercise
		})
	}
})
