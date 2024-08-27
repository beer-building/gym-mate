import { Composer, InlineKeyboard } from 'grammy'
import { HUMAN_MUSCLE_NAMES } from '@gym-mate/shared-types'

import { AppContext } from '../domain'
import { api } from '../services/http.service'
import { z } from 'zod'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_workout_exercise_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	const { data } = await api.getWorkoutExercise(id)

	const exercise = data.workoutExercise.exercise
	const { sets, reps, weight } = data.workoutExercise

	const text = `
*Exercise:* ${exercise.title}
-------------------------------------------------
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
		.text('Change sets', 'change_set_in_workout_exercise_' + id)
		.text('Change reps', 'change_reps_in_workout_exercise_' + id)
		.text('Change weight', 'change_weight_in_workout_exercise_' + id)

	await ctx.answerCallbackQuery()
	ctx.reply(text, {
		parse_mode: 'Markdown',
		reply_markup: keyboard
	})
})

const numberSchema = z.number().int()

composer.callbackQuery(/change_set_in_workout_exercise_(\d+)/, async (callbackQueryCtx) => {
	const id = callbackQueryCtx.match[1]!

	await callbackQueryCtx.answerCallbackQuery()
	await callbackQueryCtx.reply('Enter new sets value:')

	let replied = false

	composer
		.filter(() => !replied)
		.on('message:text', async (ctx) => {
			const value = ctx.message.text

			const validationResult = numberSchema.safeParse(Number(value))

			if (!validationResult.success) {
				await ctx.reply('Invalid value, you nee enter a number')

				return
			}

			await api.updateWorkoutExercise(id, { workoutExercise: { sets: Number(value) } })

			replied = true
			await ctx.reply('Sets updated')
		})
})

composer.callbackQuery(/change_reps_in_workout_exercise_(\d+)/, async (callbackQueryCtx) => {
	const id = callbackQueryCtx.match[1]!

	await callbackQueryCtx.answerCallbackQuery()
	await callbackQueryCtx.reply('Enter new reps value:')

	let replied = false

	composer
		.filter(() => !replied)
		.on('message:text', async (ctx) => {
			const value = ctx.message.text

			const validationResult = numberSchema.safeParse(Number(value))

			if (!validationResult.success) {
				await ctx.reply('Invalid value, you nee enter a number')

				return
			}

			await api.updateWorkoutExercise(id, { workoutExercise: { reps: Number(value) } })

			replied = true
			await ctx.reply('Reps updated')
		})
})

composer.callbackQuery(/change_weight_in_workout_exercise_(\d+)/, async (callbackQueryCtx) => {
	const id = callbackQueryCtx.match[1]!

	await callbackQueryCtx.answerCallbackQuery()
	await callbackQueryCtx.reply('Enter new weight value:')

	let replied = false

	composer
		.filter(() => !replied)
		.on('message:text', async (ctx) => {
			const value = ctx.message.text

			const validationResult = numberSchema.safeParse(Number(value))

			if (!validationResult.success) {
				await ctx.reply('Invalid value, you nee enter a number')

				return
			}

			await api.updateWorkoutExercise(id, { workoutExercise: { weight: Number(value) } })

			replied = true
			await ctx.reply('weight updated')
		})
})

export default composer
