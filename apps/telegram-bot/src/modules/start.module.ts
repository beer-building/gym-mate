import { Composer } from 'grammy'
import { AppContext } from '../domain'
import { api, HttpError, serverHttp } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.command('start', async (ctx) => {
	if (!ctx.session.token) {
		try {
			const { data } = await api.signupTelegramUser({ user: { chatId: ctx.chatId } })

			console.log('New user registered', data)
			ctx.session.token = data.user.token
			serverHttp.setToken(data.user.token)
		} catch (error) {
			if (error instanceof HttpError && error.response.status !== 400) {
				throw error
			}

			const { data } = await api.loginTelegramUser({ user: { chatId: ctx.chatId } })

			console.log('User logged in', data)
			ctx.session.token = data.user.token
			serverHttp.setToken(data.user.token)
		}
	}

	await ctx.reply('You are logged in!')
})

export default composer
