import { InlineKeyboard } from 'grammy'
import { CallbackQueryMiddleware } from '../domain'
import { api } from '../services/http.service'

export const openWorkoutKeyboard: CallbackQueryMiddleware = async (ctx) => {
	const workoutId = ctx.match[1]!

	const { data } = await api.getWorkout(workoutId)

	const keyboard = new InlineKeyboard()

	data.workout.exercises.forEach(({ exercise }) => {
		keyboard.text(exercise.title, 'open_exercise_' + exercise.id).row()
	})

	keyboard.text('Edit', 'edit_workout_' + workoutId).text('Delete', 'delete_workout_' + workoutId)

	const text = `
	    *Workout:* ${data.workout.title}
	    `

	await ctx.answerCallbackQuery()

	ctx.reply(text, {
		reply_markup: keyboard.toFlowed(2),
		parse_mode: 'Markdown'
	})
}

export const editWorkoutKeyboard: CallbackQueryMiddleware = async (ctx) => {
	const id = ctx.match[1]!

	const editKeyboard = new InlineKeyboard()
		.text('Change title', `change_workout_title_${id}`)
		.text('Add exercise')
		.text('Remove exercise')

	await ctx.answerCallbackQuery()
	ctx.reply('Edit workout', {
		reply_markup: editKeyboard
	})
}
