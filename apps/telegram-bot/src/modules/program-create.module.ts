import { Composer } from 'grammy'
import { AppContext, Command } from '../domain'
import { api } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.command(Command.createProgram, async (ctx) => {
	await ctx.reply('Enter name for your workout program:')

	const workoutProgram = {
		title: '',
		description: ''
	}

	composer
		.filter(() => workoutProgram.title.length == 0)
		.on('message:text', async (ctx) => {
			workoutProgram.title = ctx.message.text

			await ctx.reply('Enter description for your workout program:')
		})

	composer
		.filter(() => workoutProgram.description.length == 0)
		.on('message:text', async (ctx) => {
			workoutProgram.description = ctx.message.text

			const { data } = await api.createWorkoutProgram({ workoutProgram })

			await ctx.reply(`Workout program created with id: ${data.workoutProgram.id}`)
		})
})

export default composer
