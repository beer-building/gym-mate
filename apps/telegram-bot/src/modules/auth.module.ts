import { Composer } from 'grammy'
import { AppContext } from '../domain'

const composer = new Composer<AppContext>()

// composer.command('login', async (ctx) => {
// 	await serverHttp.get('/')

// 	console.log(ctx.from, 'FROM')

// 	ctx.reply('reply')
// })

export default composer
