import { InlineKeyboard } from 'grammy'
import { CallbackQueryMiddleware } from '../domain'
import { api } from '../services/http.service'

//TODO: should return only keyboard and not use ctx
export const openWorkoutKeyboard: CallbackQueryMiddleware = async (ctx) => {
	const workoutId = ctx.match[1]!

	const { data } = await api.getWorkout(workoutId)

	const keyboard = new InlineKeyboard()

	data.workout.workoutExercises.forEach(({ exercise, id }) => {
		keyboard.text(exercise.title, 'open_workout_exercise_' + id).row()
	})

	keyboard
		.text('Edit', 'edit_workout_' + workoutId)
		.text('Delete', 'delete_workout_' + workoutId)
		.toFlowed(2)

	const text = `
	    *Workout:* ${data.workout.title}
	    `

	await ctx.answerCallbackQuery()

	await ctx.reply(text, {
		reply_markup: keyboard,
		parse_mode: 'Markdown'
	})
}

export const editWorkoutKeyboard: CallbackQueryMiddleware = async (ctx) => {
	const workoutId = ctx.match[1]!

	const { data } = await api.getWorkout(workoutId)

	const editKeyboard = new InlineKeyboard()
		.text('Change title', `change_workout_title_${workoutId}`)
		.text('Add exercise', `exercise_to_workout_list_${workoutId}`)
		.text('Remove exercise') //TODO

	await ctx.answerCallbackQuery()
	await ctx.reply(`*Edit workout* ${data.workout.title}`, {
		reply_markup: editKeyboard,
		parse_mode: 'Markdown'
	})
}
