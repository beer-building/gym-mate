import { CommandMiddleware, InlineKeyboard } from 'grammy'
import { api } from '../services/http.service'
import { AppContext, CallbackQueryMiddleware } from '../domain'

export const programsListKeyboard: CommandMiddleware<AppContext> = async (ctx) => {
	const { data } = await api.workoutProgramsList()

	if (data.workoutPrograms.length === 0) {
		ctx.reply('No workout programs found')

		return
	}

	const programsKeyboard = new InlineKeyboard()

	data.workoutPrograms.forEach((program) => {
		programsKeyboard.text(program.title, 'open_program_' + program.id)
	})

	ctx.reply('Choose a program:', {
		reply_markup: programsKeyboard.toFlowed(3)
	})
}

export const openProgramKeyboard: CallbackQueryMiddleware = async (ctx) => {
	const id = ctx.match[1]!

	const programKeyboard = new InlineKeyboard()

	const { data } = await api.getWorkoutProgram(id)

	data.workoutProgram.workouts.forEach((workout) => {
		programKeyboard.text(workout.title, 'open_workout_' + workout.id).row()
	})

	programKeyboard.text('Edit', 'edit_program_' + id).text('Delete', 'delete_program_' + id)

	const text = `
*Workout program:* ${data.workoutProgram.title}
${data.workoutProgram.description ? `*Description:* ${data.workoutProgram.description}` : ''}
`

	await ctx.answerCallbackQuery()

	ctx.reply(text, {
		reply_markup: programKeyboard,
		parse_mode: 'Markdown'
	})
}

export const editProgramKeyboard: CallbackQueryMiddleware = async (ctx) => {
	const id = ctx.match[1]!

	const editKeyboard = new InlineKeyboard()
		.text('Add workout', `add_workout_to_program_${id}`)
		.text('Change title', `change_program_title_${id}`)
		.text('Change description', `change_program_description_${id}`)

	await ctx.answerCallbackQuery()

	ctx.reply('Edit program', {
		reply_markup: editKeyboard
	})
}
