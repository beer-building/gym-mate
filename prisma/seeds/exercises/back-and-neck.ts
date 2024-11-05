import { Equipment, Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Hyperextension',
			equipment: Equipment.BENCH,
			description: `https://www.muscleandstrength.com/exercises/weighted-hyperextension`,
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
		},
		{
			title: 'Seated Cable Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/seated-row.html',
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
							muscle: Muscle.REAR_DELTA,
							value: 3
						},
						{
							muscle: Muscle.BICEPS,
							value: 3
						},
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 3
						},
						{
							muscle: Muscle.FOREARMS,
							value: 2
						}
					]
				}
			}
		},
		{
			title: 'Lat Pull Down',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/lat-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 7
						},
						{
							muscle: Muscle.TRAPEZE,
							value: 7
						},
						{
							muscle: Muscle.REAR_DELTA,
							value: 3
						},
						{
							muscle: Muscle.BICEPS,
							value: 3
						},
						{
							muscle: Muscle.FOREARMS,
							value: 2
						}
					]
				}
			}
		},
		{
			title: 'Wide-grip chest pull-ups',
			equipment: Equipment.PULL_UP_BAR,
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
		},
		{
			title: 'Lying Neck Curl',
			equipment: Equipment.BENCH,
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
		},
		{
			title: 'Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/pull-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 9
						},
						{
							muscle: Muscle.TRAPEZE,
							value: 6
						},
						{
							muscle: Muscle.FOREARMS,
							value: 5
						},
						{
							muscle: Muscle.REAR_DELTA,
							value: 5
						},
						{
							muscle: Muscle.BICEPS,
							value: 4
						}
					]
				}
			}
		},
		{
			title: 'Feet Elevated Inverted Row',
			equipment: Equipment.SMITH_MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-bodyweight-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 8
						},
						{
							muscle: Muscle.TRAPEZE,
							value: 7
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
							value: 6
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Lat Pull Down',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/close-grip-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Grip Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-pull-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Straight Arm Lat Pull Down',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/straight-arm-lat-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/chin-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Lat Pull Down (Underhand)',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/reverse-grip-lat-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Grip Lat Pull Down',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-pull-down',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Shotgun Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/standing-one-arm-cable-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'V-Bar Pull Down',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/v-bar-pull-down',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rope Straight Arm Pull Down',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/rope-straight-arm-pull-down',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Eccentric Only Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/eccentric-only-pull-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/close-grip-pull-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Underhand Close Grip Lateral Pulldown',
			equipment: Equipment.CABLE,
			description:
				'https://www.muscleandstrength.com/exercises/underhand-close-grip-lat-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'V-Bar Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/v-bar-pull-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/weighted-pull-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Resistance Band Assisted Pull Up (From Knee)',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/band-assisted-pull-up-from-knee',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Band Assisted Chin Up (From Foot)',
			equipment: Equipment.BAND,
			description:
				'https://www.muscleandstrength.com/exercises/resistance-banded-chin-up-from-foot',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/weighted-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Behind Neck Lat Pull Down',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/behind-neck-lat-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Resistance Band Assisted Pull Up (From Foot)',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/band-assisted-pull-up-from-foot',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Gironda Sternum Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/gironda-sternum-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lateral Pulldown (Rope Extension)',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/rope-lat-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Eccentric Only Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/eccentric-only-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Close Grip Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/close-grip-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Grip Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-chin-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Chin Up With Leg Raise',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/chin-up-with-leg-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Pull Up with Leg Raise',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/pull-up-with-leg-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Archer Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/archer-pull-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Overhand Close Grip Lateral Pulldown',
			equipment: Equipment.CABLE,
			description:
				'https://www.muscleandstrength.com/exercises/overhand-close-grip-lat-pull-down.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Chin Up Hang',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/weighted-chin-up-hang',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Triple Pause Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/triple-pause-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'L-Sit Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/l-sit-pull-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Thibaudeau Kayak Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/thibaudeau-kayak-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Band Resisted Chin Up',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/band-resisted-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Pause Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/single-pause-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Double Pause Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/double-pause-pull-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Pull Up Hang',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/weighted-pull-up-hang',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Arm Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/one-arm-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Pause Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/single-pause-pull-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Around the Bar Chin Ups',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/around-the-bar-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'L-Sit Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/l-sit-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Band Assisted Chin Up (From Knee)',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/band-assisted-chin-up-from-knee',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Mixed Grip Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/mixed-grip-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rope Pull Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/rope-pull-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Double Pause Chin Up',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/double-pause-chin-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.LATISSIMUS,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Deadlift',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-deadlift.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Superman',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/superman',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Deadlift',
			equipment: Equipment.SMITH_MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-deadlift.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '90/90 Hip Crossover',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/90-90-hip-crossover',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rollover Into V-Sits',
			equipment: Equipment.NONE,
			description: 'https://www.muscleandstrength.com/exercises/rollover-into-v-sits',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Arm Dumbbell Row',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bent Over Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bent Over Dumbbell Row',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/bent-over-dumbbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Cable Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/seated-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Machine Row',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/machine-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Neutral Grip Chest Supported Dumbbell Row',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/chest-supported-dumbbell-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'T-Bar Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/bent-over-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Feet Elevated Inverted Row',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-bodyweight-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Tripod Dumbbell Row',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/tripod-dumbbell-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Bent-Over Dumbbell Row',
			equipment: Equipment.DUMBBELL,
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-bent-over-dumbbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Bench Two Arm Dumbbell Row',
			equipment: Equipment.DUMBBELL,
			description:
				'https://www.muscleandstrength.com/exercises/incline-bench-two-arm-dumbbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Bent-Over Row',
			equipment: Equipment.SMITH_MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-bent-over-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Bent Over Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/reverse-grip-bent-over-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Machine T-Bar Row',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/machine-t-bar-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Inverted Row',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/high-inverted-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Pendlay Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/pendlay-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bent Over Kettlebell Row',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/bent-over-kettlebell-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Renegade Row',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/renegade-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Chest Supported Dumbbell Row with Isohold',
			equipment: Equipment.DUMBBELL,
			description:
				'https://www.muscleandstrength.com/exercises/chest-supported-dumbbell-row-with-isohold',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Row (Rope Extension)',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/seated-row-using-rope.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Arm Machine Row',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/one-arm-machine-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: "World's Greatest Stretch",
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/worlds-greatest-stretch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},

		{
			title: 'Meadows Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/meadows-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Bench Barbell Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/incline-bench-barbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Seated Cable Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/one-arm-cable-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Incline Bench Barbell Row',
			equipment: Equipment.BARBELL,
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-incline-bench-barbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},

		{
			title: 'Incline Bench Cable Row (Rope Extension)',
			equipment: Equipment.CABLE,
			description:
				'https://www.muscleandstrength.com/exercises/incline-bench-cable-row-rope-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Bent-Over Row',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/one-arm-bent-over-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rock Back Extension Rotation',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/rock-back-extension-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Incline Bench Cable Row',
			equipment: Equipment.CABLE,
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-incline-bench-cable-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated High Cable Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/seated-high-cable-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Inverted Rope Row',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/inverted-rope-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Incline Bench Cable Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/incline-bench-cable-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Row',
			equipment: Equipment.TRAP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/trap-bar-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},

		{
			title: 'Rope Crossover Seated Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/rope-crossover-seated-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Incline Bench Two-Arm Dumbbell Row',
			equipment: Equipment.DUMBBELL,
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-incline-bench-two-arm-dumbbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine One-Arm Row',
			equipment: Equipment.SMITH_MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-one-arm-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Palm Rotational Row',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/palm-rotational-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Palms In Bent-Over Dumbbell Row',
			equipment: Equipment.DUMBBELL,
			description:
				'https://www.muscleandstrength.com/exercises/palms-in-bent-over-dumbbell-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bench T-Spine Mobilization',
			equipment: Equipment.BENCH,
			description: 'https://www.muscleandstrength.com/exercises/bench-t-spine-mobilization',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Bent-Over Row (EZ Bar)',
			equipment: Equipment.BARBELL,
			description:
				'https://www.muscleandstrength.com/exercises/ez-bar-reverse-grip-bent-over-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Quadruped Extension Rotation',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/quadruped-extension-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dante Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/dante-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Ring Inverted Row with Chains',
			equipment: Equipment.CHAINS,
			description: 'https://www.muscleandstrength.com/exercises/ring-inverted-row-with-chains',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Machine T-Bar Row',
			equipment: Equipment.MACHINE,
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-machine-t-bar-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Batwing Reverse Sled Drag',
			equipment: Equipment.SLED,
			description: 'https://www.muscleandstrength.com/exercises/batwing-reverse-sled-drag',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Palm Rotational Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/cable-palm-rotational-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Yoga Plex',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/yoga-plex',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Machine T-Bar Row',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/banded-machine-t-bar-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'High Pull Sled Drag',
			equipment: Equipment.SLED,
			description: 'https://www.muscleandstrength.com/exercises/high-pull-sled-drag',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Deadstop Rack Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/deadstop-rack-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Lunge Sled Row',
			equipment: Equipment.SLED,
			description: 'https://www.muscleandstrength.com/exercises/reverse-lunge-sled-row',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Grip Smith Machine Bent-Over Row',
			equipment: Equipment.SMITH_MACHINE,
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-smith-machine-bent-over-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.UPPER_BACK,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Shrug',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-shrugs.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Upright Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/upright-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Shrug',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/barbell-shrug.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Grip Upright Row',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-upright-rows.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Dumbbell Shrug',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-shrug.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One-Arm Dumbbell Upright Row',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-upright-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'High Pull',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/high-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Shrug',
			equipment: Equipment.SMITH_MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-shrug.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Shrug',
			equipment: Equipment.TRAP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/trap-bar-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Tate Press',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/tate-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Overhead Barbell Shrug',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/overhead-barbell-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Calf Machine Shrug',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/standing-calf-machine-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Shrug',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/cable-shrug.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'T-Bar Machine Shrug',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/t-bar-machine-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Inverted Shrug',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/inverted-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Clean Shrug',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/clean-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Row to Neck',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/cable-row-to-neck.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Snatch Grip Barbell Shrug',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/snatch-grip-barbell-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '2 KB Kettlebell Sumo Deadlift High Pull',
			equipment: Equipment.KETTLEBELL,
			description:
				'https://www.muscleandstrength.com/exercises/2-kb-kettlebell-sumo-deadlift-high-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Gittleson Shrug',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/gittleson-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Snatch Shrug',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/snatch-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Behind-The-Back Barbell Shrug',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/behind-the-back-barbell-shrug.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Sumo High Pull',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/sumo-high-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Cable Upright Row',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/lying-cable-upright-row.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Cable Shrug',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/seated-cable-shrug.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '1 KB Kettlebell Sumo Deadlift High Pull',
			equipment: Equipment.KETTLEBELL,
			description:
				'https://www.muscleandstrength.com/exercises/1-kb-kettlebell-sumo-deadlift-high-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Snatch Grip High Pull',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/snatch-grip-high-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Machine Shrug',
			equipment: Equipment.MACHINE,
			description: 'https://www.muscleandstrength.com/exercises/machine-shrug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Cable Shrug',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/lying-cable-shrug.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.TRAPEZE,
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
