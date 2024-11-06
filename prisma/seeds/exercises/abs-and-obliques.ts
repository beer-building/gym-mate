import { Muscle, Equipment, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Standing side bends with dumbbells',
			equipment: Equipment.DUMBBELL,
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.OBLIQUES,
							value: 10
						}
					]
				}
			}
		},
		// TODO: Fill correct body load
		{
			title: 'Lying Floor Leg Raise',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/lying-floor-leg-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Cable Crunch',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/cable-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Crunch',
			equipment: Equipment.PLATE,
			description: 'https://www.muscleandstrength.com/exercises/weighted-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hanging Leg Raise',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/hanging-leg-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Plank',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/hover.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Ab Crunch',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/ab-crunch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dumbbell Side Bends',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-side-bends.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Side Plank',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/side-hover.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Sit Up',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/decline-situp.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Abdominal Barbell Rollouts',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/abdominal-barbell-rollouts.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Sit Up',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/sit-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Abdominal Air Bike (AKA Bicycle)',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/abdominal-air-bike.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Crunch',
			equipment: Equipment.BALL,
			description: 'https://www.muscleandstrength.com/exercises/swiss-ball-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Hanging Knee Raise',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/twisting-hanging-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Rotating Mountain Climber',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/rotating-mountain-climber',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Floor Crunch (legs on bench)',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/floor-crunch-legs-on-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hanging Knee Raise',
			equipment: Equipment.PULL_UP_BAR,
			description: 'https://www.muscleandstrength.com/exercises/hanging-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Russian Twist',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/russian-twist.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Barbell Twist',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/seated-barbell-twist.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Plank to Hip Raise',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/plank-to-hip-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Stomach Vacuum',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/standing-stomach-vacuum',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternate Straight Leg Lower',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/alternate-straight-leg-lowering',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Floor Knee Tuck',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/lying-floor-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Chair Leg Raise',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/horizontal-leg-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dead Bug',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/dead-bug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Turkish Get Up',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/turkish-get-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Leg Raise With Hip Thrust',
			equipment: Equipment.BODYWEIGHT,
			description:
				'https://www.muscleandstrength.com/exercises/lying-leg-raise-with-hip-thrust.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Bench Leg Raise',
			equipment: Equipment.BENCH,
			description: 'https://www.muscleandstrength.com/exercises/lying-bench-leg-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Pallof Press',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/pallof-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Straight Leg Toe Touch (Floor Toe Reach)',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/floor-reach.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Abdominal Hip Thrust',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/hip-thrusts.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bench Jack Knife',
			equipment: Equipment.BENCH,
			description: 'https://www.muscleandstrength.com/exercises/bench-jack-knife.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Turkish Get Up to Knee',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/turkish-get-up-to-knee',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hollow Body Hold',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/hollow-body-hold',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Abdominal Reach',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/decline-abdominal-reach.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Alternate Floor Leg Raise',
			equipment: Equipment.BODYWEIGHT,
			description:
				'https://www.muscleandstrength.com/exercises/lying-alternate-floor-leg-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Side Crunch With Leg Lift',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/side-crunch-with-leg-lift.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Barbell Twist',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/standing-barbell-twist.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Frog Sit Up',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/frog-sit-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Half Kneeling Push-Pull',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/half-kneeling-push-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Plank With Feet On Bench',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/plank-with-feet-on-bench.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Leg Tucks',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/seated-leg-tucks.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Dead Bug',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-dead-bug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Bench Crunch',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/twisting-bench-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Half Kneeling Push-Pull',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/half-kneeling-push-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Floor Crunch',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/twisting-floor-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Stir the Pot on Exercise Ball',
			equipment: Equipment.BALL,
			description: 'https://www.muscleandstrength.com/exercises/stir-the-pot-on-exercise-ball',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Half Kneeling Pallof Press',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/half-kneeling-pallof-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Oblique Cable Crunch',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/standing-oblique-cable-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Alternate Heel Touches',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/lying-heel-touches.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reach And Catch',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/reach-and-catch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Reverse Crunch to Dead Bug',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/reverse-crunch-to-dead-bug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Decline Dumbbell Situps',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/decline-dumbbell-situp.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Weighted Twist',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/decline-weighted-twist.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Roman Chair Knee Raise',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/chair-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Pallof Press with Rotation',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/pallof-press-with-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Bench Leg Raise',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/decline-bench-leg-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Standing Cable Crunch',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/standing-cable-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Leg Raise With Hip Thrust',
			equipment: Equipment.BODYWEIGHT,
			description:
				'https://www.muscleandstrength.com/exercises/decline-leg-raise-with-hip-thrust.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Climbs',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/barbell-climbs',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Alternate Knee Raise',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/lying-alternate-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: '3 Month Position Kettlebell Pullover',
			equipment: Equipment.KETTLEBELL,
			description:
				'https://www.muscleandstrength.com/exercises/3-month-position-kettlebell-pullover',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Abdominal Pendulum',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/abdominal-pendulum.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Shoulder Taps',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/shoulder-taps',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Hands Overhead Ab Crunch',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/hands-overhead-ab-crunch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Upper Body Band Resistance Dead Bug',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/upper-body-band-resisted-dead-bug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Straight Leg Toe Touch',
			equipment: Equipment.PLATE,
			description: 'https://www.muscleandstrength.com/exercises/weighted-straight-leg-toe-touch',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Ipsilateral Bird Dog',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/ipsilateral-bird-dog',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Hanging Knee Raise',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/weighted-hanging-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kneeling Dumbbell Hold to Stand',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/kneeling-dumbbell-hold-to-stand',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wall Press 90/90 Extension',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/wall-press-90-90-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Kettlebell Windmill',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-windmill',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Stance Cable Anti-Rotation',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/wide-stance-cable-anti-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Contralateral Bird Dog',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/contralateral-bird-dog',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Lying Cable Crunch',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/twisting-lying-cable-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Split Stance Pallof Press',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/split-stance-pallof-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Side Touches',
			equipment: Equipment.PLATE,
			description: 'https://www.muscleandstrength.com/exercises/weighted-side-touches.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Pallof Press',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/lying-pallof-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternate Reach And Catch',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/alternate-reach-and-catch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bottoms Up Kettlebell Turkish Get Up',
			equipment: Equipment.KETTLEBELL,
			description:
				'https://www.muscleandstrength.com/exercises/bottoms-up-kettlebell-turkish-get-up',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Lying Cable Crunch',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/twisting-lying-cable-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Split Stance Pallof Press',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/split-stance-pallof-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Side Touches',
			equipment: Equipment.PLATE,
			description: 'https://www.muscleandstrength.com/exercises/weighted-side-touches.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Pallof Press',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/lying-pallof-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Alternate Reach And Catch',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/alternate-reach-and-catch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wall Press Heel Tap',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/wall-press-heel-tap',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Cable Crunch',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/lying-cable-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wall Press Straight Leg Extension',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/wall-press-straight-leg-extension',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Bench Cable Crunch',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/decline-bench-cable-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Dead Bug with Plates',
			equipment: Equipment.PLATE,
			description: 'https://www.muscleandstrength.com/exercises/dead-bug-with-plates',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Hip Roll',
			equipment: Equipment.BALL,
			description: 'https://www.muscleandstrength.com/exercises/exercise-ball-hip-roll.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Banded Alphabet',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/band-alphabet',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Decline Sit Up',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/twisting-decline-sit-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Seated Dumbbell Side Bends',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-side-bends.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Cable Knee Raise',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/decline-cable-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Leg Tuck',
			equipment: Equipment.BALL,
			description: 'https://www.muscleandstrength.com/exercises/exercise-ball-leg-tuck.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Exercise Ball Dead Bug',
			equipment: Equipment.BALL,
			description: 'https://www.muscleandstrength.com/exercises/exercise-ball-dead-bug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Cable Knee Raise',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/lying-cable-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Tall Kneeling Push-Pull',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/tall-kneeling-push-pull',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lower Body Band Resistance Dead Bug',
			equipment: Equipment.BAND,
			description:
				'https://www.muscleandstrength.com/exercises/lower-body-band-resistance-dead-bug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Bench Knee Raise',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/decline-bench-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Twisting Cable Crunch',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/twisting-cable-crunch.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'One Leg Lying Cable Knee Raise',
			equipment: Equipment.CABLE,
			description:
				'https://www.muscleandstrength.com/exercises/one-leg-lying-cable-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Wide Stance Cable Anti-Rotation',
			equipment: Equipment.CABLE,
			description: 'https://www.muscleandstrength.com/exercises/wide-stance-cable-anti-rotation',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Decline Bench Alternate Leg Raise',
			equipment: Equipment.BODYWEIGHT,
			description:
				'https://www.muscleandstrength.com/exercises/decline-bench-alternate-leg-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Chair Knee Raise',
			equipment: Equipment.DUMBBELL,
			description: 'https://www.muscleandstrength.com/exercises/weighted-chair-knee-raise.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bottoms Up Kettlebell Turkish Get Up to Hand',
			equipment: Equipment.KETTLEBELL,
			description:
				'https://www.muscleandstrength.com/exercises/bottoms-up-kettlebell-turkish-get-up-to-hand',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Straight Leg Dead Bug',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/straight-leg-dead-bug',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Weighted Exercise Ball Sit Up',
			equipment: Equipment.BALL,
			description: 'https://www.muscleandstrength.com/exercises/weighted-exercise-ball-sit-up.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Half Kneeling Adductor Pallof Press',
			equipment: Equipment.CABLE,
			description:
				'https://www.muscleandstrength.com/exercises/half-kneeling-adductor-pallof-press',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bottoms Up Kettlebell Turkish Get Up to Knee',
			equipment: Equipment.KETTLEBELL,
			description:
				'https://www.muscleandstrength.com/exercises/bottoms-up-kettlebell-turkish-get-up-to-knee',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Bird Dog with Band RNT',
			equipment: Equipment.BAND,
			description: 'https://www.muscleandstrength.com/exercises/bird-dog-with-band-rnt',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Turkish Get Up to Hand',
			equipment: Equipment.KETTLEBELL,
			description: 'https://www.muscleandstrength.com/exercises/turkish-get-up-to-hand',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lower Abdominal Hip Roll',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/lower-abdominal-hip-roll.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Barbell Side Bends',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/barbell-side-bends.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Lying Knee Tuck to Heel Raise',
			equipment: Equipment.BODYWEIGHT,
			description: 'https://www.muscleandstrength.com/exercises/knee-tuck-to-heel-raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
							value: 0
						}
					]
				}
			}
		},
		{
			title: 'Floor Barbell Twist',
			equipment: Equipment.BARBELL,
			description: 'https://www.muscleandstrength.com/exercises/floor-barbell-twist.html',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 0
						},
						{
							muscle: Muscle.OBLIQUES,
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
