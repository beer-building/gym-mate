import { Muscle, Prisma } from '@prisma/client'
import { createMigration } from '../helpers'

createMigration(async (prisma) => {
	const exercises: Array<Prisma.ExerciseCreateInput> = [
		{
			title: 'Classic bench press',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.CHEST, value: 10 },
						{ muscle: Muscle.TRICEPS, value: 6 },
						{ muscle: Muscle.FRONT_DELTA, value: 3 }
					]
				}
			}
		},
		{
			title: 'Dumbbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.CHEST, value: 10 },
						{ muscle: Muscle.TRICEPS, value: 6 },
						{ muscle: Muscle.FRONT_DELTA, value: 3 }
					]
				}
			}
		},
		{
			title: 'Incline Dumbbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/incline-dumbbell-bench-press.html',
			bodyLoad: {
				createMany: {
					data: [
						{ muscle: Muscle.CHEST, value: 8 },
						{ muscle: Muscle.TRICEPS, value: 6 },
						{ muscle: Muscle.FRONT_DELTA, value: 5 }
					]
				}
			}
		},
		{
			title: 'Dumbbell Pullover',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-pullover.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Dumbbell Flys',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Barbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/barbell-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Pec Dec',
			description: 'https://www.muscleandstrength.com/exercises/pec-dec.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Incline Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/incline-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Standing Cable Fly',
			description: 'https://www.muscleandstrength.com/exercises/cable-crossovers-(mid-chest).html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Hammer Strength Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/hammer-strength-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Close Grip Dumbbell Press (AKA Crush Press)',
			description: 'https://www.muscleandstrength.com/exercises/close-grip-dumbbell-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Incline Dumbbell Flys',
			description: 'https://www.muscleandstrength.com/exercises/incline-dumbbell-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Chest Dip',
			description: 'https://www.muscleandstrength.com/exercises/chest-dip.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Reverse Grip Dumbbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/reverse-dumbbell-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Cable Iron Cross',
			description: 'https://www.muscleandstrength.com/exercises/cable-crossovers.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Cable Crossovers (Upper Chest)',
			description:
				'https://www.muscleandstrength.com/exercises/cable-crossovers-(upper-chest).html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Hammer Strength Machine Incline Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/hammer-strength-incline-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Standing Low to High Cable Fly',
			description: 'https://www.muscleandstrength.com/exercises/cable-lower-chest-raise.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Decline Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/decline-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up',
			description: 'https://www.muscleandstrength.com/exercises/push-up.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Decline Dumbbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/decline-dumbbell-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'One Arm Dumbbell Fly',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-fly',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Smith Machine Incline Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/incline-smith-machine-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Standing High to Low Cable Fly',
			description: 'https://www.muscleandstrength.com/exercises/cable-crossovers-bent-over.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Smith Machine Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/smith-machine-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Dumbbell Twist Press',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-twist-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Plyometric Push Up',
			description: 'https://www.muscleandstrength.com/exercises/plyometric-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Weighted Chest Dip',
			description: 'https://www.muscleandstrength.com/exercises/weighted-chest-dip.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Cable Chest Press',
			description: 'https://www.muscleandstrength.com/exercises/cable-chest-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Stretch Push Up (On Risers)',
			description: 'https://www.muscleandstrength.com/exercises/deep-push-ups.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Barbell Pullover',
			description: 'https://www.muscleandstrength.com/exercises/barbell-pullover.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Decline Dumbbell Flys',
			description: 'https://www.muscleandstrength.com/exercises/decline-dumbbell-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'One Arm Kettlebell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-kettlebell-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Eccentric Only Push Up',
			description: 'https://www.muscleandstrength.com/exercises/eccentric-only-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Decline Push Up (Feet on Bench)',
			description: 'https://www.muscleandstrength.com/exercises/decline-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: '2 Board Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/2-board-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Incline Cable Flys',
			description: 'https://www.muscleandstrength.com/exercises/incline-cable-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Wide Grip Barbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Alternate Dumbbell Bench Press (high start)',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-dumbbell-bench-press-high-start.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'One-Arm Dumbbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Fingertip Push Ups',
			description: 'https://www.muscleandstrength.com/exercises/fingertip-pushups',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Neutral Grip Dumbbell Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/palms-in-dumbbell-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Cross Body Arm Swings',
			description: 'https://www.muscleandstrength.com/exercises/cross-body-arm-swings',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Dumbbell Twist Fly',
			description: 'https://www.muscleandstrength.com/exercises/dumbbell-twist-fly',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Kettlebell Push Up',
			description: 'https://www.muscleandstrength.com/exercises/kettlebell-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Flat Bench Cable Flys',
			description: 'https://www.muscleandstrength.com/exercises/flat-bench-cable-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Paused Push Up',
			description: 'https://www.muscleandstrength.com/exercises/paused-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Incline Dumbbell Twist Fly',
			description: 'https://www.muscleandstrength.com/exercises/incline-dumbbell-twist-fly',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Reverse Grip Dumbbell Squeeze Press',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-dumbbell-squeeze-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Lying Cable Pullover',
			description: 'https://www.muscleandstrength.com/exercises/lying-cable-pullover.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Neutral Grip Incline Dumbbell Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/palms-in-incline-dumbbell-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Floor Press',
			description: 'https://www.muscleandstrength.com/exercises/floor-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Band Suspended Kettlebell Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/band-suspended-kettlebell-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Decline Cable Flys',
			description: 'https://www.muscleandstrength.com/exercises/decline-cable-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Wide Grip Decline Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-decline-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Knee Push-Up',
			description: 'https://www.muscleandstrength.com/exercises/knee-pushups.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Cable Inner Chest Press',
			description: 'https://www.muscleandstrength.com/exercises/cable-inner-chest-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Decline Smith Machine Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/decline-smith-machine-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Incline Push Ups',
			description: 'https://www.muscleandstrength.com/exercises/incline-push-ups.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Wall Push Up',
			description: 'https://www.muscleandstrength.com/exercises/wall-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Tall Kneeling Medicine Ball Chest Pass',
			description:
				'https://www.muscleandstrength.com/exercises/tall-kneeling-medicine-ball-chest-pass',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Decline Dumbbell Twist Fly',
			description: 'https://www.muscleandstrength.com/exercises/decline-dumbbell-twist-fly',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Decline Cable Chest Press',
			description: 'https://www.muscleandstrength.com/exercises/decline-cable-chest-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Ring Fly',
			description: 'https://www.muscleandstrength.com/exercises/ring-fly',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Wide Grip Push Ups',
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-push-ups.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Incline Cable Chest Press',
			description: 'https://www.muscleandstrength.com/exercises/incline-cable-chest-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Bosu Ball Push Up',
			description: 'https://www.muscleandstrength.com/exercises/bosu-ball-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Shoulder Tap Push Up',
			description: 'https://www.muscleandstrength.com/exercises/shoulder-tap-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Reverse Grip Incline Push Up',
			description: 'https://www.muscleandstrength.com/exercises/reverse-grip-incline-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Sled Press',
			description: 'https://www.muscleandstrength.com/exercises/sled-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up with Knee Drive',
			description: 'https://www.muscleandstrength.com/exercises/push-up-with-knee-drive',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Reverse Grip Incline Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-incline-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Pec Foam Rolling',
			description: 'https://www.muscleandstrength.com/exercises/foam-rolling-pecs',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up with Mountain Climber',
			description: 'https://www.muscleandstrength.com/exercises/push-up-with-mountain-climber',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push-Up (On Bench)',
			description: 'https://www.muscleandstrength.com/exercises/bench-pushups.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Chain Fly',
			description: 'https://www.muscleandstrength.com/exercises/chain-fly',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Straight Bar Dip',
			description: 'https://www.muscleandstrength.com/exercises/straight-bar-dip',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Plyometric Clapping Push Up',
			description: 'https://www.muscleandstrength.com/exercises/plyometric-clapping-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Dumbbell Bench Press Rotational Grip',
			description:
				'https://www.muscleandstrength.com/exercises/rotational-grip-dumbbell-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Neutral Grip Decline Dumbbell Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/palms-in-decline-dumbbell-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Barbell Pullover And Press',
			description: 'https://www.muscleandstrength.com/exercises/barbell-pullover-and-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Pec Lacrosse Ball',
			description: 'https://www.muscleandstrength.com/exercises/pec-lacrosse-ball',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Reverse Grip Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/reverse-grip-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Exercise Ball Dumbbell Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/swiss-ball-dumbbell-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Wide Grip Incline Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/wide-grip-incline-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Ring Push Up',
			description: 'https://www.muscleandstrength.com/exercises/ring-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Alternating Incline Dumbbell Fly',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-incline-dumbbell-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Self-Assisted Straight Bar Dip',
			description: 'https://www.muscleandstrength.com/exercises/self-assisted-straight-bar-dip',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Single Leg Medicine Ball Chest Pass Wall Tap',
			description:
				'https://www.muscleandstrength.com/exercises/single-leg-medicine-ball-chest-pass-wall-tap',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Smith Machine Wide Grip Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/smith-machine-wide-grip-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Sled Press',
			description: 'https://www.muscleandstrength.com/exercises/sled-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up with Knee Drive',
			description: 'https://www.muscleandstrength.com/exercises/push-up-with-knee-drive',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Reverse Grip Incline Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/reverse-grip-incline-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Pec Foam Rolling',
			description: 'https://www.muscleandstrength.com/exercises/foam-rolling-pecs',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Wide Reverse Grip Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/wide-reverse-grip-bench-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Standing PVC Pec Mobilization',
			description: 'https://www.muscleandstrength.com/exercises/standing-pvc-pec-mobilization',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Bird Dog Push Up',
			description: 'https://www.muscleandstrength.com/exercises/bird-dog-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Pec Minor Dip',
			description: 'https://www.muscleandstrength.com/exercises/pec-minor-dip',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: '1 Leg Push Up',
			description: 'https://www.muscleandstrength.com/exercises/1-leg-pushup.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up Plus',
			description: 'https://www.muscleandstrength.com/exercises/push-up-plus',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Lying Medicine Ball Power Drop',
			description: 'https://www.muscleandstrength.com/exercises/lying-medicine-ball-power-drop',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: '1 Board Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/1-board-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up Jacks',
			description: 'https://www.muscleandstrength.com/exercises/push-up-jacks',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Feet on Wall Push Up',
			description: 'https://www.muscleandstrength.com/exercises/feet-on-wall-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Alternating Dumbbell Fly',
			description: 'https://www.muscleandstrength.com/exercises/alternate-dumbbell-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: '3 Board Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/3-board-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Exercise Ball Push Up',
			description: 'https://www.muscleandstrength.com/exercises/swiss-ball-push-up.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up to Side Plank',
			description: 'https://www.muscleandstrength.com/exercises/push-up-to-side-plank',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Alternating Dumbbell Bench Press (Low Start)',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-dumbbell-bench-press-low-start.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Half Kneeling Medicine Ball Chest Pass',
			description:
				'https://www.muscleandstrength.com/exercises/half-kneeling-medicine-ball-chest-pass',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up (Feet on Swiss Ball)',
			description: 'https://www.muscleandstrength.com/exercises/incline-swiss-ball-push-up.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Resistance Banded Dumbbell Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/resistance-banded-dumbbell-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Lateral Hand Walk Push Up',
			description: 'https://www.muscleandstrength.com/exercises/lateral-hand-walk-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Half Kneeling PVC Pec Mobilization',
			description: 'https://www.muscleandstrength.com/exercises/half-kneeling-pvc-pec-mobilization',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Alternating Dumbbell Bench Press on Exercise Ball',
			description:
				'https://www.muscleandstrength.com/exercises/alternating-dumbbell-bench-press-exercise-ball',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Knuckle Push Up',
			description: 'https://www.muscleandstrength.com/exercises/knuckle-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Guillotine Press',
			description: 'https://www.muscleandstrength.com/exercises/guillotine-press.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Exercise Ball Dumbbell Fly',
			description: 'https://www.muscleandstrength.com/exercises/swiss-ball-dumbbell-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Rack Pec Stretch',
			description: 'https://www.muscleandstrength.com/exercises/rack-pec-stretch',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Eccentric Only Incline Push Up',
			description: 'https://www.muscleandstrength.com/exercises/eccentric-only-incline-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Valslide Push Up',
			description: 'https://www.muscleandstrength.com/exercises/valslide-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Alternating Dumbbell Fly',
			description: 'https://www.muscleandstrength.com/exercises/alternate-dumbbell-flys.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: '3 Board Bench Press',
			description: 'https://www.muscleandstrength.com/exercises/3-board-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Exercise Ball Push Up',
			description: 'https://www.muscleandstrength.com/exercises/swiss-ball-push-up.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up to Side Plank',
			description: 'https://www.muscleandstrength.com/exercises/push-up-to-side-plank',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Alternating Dumbbell Bench Press (Low Start)',
			description:
				'https://www.muscleandstrength.com/exercises/alternate-dumbbell-bench-press-low-start.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Half Kneeling Medicine Ball Chest Pass',
			description:
				'https://www.muscleandstrength.com/exercises/half-kneeling-medicine-ball-chest-pass',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Push Up (Feet on Swiss Ball)',
			description: 'https://www.muscleandstrength.com/exercises/incline-swiss-ball-push-up.html',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Spiderman Push Up',
			description: 'https://www.muscleandstrength.com/exercises/spiderman-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Resistance Banded Dumbbell Bench Press',
			description:
				'https://www.muscleandstrength.com/exercises/resistance-banded-dumbbell-bench-press',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Lateral Hand Walk Push Up',
			description: 'https://www.muscleandstrength.com/exercises/lateral-hand-walk-push-up',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
		},
		{
			title: 'Half Kneeling PVC Pec Mobilization',
			description: 'https://www.muscleandstrength.com/exercises/half-kneeling-pvc-pec-mobilization',
			bodyLoad: { createMany: { data: [{ muscle: Muscle.CHEST, value: 0 }] } }
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
