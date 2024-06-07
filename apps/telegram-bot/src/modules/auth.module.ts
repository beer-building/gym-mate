import { Composer } from 'grammy'
import { AppContext } from '../domain'
import { serverHttp } from '../services/http.service'

const composer = new Composer<AppContext>()

composer.command('authorization', async (ctx) => {
	await serverHttp.get('/')

	ctx.reply('reply')
})

export default composer
