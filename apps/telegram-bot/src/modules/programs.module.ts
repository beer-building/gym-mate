import { Composer, InlineKeyboard } from 'grammy'
import { AppContext } from '../domain'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.command('programs', async (ctx) => {
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

composer.callbackQuery(/program_(\d+)/, async (ctx) => {
	const id = ctx.match[1]
	const programKeyboard = new InlineKeyboard()
		.text('Start', 'start_program_' + id)
		.text('Edit', 'edit_program_' + id)
		.text('Delete', 'delete_program_' + id)

	ctx.reply('You selected program with id: ' + id, {
		reply_markup: programKeyboard
	})
})

composer.callbackQuery(/start_program_(\d+)/, async (ctx) => {
	// TODO
	ctx.reply('Starting program')
})

composer.callbackQuery(/edit_program_(\d+)/, async (ctx) => {
	const id = ctx.match[1]

	const editKeyboard = new InlineKeyboard()
		.text('Change title', `change_program_title_${id}`)
		.text('Change description', `change_program_description_${id}`)
	// .text('Change workouts', `change_program_workouts_${id}`)

	// TODO
	ctx.reply('Edit program', {
		reply_markup: editKeyboard
	})
})

composer.callbackQuery(/change_program_title_(\d+)/, async (ctx) => {
	// TODO

	ctx.reply('Enter new title: ')
})

composer.callbackQuery(/change_program_description_(\d+)/, async (ctx) => {
	// TODO

	ctx.reply('Enter new title: ')
})

// composer.callbackQuery(/change_program_workouts_(\d+)/, async (ctx) => {
// 	// TODO
// 	ctx.reply('Enter new title: ')
// })

composer.callbackQuery(/delete_program_(\d+)/, async (ctx) => {
	// TODO
	ctx.reply('DELETE program')
})

export default composer
