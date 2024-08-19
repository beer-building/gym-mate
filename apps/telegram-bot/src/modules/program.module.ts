import { Composer } from 'grammy'
import { AppContext } from '../domain'
import { api } from '../services/http.service'
import { ProgramKeyboards } from '../keyboards'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_program_(\d+)/, ProgramKeyboards.openProgramKeyboard)
composer.callbackQuery(/edit_program_(\d+)/, ProgramKeyboards.editProgramKeyboard)

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

composer.callbackQuery(/add_workout_to_program_(\d+)/, async (callbackQueryCtx, next) => {
	const id = callbackQueryCtx.match[1]!

	await callbackQueryCtx.answerCallbackQuery()
	await callbackQueryCtx.reply('Enter workout title: ')

	let replied = false

	composer
		.filter(() => !replied)
		.on('message:text', async (ctx) => {
			const title = ctx.message.text

			await api.createWorkout(id, { workout: { title } })

			replied = true
			await ctx.reply('Workout added')
			await ProgramKeyboards.openProgramKeyboard(callbackQueryCtx, next)
		})
})

export default composer
