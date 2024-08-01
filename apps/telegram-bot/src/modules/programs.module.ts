import { Composer, InlineKeyboard } from 'grammy'
import { AppContext, Command } from '../domain'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.command(Command.programs, async (ctx) => {
	const { data } = await api.workoutProgramsList()

	if (data.workoutPrograms.length === 0) {
		ctx.reply('No workout programs found')

		return
	}

	const programsKeyboard = new InlineKeyboard()

	data.workoutPrograms.forEach((program) => {
		programsKeyboard.text(program.title, 'program_' + program.id)
	})

	ctx.reply('Choose a program:', {
		reply_markup: programsKeyboard.toFlowed(3)
	})
})

export default composer
