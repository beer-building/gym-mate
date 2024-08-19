import { Composer } from 'grammy'
import { AppContext } from '../domain'
import { WorkoutKeyboards } from '../keyboards'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_workout_(\d+)/, WorkoutKeyboards.openWorkoutKeyboard)

composer.callbackQuery(/edit_workout_(\d+)/, WorkoutKeyboards.editWorkoutKeyboard)

composer.callbackQuery(/change_workout_title_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	await ctx.answerCallbackQuery()
	await ctx.reply('Enter new title: ')

	let messageHandled = false

	composer
		.filter(() => !messageHandled)
		.on('message:text', async (ctx) => {
			const userText = ctx.message.text

			const { data } = await api.updateWorkout(id, { workout: { title: userText } })

			messageHandled = true
			await ctx.reply(`New title is ${data.workout.title}`)
		})
})

export default composer
