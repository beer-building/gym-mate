import { BotCommand } from 'grammy/types'
import { Command } from '../domain'

interface GymBotCommand extends BotCommand {
	description: string
	command: Command
}

export const COMMAND_DESCRIPTION: Array<GymBotCommand> = [
	{
		command: Command.login,
		description: 'Login to the gymmate'
	}
]
