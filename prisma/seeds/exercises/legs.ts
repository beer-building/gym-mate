import { Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Lunges with dumbbells',
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
							muscle: Muscle.OUTER_THIGH,
							value: 2
						}
					]
				}
			}
		},
		{
			title: 'Machine Hack Squat',
			description: 'https://www.muscleandstrength.com/exercises/hack-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.BUTTOCKS,
							value: 8
						},
						{
							muscle: Muscle.FRONT_THIGH,
							value: 10
						},
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 5
						},
						{
							muscle: Muscle.INNER_THIGH,
							value: 5
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
			title: 'Leg Press',
			description: 'https://www.muscleandstrength.com/exercises/45-degree-leg-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 9
						},
						{
							muscle: Muscle.BUTTOCKS,
							value: 7
						},
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 5
						},
						{
							muscle: Muscle.INNER_THIGH,
							value: 5
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
			title: 'Dumbbell Goblet Squat',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-goblet-squat',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 7
						},
						{
							muscle: Muscle.BUTTOCKS,
							value: 7
						},
						{
							muscle: Muscle.SMALL_OF_THE_BACK,
							value: 7
						},
						{
							muscle: Muscle.INNER_THIGH,
							value: 7
						},
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 4
						},
						{
							muscle: Muscle.TRAPEZE,
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
		// TODO: Insert correct value instead of 0
		{
			title: 'Hip Abduction Machine',
			description: 'https://www.muscleandstrength.com/exercises/hip-abduction-machine.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.OUTER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Hip Abduction',
			description: 'https://www.muscleandstrength.com/exercises/cable-hip-abduction.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.OUTER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hip Adduction Machine',
			description: 'https://www.muscleandstrength.com/exercises/hip-adduction-machine.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.INNER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Deep Squat Prying',
			description: 'https://www.muscleandstrength.com/exercises/deep-squat-prying',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.INNER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rocking Frog Stretch',
			description: 'https://www.muscleandstrength.com/exercises/rocking-frog-stretch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.INNER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternating Lateral Lunge with Overhead Reach',
			description:
				'https://www.muscleandstrength.com/exercises/alternating-lateral-lunge-with-overhead-reach',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.INNER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Hip Adduction',
			description: 'https://www.muscleandstrength.com/exercises/cable-hip-adduction.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.INNER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Adductor Foam Rolling',
			description: 'https://www.muscleandstrength.com/exercises/adductor-foam-rolling',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.INNER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lateral Kneeling Adductor Mobilization',
			description:
				'https://www.muscleandstrength.com/exercises/lateral-kneeling-adductor-mobilization',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.INNER_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Stiff Leg Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-stiff-leg-deadlift.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Conventional Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/deadlifts.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Stiff Leg Deadlift',
			description:
				'https://www.muscleandstrength.com/exercises/stiff-leg-deadlift-aka-romanian-deadlift.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Leg Curl',
			description: 'https://www.muscleandstrength.com/exercises/leg-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Romanian Deadlift (AKA RDL)',
			description: 'https://www.muscleandstrength.com/exercises/romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Hamstring Curl',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-hamstring-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Rack Pull',
			description: 'https://www.muscleandstrength.com/exercises/trap-bar-rack-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/trap-bar-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Leg Curl',
			description: 'https://www.muscleandstrength.com/exercises/seated-leg-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Single Leg Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-single-leg-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Cable Hamstring Curl',
			description: 'https://www.muscleandstrength.com/exercises/standing-cable-hamstring-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Sumo Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/sumo-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Landmine RDL',
			description: 'https://www.muscleandstrength.com/exercises/landmine-romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Hack Squat',
			description: 'https://www.muscleandstrength.com/exercises/reverse-hack-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Swing',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-swing',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Nordic Hamstring Curl (Bodyweight)',
			description: 'https://www.muscleandstrength.com/exercises/nordic-hamstring-curl-bodyweight',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Romanian Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Curl',
			description: 'https://www.muscleandstrength.com/exercises/single-leg-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Leg Curl (SHELC)',
			description: 'https://www.muscleandstrength.com/exercises/exercise-ball-hamstring-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg One Dumbbell Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/single-leg-one-dumbbell-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Band Assisted Nordic Hamstring Curl',
			description:
				'https://www.muscleandstrength.com/exercises/band-assisted-nordic-hamstring-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '1 Kettlebell Single Leg Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/1-kettlebell-single-leg-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Glute Ham Raise (GHR)',
			description: 'https://www.muscleandstrength.com/exercises/glute-ham-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Double Kettlebell Suitcase Deadlift',
			description:
				'https://www.muscleandstrength.com/exercises/double-kettlebell-suitcase-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Partner Assisted Nordic Hamstring Curls',
			description:
				'https://www.muscleandstrength.com/exercises/partner-assisted-nordic-hamstring-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Sumo Deadlift (1 KB)',
			description: 'https://www.muscleandstrength.com/exercises/one-kettlebell-sumo-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Band Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/reverse-band-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Valslide Leg Curl',
			description: 'https://www.muscleandstrength.com/exercises/single-leg-valslide-leg-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Cable Hamstring Curl',
			description: 'https://www.muscleandstrength.com/exercises/lying-cable-hamstring-curl.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Inchworm',
			description: 'https://www.muscleandstrength.com/exercises/inchworm',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Valslide Leg Curl',
			description: 'https://www.muscleandstrength.com/exercises/valslide-leg-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Conventional Block Pull Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/conventional-block-pull-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Romanian Deadlift',
			description: 'https://www.muscleandstrength.com/content/trap-bar-romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Stiff Leg Deadlift',
			description:
				'https://www.muscleandstrength.com/exercises/smith-machine-stiff-leg-deadlift.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Sumo Romanian Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/barbell-sumo-romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Landmine Romanian Deadlift',
			description:
				'https://www.muscleandstrength.com/exercises/single-leg-landmine-romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Arm Kettlebell Swing',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-kettlebell-swing',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Snatch Grip Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/snatch-grip-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Snatch Grip Deficit Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/snatch-grip-deficit-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'American Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/american-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Double Kettlebell Swing',
			description: 'https://www.muscleandstrength.com/exercises/double-kettlebell-swing',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Stiff Leg Deadlift (On Bench)',
			description: 'https://www.muscleandstrength.com/exercises/stiff-leg-deadlift-on-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Deficit Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/trap-bar-deficit-deadlifts',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Trap Bar Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/banded-trap-bar-deficit',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Sumo Deficit Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/sumo-deficit-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'American Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/american-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Exercise Ball Leg Curl',
			description: 'https://www.muscleandstrength.com/exercises/single-leg-exercise-ball-leg-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Conventional Deadlift Against Chains',
			description:
				'https://www.muscleandstrength.com/exercises/conventional-deadlift-against-chains',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kickstand Kettle Bell 1 Leg Deadlift',
			description:
				'https://www.muscleandstrength.com/exercises/kickstand-kettle-bell-one-leg-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Paused Trap Bar Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/paused-trap-bar-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Glute Ham Raise',
			description: 'https://www.muscleandstrength.com/exercises/banded-glute-ham-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Split Jump',
			description: 'https://www.muscleandstrength.com/exercises/barbell-split-jump.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Paused Sumo Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/paused-sumo-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Plate Resisted Glute Ham Raise',
			description: 'https://www.muscleandstrength.com/exercises/plate-resisted-glute-ham-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Snatch Grip Romanian Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/snatch-grip-romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Jefferson Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/jefferson-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Snatch Grip Romanian Deadlift',
			description:
				'https://www.muscleandstrength.com/exercises/single-leg-snatch-grip-romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Band Sumo Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/reverse-band-sumo-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Razor Curl',
			description: 'https://www.muscleandstrength.com/exercises/razor-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Stiff Leg Deadlift (On Bench)',
			description:
				'https://www.muscleandstrength.com/exercises/dumbbell-stiff-leg-deadlift-on-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Double Kettlebell Single Leg Deadlift',
			description:
				'https://www.muscleandstrength.com/exercises/double-kettlebell-single-leg-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Conventional Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/banded-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Snatch Grip Block Pull Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/snatch-grip-block-pull-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Barbell Romanian Deadlift',
			description:
				'https://www.muscleandstrength.com/exercises/single-leg-barbell-romanian-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Trap Bar Deadlift Against Chains',
			description: 'https://www.muscleandstrength.com/exercises/trap-bar-deadlift-against-chains',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hamstring Foam Rolling',
			description: 'https://www.muscleandstrength.com/exercises/foam-rolling-hamstrings',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Deficit Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/deficit-deadlifts',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Sumo Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/banded-sumo-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Sumo Block Pull Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/sumo-block-pull-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '1 Kettlebell Suitcase Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/1-kettlebell-suitcase-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '2 to 1 Exercise Ball Hamstring Curl (SHELC)',
			description:
				'https://www.muscleandstrength.com/exercises/2-to-1-exercise-ball-hamstring-curl',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hamstring Tiger Tail',
			description: 'https://www.muscleandstrength.com/exercises/hamstring-tiger-tail',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Straight Leg Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/straight-leg-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reeves Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/reeves-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Fat Bar Deadlift',
			description: 'https://www.muscleandstrength.com/exercises/fat-bar-deadlift',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.POSTERIOR_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Back Squat',
			description: 'https://www.muscleandstrength.com/exercises/squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Goblet Squat',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-goblet-squat',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Leg Extension',
			description: 'https://www.muscleandstrength.com/exercises/leg-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Squat',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Lunge',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Step Up',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-step-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Leg Dumbbell Squat (AKA Dumbbell Bulgarian Split Squat)',
			description:
				'https://www.muscleandstrength.com/exercises/one-leg-dumbbell-squat-aka-bulgarian-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Machine Hack Squat',
			description: 'https://www.muscleandstrength.com/exercises/hack-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Rear Lunge',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-rear-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Front Squat',
			description: 'https://www.muscleandstrength.com/exercises/front-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Walking Lunge',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-walking-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Split Squat',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-split-squat',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Plie Squat',
			description: 'https://www.muscleandstrength.com/exercises/pile-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Frog Squat',
			description: 'https://www.muscleandstrength.com/exercises/frog-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Walking Lunge',
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-walking-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Jump Squat',
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-jump-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Prisoner Squat',
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Lunge',
			description: 'https://www.muscleandstrength.com/exercises/barbell-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Squat',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Side Lunge',
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-side-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Reverse Lunge',
			description: 'https://www.muscleandstrength.com/exercises/barbell-rear-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Hack Squat',
			description: 'https://www.muscleandstrength.com/exercises/barbell-hack-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Narrow Stance High Bar Back Squat',
			description: 'https://www.muscleandstrength.com/exercises/narrow-stance-high-bar-squat',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Leg 45 Degree Leg Press',
			description: 'https://www.muscleandstrength.com/exercises/one-leg-45-degree-leg-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Lunge',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Front Squat',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-front-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Single Leg Extension',
			description: 'https://www.muscleandstrength.com/exercises/single-leg-extension.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Bodyweight Lunge',
			description: 'https://www.muscleandstrength.com/exercises/rear-bodyweight-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Sissy Squat',
			description: 'https://www.muscleandstrength.com/exercises/sissy-squat.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Prisoner Squat Jump',
			description: 'https://www.muscleandstrength.com/exercises/prisoner-jump-squat',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Box Squat',
			description: 'https://www.muscleandstrength.com/exercises/box-squat-shown-with-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Step Up',
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-step-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bodyweight Lunge',
			description: 'https://www.muscleandstrength.com/exercises/bodyweight-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Goblet Squat',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-goblet-squat',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Side Lunge',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-side-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Landmine Goblet Squat',
			description: 'https://www.muscleandstrength.com/exercises/landmine-goblet-squat',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Walking Barbell Lunge',
			description: 'https://www.muscleandstrength.com/exercises/walking-barbell-lunge.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Smith Machine Leg Press',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-leg-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '1 KB Kettlebell Snatch',
			description: 'https://www.muscleandstrength.com/exercises/1-kb-kettlebell-snatch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.FRONT_THIGH,
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
