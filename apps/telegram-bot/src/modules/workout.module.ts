import { Composer, InlineKeyboard } from 'grammy'
import { AppContext } from '../domain'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_workout_(\d+)/, async (ctx) => {
	const workoutId = ctx.match[1]!

	const { data } = await api.getWorkout(workoutId)

	const keyboard = new InlineKeyboard()

	console.log(data.workout.exercises, 'data.workout.exercises')

	data.workout.exercises.forEach((exercise) => {
		keyboard.text(exercise.title, 'open_exercise_' + exercise.id)
	})

	const text = `
	    *Workout:* ${data.workout.title}
	    `

	ctx.answerCallbackQuery()
	ctx.reply(text, {
		reply_markup: keyboard.toFlowed(1),
		parse_mode: 'Markdown'
	})
})

export default composer
