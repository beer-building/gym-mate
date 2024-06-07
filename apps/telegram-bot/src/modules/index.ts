import { Composer } from 'grammy'

import { AppContext } from '../domain/app-context'

import AuthModule from './auth.module'

const composer = new Composer<AppContext>()

composer.use(AuthModule)

composer.command('current_state', (ctx) => {
	ctx.reply(`<pre>${JSON.stringify(ctx.session)}</pre>`, {
		parse_mode: 'HTML'
	})
})

export default composer
