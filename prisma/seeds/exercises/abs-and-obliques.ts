import { Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Hanging Leg Raise',
			bodyLoad: {
				createMany: {
					data: [
						{
							muscle: Muscle.ABS,
							value: 8
						},
						{
							muscle: Muscle.FOREARMS,
							value: 3
						}
					]
				}
			}
		},
		{
			title: 'Standing side bends with dumbbells',
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
			title: 'Valslide Body Saw',
			description: 'https://www.muscleandstrength.com/exercises/valslide-body-saw',
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
			title: 'Valslide Body Saw',
			description: 'https://www.muscleandstrength.com/exercises/valslide-body-saw',
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
			title: 'Medicine Ball Dead Bug',
			description: 'https://www.muscleandstrength.com/exercises/medicine-ball-dead-bug',
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
