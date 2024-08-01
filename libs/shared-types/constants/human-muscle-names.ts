import { Muscle } from '@prisma/client'

export const HUMAN_MUSCLE_NAMES: Record<Muscle, string> = {
	// BACK_AND_NECK
	[Muscle.SMALL_OF_THE_BACK]: 'Small of the back',
	[Muscle.LATISSIMUS]: 'Latissimus',
	[Muscle.TRAPEZE]: 'Trapeze',
	[Muscle.NECK]: 'Neck',

	[Muscle.BUTTOCKS]: 'Buttocks',

	// ABS_AND_OBLIQUES
	[Muscle.ABS]: 'Abs',
	[Muscle.OBLIQUES]: 'Obliques',

	// SHOULDERS
	[Muscle.FRONT_DELTA]: 'Front delta',
	[Muscle.MIDDLE_DELTA]: 'Middle delta',
	[Muscle.REAR_DELTA]: 'Rear delta',

	// HANDS
	[Muscle.BICEPS]: 'Biceps',
	[Muscle.TRICEPS]: 'Triceps',
	[Muscle.FOREARMS]: 'Forearms',

	[Muscle.CHEST]: 'Chest',

	// LEGS
	[Muscle.FRONT_THIGH]: 'Front thigh',
	[Muscle.POSTERIOR_THIGH]: 'Posterior thigh',
	[Muscle.INNER_THIGH]: 'Inner thigh',
	[Muscle.OUTER_THIGH]: 'Outer thigh',

	[Muscle.SHIN]: 'Shin'
}
