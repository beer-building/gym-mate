export const Command = {
	login: 'login'
} as const

export type Command = keyof typeof Command
