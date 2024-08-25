import { Composer } from 'grammy'
import { HUMAN_MUSCLE_NAMES } from '@gym-mate/shared-types'

import { AppContext } from '../domain'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_exercise_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	const { data } = await api.getExercise(id)

	const text = `
*Exercise:* ${data.exercise.title}\n\n${
		data.exercise.description ? `*Description:* \n${data.exercise.description}\n\n` : ''
	}*Body load:* \n${data.exercise.bodyLoad
		.map(({ muscle, value }) => `${HUMAN_MUSCLE_NAMES[muscle]}: ${value}`)
		.join('\n')}`

	await ctx.answerCallbackQuery()
	ctx.reply(text, {
		parse_mode: 'Markdown'
	})
})

export default composer
