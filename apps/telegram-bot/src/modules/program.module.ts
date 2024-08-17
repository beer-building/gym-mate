import { Composer, InlineKeyboard } from 'grammy'
import { AppContext } from '../domain'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_program_(\d+)/, async (ctx) => {
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
})

composer.callbackQuery(/edit_program_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	const editKeyboard = new InlineKeyboard()
		.text('Change title', `change_program_title_${id}`)
		.text('Change description', `change_program_description_${id}`)

	await ctx.answerCallbackQuery()
	ctx.reply('Edit program', {
		reply_markup: editKeyboard
	})
})

composer.callbackQuery(/change_program_title_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	await ctx.answerCallbackQuery()
	await ctx.reply('Enter new title: ')

	let messageHandled = false

	composer
		.filter(() => !messageHandled)
		.on('message:text', async (ctx) => {
			const userText = ctx.message.text

			const { data } = await api.updateWorkoutProgram(id, { workoutProgram: { title: userText } })

			messageHandled = true
			await ctx.reply(`New title is ${data.workoutProgram.title}`)
		})
})

composer.callbackQuery(/change_program_description_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	await ctx.answerCallbackQuery()
	await ctx.reply('Enter new description: ')

	let messageHandled = false

	composer
		.filter(() => !messageHandled)
		.on('message:text', async (ctx) => {
			const userText = ctx.message.text

			const { data } = await api.updateWorkoutProgram(id, {
				workoutProgram: { description: userText }
			})

			messageHandled = true
			await ctx.reply(`New description is ${data.workoutProgram.description}`)
		})
})

composer.callbackQuery(/delete_program_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	await api
		.deleteWorkoutProgram(id)
		.catch(() => ctx.reply('Something went wrong while deleting workout program'))

	ctx.deleteMessage()

	await ctx.answerCallbackQuery()
	ctx.reply('Program deleted')
})

export default composer
