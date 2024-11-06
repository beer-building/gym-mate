import { Equipment, Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Seated/standing dumbbell press',
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.BARBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.CABLE,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.CABLE,
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
			equipment: Equipment.SMITH_MACHINE,
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
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/bent-over-cable-rear-delt-fly',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.REAR_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Band Pull Apart',
			equipment: Equipment.BAND,
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
			equipment: Equipment.PLATE,
			description: 'https://www.muscleandstrength.com/exercises/weight-plate-front-raise.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.FRONT_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Half Kneeling Landmine Press',
			equipment: Equipment.BARBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.BARBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.BARBELL,
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
			equipment: Equipment.KETTLEBELL,
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
			equipment: Equipment.BARBELL,
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
			equipment: Equipment.BAND,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.KETTLEBELL,
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
			equipment: Equipment.NONE,
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
			equipment: Equipment.BAND,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.BARBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.SMITH_MACHINE,
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
			equipment: Equipment.DUMBBELL,
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
			equipment: Equipment.BARBELL,
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
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/standing-cable-flys.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Cable Face Pull',
			equipment: Equipment.CABLE,
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
			equipment: Equipment.BARBELL,
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
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-reverse-fly.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Standing Dumbbell Front Raise',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-front-raise.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.FRONT_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Machine Shoulder Press',
			equipment: Equipment.MACHINE,
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
			equipment: Equipment.CABLE,
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
			equipment: Equipment.CABLE,
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
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/machine-reverse-fly',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Machine Lateral Raise',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/machine-lateral-raise.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.MIDDLE_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'Barbell Front Raise',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/barbell-front-raise.html',
			bodyLoad: {
				createMany: {
					data: [{ muscle: Muscle.FRONT_DELTA, value: 9 }]
				}
			}
		},
		{
			title: 'One Arm Kettlebell Z Press',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/one-arm-kettlebell-z-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'FRONT_DELTA',
							value: 7
						},
						{
							muscle: 'MIDDLE_DELTA',
							value: 4
						}
					]
				}
			}
		},
		{
			title: 'Standing Banded Face Pull',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/banded-face-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'REAR_DELTA',
							value: 6
						}
					]
				}
			}
		},
		{
			title: 'Cable External Rotation',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/cable-external-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'REAR_DELTA',
							value: 5
						}
					]
				}
			}
		},
		{
			title: 'Cable Face Pull with External Rotation',
			equipment: Equipment.CABLE,
			description:
				'https://www.muscleandstrength.com/exercises/cable-face-pull-with-external-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'REAR_DELTA',
							value: 6
						}
					]
				}
			}
		},
		{
			title: 'Side Lying Rear Delt Fly',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/side-lying-rear-delt-fly',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'REAR_DELTA',
							value: 8
						}
					]
				}
			}
		},
		{
			title: 'Landmine Lateral Raise',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/landmine-lateral-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'MIDDLE_DELTA',
							value: 7
						}
					]
				}
			}
		},
		{
			title: 'Banded Lateral Raise',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/banded-lateral-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'MIDDLE_DELTA',
							value: 6
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Lateral Raise',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-lateral-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'MIDDLE_DELTA',
							value: 6
						}
					]
				}
			}
		},
		{
			title: 'Standing Kettlebell Press',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/standing-kettlebell-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'FRONT_DELTA',
							value: 8
						},
						{
							muscle: 'MIDDLE_DELTA',
							value: 5
						}
					]
				}
			}
		},
		{
			title: 'Lateral Raise Partials',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/lateral-raise-partials',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'MIDDLE_DELTA',
							value: 6
						}
					]
				}
			}
		},
		{
			title: 'Alternating Dumbbell Front Raise',
			equipment: Equipment.DUMBBELL,
			description:
				'https://www.muscleandstrength.com/exercises/alternate-standing-dumbbell-front-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'FRONT_DELTA',
							value: 7
						}
					]
				}
			}
		},
		{
			title: 'Standing One Arm Kettlebell Press',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/standing-one-arm-kettlebell-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'FRONT_DELTA',
							value: 8
						},
						{
							muscle: 'MIDDLE_DELTA',
							value: 4
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell 6 Ways (Raise)',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-6-ways',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: 'FRONT_DELTA',
							value: 4
						},
						{
							muscle: 'MIDDLE_DELTA',
							value: 4
						},
						{
							muscle: 'REAR_DELTA',
							value: 4
						}
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
