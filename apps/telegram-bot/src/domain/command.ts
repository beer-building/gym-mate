export const Command = {
	login: 'login',
	programs: 'programs',
	createProgram: 'create_program'
} as const

export type Command = (typeof Command)[keyof typeof Command]
