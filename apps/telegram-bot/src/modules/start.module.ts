import { Composer } from 'grammy'
import { AppContext } from '../domain'
import { api, serverHttp } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.command('start', async (ctx) => {
	if (!ctx.session.token) {
		const { data } = await api.signupTelegramUser({ user: { chatId: ctx.chatId } })

		console.log('New user registered', data)
		ctx.session.userId = data.user.id
		ctx.session.token = data.user.token
		serverHttp.setToken(data.user.token)
	} else {
		console.log('User start session with: ', ctx.session)
	}

	ctx.reply('reply')
})

export default composer
