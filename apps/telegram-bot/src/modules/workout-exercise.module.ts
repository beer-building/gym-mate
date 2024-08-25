import { Composer, InlineKeyboard } from 'grammy'
import { HUMAN_MUSCLE_NAMES } from '@gym-mate/shared-types'

import { AppContext } from '../domain'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_workout_exercise_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	const { data } = await api.getWorkoutExercise(id)

	const exercise = data.workoutExercise.exercise
	const { sets, reps, weight } = data.workoutExercise

	const text = `
*Exercise:* ${exercise.title}
${exercise.description ? `*Description:* \n${exercise.description}\n\n` : ''}
*Sets: ${sets}*
*Reps: ${reps}*
*Weight: ${weight}*\n
*Body load:* \n${exercise.bodyLoad
		.map(({ muscle, value }) => `${HUMAN_MUSCLE_NAMES[muscle]}: ${value}`)
		.join('\n')}
`

	const keyboard = new InlineKeyboard()

	keyboard
		.text('Change sets', 'change_set_in_workout_exercise' + id) // TODO
		.text('Change reps', 'change_reps_in_workout_exercise' + id) // TODO
		.text('Change weight', 'change_weight_in_workout_exercise' + id) // TODO

	await ctx.answerCallbackQuery()
	ctx.reply(text, {
		parse_mode: 'Markdown'
	})
})

export default composer
