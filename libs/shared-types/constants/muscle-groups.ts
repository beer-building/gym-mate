import { Muscle } from '@prisma/client'

// TODO: Move somewhere else, where all types live
export const MuscleGroup = {
	BACK_AND_NECK: 'BACK_AND_NECK',
	BUTTOCKS: 'BUTTOCKS',
	ABS_AND_OBLIQUES: 'ABS_AND_OBLIQUES',
	SHOULDERS: 'SHOULDERS',
	HANDS: 'HANDS',
	CHEST: 'CHEST',
	LEGS: 'LEGS',
	SHIN: 'SHIN'
} as const

export type MuscleGroup = (typeof MuscleGroup)[keyof typeof MuscleGroup]

export const MUSCLE_GROUPS: Record<MuscleGroup, Array<Muscle>> = {
	[MuscleGroup.BACK_AND_NECK]: [
		Muscle.UPPER_BACK,
		Muscle.SMALL_OF_THE_BACK,
		Muscle.LATISSIMUS,
		Muscle.TRAPEZE,
		Muscle.NECK
	],
	[MuscleGroup.BUTTOCKS]: [Muscle.BUTTOCKS],
	[MuscleGroup.ABS_AND_OBLIQUES]: [Muscle.ABS, Muscle.OBLIQUES],
	[MuscleGroup.SHOULDERS]: [Muscle.FRONT_DELTA, Muscle.MIDDLE_DELTA, Muscle.REAR_DELTA],
	[MuscleGroup.HANDS]: [Muscle.BICEPS, Muscle.TRICEPS, Muscle.FOREARMS],
	[MuscleGroup.CHEST]: [Muscle.CHEST],
	[MuscleGroup.LEGS]: [
		Muscle.FRONT_THIGH,
		Muscle.POSTERIOR_THIGH,
		Muscle.INNER_THIGH,
		Muscle.OUTER_THIGH
	],
	[MuscleGroup.SHIN]: [Muscle.SHIN]
}
