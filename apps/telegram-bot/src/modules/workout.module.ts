import { Composer, InlineKeyboard } from 'grammy'
import { AppContext } from '../domain'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_workout_(\d+)/, async (ctx) => {
	const workoutId = ctx.match[1]!

	const { data } = await api.getWorkout(workoutId)

	const programsKeyboard = new InlineKeyboard()

	data.workout.exercises.forEach((exercise) => {
		programsKeyboard.text(exercise.title)
	})

	const text = `
	    *Workout:* ${data.workout.title}
	    `

	ctx.answerCallbackQuery()
	ctx.reply(text, {
		reply_markup: programsKeyboard.toFlowed(1),
		parse_mode: 'Markdown'
	})
})

export default composer
