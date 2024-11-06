import { Equipment } from '@prisma/client'

export const HUMAN_EQUIPMENT_NAMES: Record<Equipment, string> = {
	[Equipment.BARBELL]: 'Barbell',
	[Equipment.TRAP_BAR]: 'Trap bar',
	[Equipment.DUMBBELL]: 'Dumbbell',
	[Equipment.KETTLEBELL]: 'Kettlebell',
	[Equipment.CABLE]: 'Cable',
	[Equipment.MACHINE]: 'Machine',
	[Equipment.BODYWEIGHT]: 'Bodyweight',
	[Equipment.BAND]: 'Band',
	[Equipment.PLATE]: 'Plate',
	[Equipment.BALL]: 'Ball',
	[Equipment.BENCH]: 'Bench',
	[Equipment.PULL_UP_BAR]: 'Pull up bar',
	[Equipment.SMITH_MACHINE]: 'Smith machine',
	[Equipment.SLED]: 'Sled',
	[Equipment.NONE]: 'None'
}
