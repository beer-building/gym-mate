import { Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Chin-ups',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 8
						},
						{
							muscle: Muscle.LATISSIMUS,
							value: 8
						},
						{
							muscle: Muscle.FOREARMS,
							value: 8
						},
						{
							muscle: Muscle.TRAPEZE,
							value: 3
						},
						{
							muscle: Muscle.REAR_DELTA,
							value: 1
						}
					]
				}
			}
		},
		{
			title: 'Close grip bench press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 8
						},
						{
							muscle: Muscle.CHEST,
							value: 7
						},
						{
							muscle: Muscle.FRONT_DELTA,
							value: 2
						}
					]
				}
			}
		},
		{
			title: 'Seated wrist curl with barbell',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 10
						}
					]
				}
			}
		},
		// TODO: fill bodyLoad, replace 0
		{
			title: 'Standing Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/standing-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/standing-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/incline-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Barbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/standing-barbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'EZ Bar Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/ez-bar-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Concentration Curl',
			description: 'https://www.muscleandstrength.com/exercises/concentration-cur.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Zottman Curl',
			description: 'https://www.muscleandstrength.com/exercises/zottman-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cross Body Hammer Curl (Pinwheel Curls)',
			description: 'https://www.muscleandstrength.com/exercises/hammer-curl-across-the-body.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Seated Dumbbell Curl',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-seated-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Curl (Rope Extension)',
			description: 'https://www.muscleandstrength.com/exercises/rope-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Standing Dumbbell Curl',
			description:
				'https://www.muscleandstrength.com/exercises/alternating-standing-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'EZ Bar Curl',
			description: 'https://www.muscleandstrength.com/exercises/ez-bar-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Machine Bicep Curl',
			description: 'https://www.muscleandstrength.com/exercises/bicep-machine-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Spider Curl',
			description: 'https://www.muscleandstrength.com/exercises/spider-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Dumbbell Reverse Curl',
			description:
				'https://www.muscleandstrength.com/exercises/standing-dumbbell-reverse-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing High Pulley Cable Curl',
			description:
				'https://www.muscleandstrength.com/exercises/standing-high-pulley-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-seated-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/preacher-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Standing Hammer Curl',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-standing-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Hammer Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-hammer-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Bicep Curl',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-bicep-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lateral Pulldown Bicep Curl',
			description: 'https://www.muscleandstrength.com/exercises/cable-underhand-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Standing Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-standing-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Incline Dumbbell Curl',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-incline-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Dumbbell Drag Curl',
			description: 'https://www.muscleandstrength.com/exercises/standing-dumbbell-drag-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Drag Curl',
			description: 'https://www.muscleandstrength.com/exercises/barbell-drag-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Barbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-barbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Drag Curl',
			description: 'https://www.muscleandstrength.com/exercises/cable-drag-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Cable Curl (On Floor)',
			description: 'https://www.muscleandstrength.com/exercises/lying-cable-curl-floor.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Grip Standing Barbell Curl',
			description:
				'https://www.muscleandstrength.com/exercises/wide-grip-standing-barbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/barbell-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Zottman Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-zottman-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Standing Dumbbell Twisting Curls',
			description:
				'https://www.muscleandstrength.com/exercises/twisting-standing-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/lying-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Dumbbell Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Two-Arm Low Pulley Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/two-arm-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Grip EZ Bar Curl',
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-ez-bar-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip EZ Bar Curl',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-ez-bar-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Prone Incline Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/prone-incline-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Prone Incline Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/prone-incline-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Concentration Curl',
			description: 'https://www.muscleandstrength.com/exercises/barbell-concentration-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Incline Bench Barbell Curl',
			description:
				'https://www.muscleandstrength.com/exercises/lying-barbell-curl-on-incline-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Concentration Curl',
			description: 'https://www.muscleandstrength.com/exercises/cable-concentration-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-seated-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Seated Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/alternate-seated-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Standing Dumbbell Curl',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-standing-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Dumbbell Reverse Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-reverse-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Squatting Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/squatting-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Prone Incline Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-prone-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Dumbbell Hammer Preacher Curl',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-dumbbell-hammer-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Standing Barbell Curl',
			description:
				'https://www.muscleandstrength.com/exercises/close-grip-standing-barbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Wide Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/lying-wide-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Prone Hammer Curl',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-prone-hammer-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Bench Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/incline-bench-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Cable Bicep Curl',
			description:
				'https://www.muscleandstrength.com/exercises/two-arm-cable-curl-on-incline-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Bench Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/incline-bench-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/swiss-ball-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Preacher Curl (Rope Extension)',
			description: 'https://www.muscleandstrength.com/exercises/rope-cable-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Grip Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying High Pulley Close Grip Cable Curl',
			description:
				'https://www.muscleandstrength.com/exercises/lying-high-pulley-close-grip-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hammer Bar Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/hammer-bar-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/incline-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying High Pulley Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/lying-high-pulley-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Zottman Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/zottman-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Incline Hammer Curl',
			description: 'https://www.muscleandstrength.com/exercises/alternate-incline-hammer-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Dumbbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/swiss-ball-dumbbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Dumbbell Preacher Curl',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-dumbbell-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bicep Curl Sled Drag',
			description: 'https://www.muscleandstrength.com/exercises/bicep-curl-sled-drag',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Dumbbell Hammer Preacher Curl',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-hammer-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Barbell Wrist Curl',
			description: 'https://www.muscleandstrength.com/exercises/barbell-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Behind-The-Back Barbell Wrist Curl',
			description: 'https://www.muscleandstrength.com/exercises/standing-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Barbell Curl',
			description: 'https://www.muscleandstrength.com/exercises/reverse-barbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/reverse-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Farmers Carry',
			description: 'https://www.muscleandstrength.com/exercises/farmers-walk',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Dumbbell Wrist Curl',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-seated-dumbbell-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Barbell Curl (EZ Bar)',
			description:
				'https://www.muscleandstrength.com/exercises/ez-bar-reverse-grip-barbell-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Wrist Curl (Over Bench)',
			description:
				'https://www.muscleandstrength.com/exercises/dumbbell-wrist-curl-over-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Dumbbell Wrist Curl Over Bench',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-dumbbell-wrist-curl-over-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Barbell Wrist Curl (Over Bench)',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-barbell-wrist-curl-over-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Wrist Curl (Over Bench)',
			description: 'https://www.muscleandstrength.com/exercises/barbell-wrist-curl-over-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Plate Pinch Carry',
			description: 'https://www.muscleandstrength.com/exercises/plate-pinch-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weight Plate Pinches',
			description: 'https://www.muscleandstrength.com/exercises/weight-plate-pinches.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Reverse Barbell Wrist Curl',
			description: 'https://www.muscleandstrength.com/exercises/reverse-barbell-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wrist Rollers',
			description: 'https://www.muscleandstrength.com/exercises/wrist-rollers.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Reverse Grip Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/standing-cable-reverse-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell High Low Carry',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-high-low-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Single Arm Racked Carry',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-single-arm-racked-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Suitcase Carry',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-suitcase-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Overhead Carry',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-overhead-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Racked Crossover Walk',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-racked-crossover-walk',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Smith Machine Wrist Curl (behind back)',
			description:
				'https://www.muscleandstrength.com/exercises/standing-smith-machine-wrist-curl-(behind-back).html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Dumbbell Reverse Grip Curl',
			description:
				'https://www.muscleandstrength.com/exercises/standing-one-arm-dumbbell-reverse-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Cable Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/reverse-cable-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Farmers Carry',
			description: 'https://www.muscleandstrength.com/exercises/trap-bar-farmers-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Suitcase Carry',
			description: 'https://www.muscleandstrength.com/exercises/barbell-suitcase-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Reverse Grip Dumbbell Wrist Curl',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-seated-reverse-dumbbell-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Fat Gripz Dumbbell Farmers Carry',
			description: 'https://www.muscleandstrength.com/exercises/fat-gripz-dumbbell-farmers-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Concentration Curl',
			description: 'https://www.muscleandstrength.com/exercises/reverse-concentration-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Dumbbell Wrist Curl (Over Bench)',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-wrist-curl-over-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Neutral Grip Dumbbell Wrist Curl (Over Bench)',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-neutral-dumbbell-wrist-curl-over-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Arm Reverse Dumbbell Wrist Curl Over Bench',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-reverse-dumbbell-wrist-curl-over-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Dumbbell Preacher Curl',
			description:
				'https://www.muscleandstrength.com/exercises/dumbbell-reverse-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Dumbbell Reverse Grip Curl',
			description:
				'https://www.muscleandstrength.com/exercises/standing-alternate-dumbbell-reverse-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse One Arm Cable Curl',
			description: 'https://www.muscleandstrength.com/exercises/reverse-one-arm-cable-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Reverse Grip Dumbbell Preacher Curl',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-reverse-dumbbell-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Single Arm Bottoms Up Carry',
			description:
				'https://www.muscleandstrength.com/exercises/kettlebell-single-arm-bottoms-up-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Behind-The-Back Cable Wrist Curl',
			description:
				'https://www.muscleandstrength.com/exercises/standing-cable-wrist-curl-(behind-back).html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Neutral Grip Dumbbell Wrist Curl',
			description:
				'https://www.muscleandstrength.com/exercises/seated-neutral-dumbbell-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Cable Wrist Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-cable-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Neutral Grip Dumbbell Wrist Curl',
			description:
				'https://www.muscleandstrength.com/exercises/seated-neutral-dumbbell-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Cable Wrist Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-cable-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Overhead Barbell Carry',
			description: 'https://www.muscleandstrength.com/exercises/overhead-barbell-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Reverse Grip Cable Wrist Curl',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-seated-cable-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Dumbbell Wrist Curl',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Preacher Curl (EZ Bar)',
			description:
				'https://www.muscleandstrength.com/exercises/ez-bar-reverse-grip-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Overhead Carry',
			description: 'https://www.muscleandstrength.com/exercises/trap-bar-overhead-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Zercher Carry',
			description: 'https://www.muscleandstrength.com/exercises/zercher-carry',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Neutral Grip Dumbbell Wrist Curl',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-seated-neutral-dumbbell-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Forearm Tiger Tail',
			description: 'https://www.muscleandstrength.com/exercises/forearm-tiger-tail',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Preacher Curl',
			description: 'https://www.muscleandstrength.com/exercises/reverse-preacher-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Forearm Extensors Lacrosse Ball',
			description: 'https://www.muscleandstrength.com/exercises/forearm-extensors-lacrosse-ball',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Neutral Grip Dumbbell Wrist Curl (Over Bench)',
			description:
				'https://www.muscleandstrength.com/exercises/neutral-dumbbell-wrist-curl-over-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Forearm Flexors Lacrosse Ball',
			description: 'https://www.muscleandstrength.com/exercises/forearm-flexors-lacrosse-balls',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Seated Wrist Curl',
			description:
				'https://www.muscleandstrength.com/exercises/smith-machine-seated-wrist-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FOREARMS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Straight Bar Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Dumbbell Extension',
			description: 'https://www.muscleandstrength.com/exercises/lying-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Dumbbell Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/two-arm-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rope Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/rope-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Tricep Dip',
			description: 'https://www.muscleandstrength.com/exercises/tricep-dip.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Floor Press',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-floor-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'EZ Bar Skullcrusher',
			description: 'https://www.muscleandstrength.com/exercises/ez-bar-skullcrusher.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Barbell Tricep Extension (Skull Crusher)',
			description: 'https://www.muscleandstrength.com/exercises/lying-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bent Over Dumbbell Tricep Kickback',
			description: 'https://www.muscleandstrength.com/exercises/bent-over-dumbbell-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Two Arm Standing Dumbbell Extension',
			description:
				'https://www.muscleandstrength.com/exercises/two-arm-standing-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'French Press',
			description: 'https://www.muscleandstrength.com/exercises/french-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Tricep Dips',
			description: 'https://www.muscleandstrength.com/exercises/weighted-tricep-dips.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '45 Degree Lying Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/back-of-the-head-lying-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bench Dip',
			description: 'https://www.muscleandstrength.com/exercises/tricep-bench-dip.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Standing Dumbbell Extension',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Tricep Kickback',
			description: 'https://www.muscleandstrength.com/exercises/tricep-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Push Up',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-push-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Dumbbell Extension',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-seated-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Overhead EZ Bar Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/standing-overhead-ez-bar-tricep-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Cable Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/reverse-grip-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Skull Crusher',
			description: 'https://www.muscleandstrength.com/exercises/incline-skullcrusher.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Low Pulley Overhead Tricep Extension (Rope Extension)',
			description:
				'https://www.muscleandstrength.com/exercises/standing-low-pulley-overhead-tricep-extension-(rope-extension).html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'High Pulley Overhead Tricep Extension (rope extension)',
			description: 'https://www.muscleandstrength.com/exercises/overhead-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated French Press',
			description: 'https://www.muscleandstrength.com/exercises/overhead-barbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Tricep Extension With V-Bar',
			description:
				'https://www.muscleandstrength.com/exercises/cable-tricep-extension-with-v-bar.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Cable Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-cable-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Eccentric Only Dip',
			description: 'https://www.muscleandstrength.com/exercises/eccentric-only-dip',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Arm Kettlebell Floor Press',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-kettlebell-floor-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Machine Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/machine-tricep-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Band Assisted Dip',
			description: 'https://www.muscleandstrength.com/exercises/band-assisted-dip',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse One-Arm Cable Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-one-arm-tricep-pushdown.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Overhead Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-seated-overhead-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Dumbbell Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/incline-two-arm-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'High Pulley Overhead Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/high-pulley-overhead-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Tate Press',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-tate-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Incline Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/smith-machine-incline-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Arm Bent Over Dumbbell Tricep Kickback',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-bent-over-dumbbell-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Bench Dip',
			description: 'https://www.muscleandstrength.com/exercises/single-bench-dip.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Pronated Dumbbell Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/lying-pronated-dumbbell-tricep-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Close Grip Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/incline-close-grip-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/banded-tricep-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'EZ Bar Incline Skullcrusher',
			description: 'https://www.muscleandstrength.com/exercises/ez-bar-incline-skullcrusher.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Floor Press',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-floor-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Tricep Kickback',
			description: 'https://www.muscleandstrength.com/exercises/cable-tricep-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Low Pulley Overhead Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/standing-low-pulley-overhead-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Close Grip Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/smith-machine-close-grip-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Close Grip Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/decline-close-grip-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Sphinx Push Up',
			description: 'https://www.muscleandstrength.com/exercises/sphinx-push-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Bent Over Tricep Dumbbell Kickback',
			description:
				'https://www.muscleandstrength.com/exercises/seated-bent-over-dumbbell-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Pin Press',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-pin-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Cable Overhead Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-standing-overhead-cable-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Dumbbell Extension (Single Dumbbell)',
			description:
				'https://www.muscleandstrength.com/exercises/lying-single-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Cable Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/lying-cable-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Low Pulley Overhead Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/seated-low-pulley-overhead-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Skull Crusher',
			description: 'https://www.muscleandstrength.com/exercises/reverse-grip-skullcrusher.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip EZ Bar Press',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-ez-bar-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'California Skullcrusher',
			description: 'https://www.muscleandstrength.com/exercises/california-skullcrusher',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kneeling Overhead Tricep Extension (Over Flat Bench)',
			description:
				'https://www.muscleandstrength.com/exercises/kneeling-overhead-tricep-extension-over-flat-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rolling Dumbbell Extension',
			description: 'https://www.muscleandstrength.com/exercises/rolling-dumbbell-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Dumbbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/twisting-dumbbell-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '45 Degree Lying Tricep Extension (EZ Bar)',
			description:
				'https://www.muscleandstrength.com/exercises/ez-bar-back-of-the-head-lying-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Inline Bench French Press',
			description: 'https://www.muscleandstrength.com/exercises/inline-bench-french-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Dip',
			description: 'https://www.muscleandstrength.com/exercises/exercise-ball-dip.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated EZ Bar French Press',
			description: 'https://www.muscleandstrength.com/exercises/seated-ez-bar-french-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Two Arm Cable Tricep Kickback',
			description: 'https://www.muscleandstrength.com/exercises/two-arm-cable-tricep-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Dumbbell Floor Press',
			description: 'https://www.muscleandstrength.com/exercises/alternate-dumbbell-floor-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Lying Dumbbell Extension',
			description:
				'https://www.muscleandstrength.com/exercises/decline-lying-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Reverse Close Grip Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/smith-machine-reverse-close-grip-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Chest Press',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-chest-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Concentration Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/cable-concentration-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Bent-Over Dumbbell Kickback',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-bent-over-dumbbell-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Bench Dip',
			description: 'https://www.muscleandstrength.com/exercises/weighted-bench-dips.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Dumbbell Kickback',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-seated-dumbbell-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Lying Pronated Dumbbell Extension',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-pronated-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Lying Dumbbell Extension',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-lying-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Triceps Lacrosse Ball',
			description: 'https://www.muscleandstrength.com/exercises/triceps-lacrosse-ball',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Lying Dumbbell Extension',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-lying-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Cable Tricep Kickback',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-cable-tricep-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball One-Arm Dumbbell Extension',
			description:
				'https://www.muscleandstrength.com/exercises/exercise-ball-one-arm-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Ring Dip',
			description: 'https://www.muscleandstrength.com/exercises/ring-dip',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Barbell Reverse Extension',
			description:
				'https://www.muscleandstrength.com/exercises/lying-barbell-reverse-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Cable Tricep Extension (Rope Extension)',
			description:
				'https://www.muscleandstrength.com/exercises/lying-on-floor-tricep-extension-(rope-extension).html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Tricep Tiger Tail',
			description: 'https://www.muscleandstrength.com/exercises/tricep-tiger-tail',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Press Behind-The-Neck',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-press-behind-neck.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Arm Bottoms Up Kettlebell Floor Press',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-bottoms-up-kettlebell-floor-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Three Bench Dip',
			description: 'https://www.muscleandstrength.com/exercises/three-bench-dip.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip French Press',
			description: 'https://www.muscleandstrength.com/exercises/reverse-grip-french-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Low Pulley Overhead Tricep Extension (Rope Extension)',
			description:
				'https://www.muscleandstrength.com/exercises/seated-low-pulley-overhead-tricep-extension-(rope-extension).html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Cable Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/incline-cable-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Three Bench Dip',
			description: 'https://www.muscleandstrength.com/exercises/weighted-three-bench-dips.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Overhead Tricep Extension Sled Drag',
			description:
				'https://www.muscleandstrength.com/exercises/overhead-tricep-extension-sled-drag',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Bent Over Dumbbell Kickback',
			description:
				'https://www.muscleandstrength.com/exercises/one-arm-seated-bent-over-dumbbell-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Cable Tricep Extension (Rope Extension)',
			description: 'https://www.muscleandstrength.com/exercises/incline-bench-rope-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Seated French Press',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-seated-french-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Reverse Grip One-Arm Overhead Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-one-arm-seated-overhead-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Dumbbell Kickbacks',
			description:
				'https://www.muscleandstrength.com/exercises/exercise-ball-dumbbell-kickbacks.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Skullcrusher',
			description: 'https://www.muscleandstrength.com/exercises/banded-skullcrusher',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Alternating Bent Over Dumbbell Kickback',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-seated-bent-over-dumbbell-kickback.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Two-Arm Tricep Cable Extension',
			description:
				'https://www.muscleandstrength.com/exercises/standing-two-arm-tricep-cable-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Close Grip Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-close-grip-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip One-Arm Overhead Cable Tricep Extension',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-one-arm-standing-overhead-cable-tricep-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball French Press',
			description: 'https://www.muscleandstrength.com/exercises/swiss-ball-french-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Lying Tricep Extension (Skullcrusher)',
			description:
				'https://www.muscleandstrength.com/exercises/decline-lying-tricep-extension-skullcrusher.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Overhead Banded Tricep Extension',
			description: 'https://www.muscleandstrength.com/exercises/overhead-banded-tricep-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Two-Arm Dumbbell Extension',
			description:
				'https://www.muscleandstrength.com/exercises/exercise-ball-two-arm-dumbbell-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRICEPS,
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
