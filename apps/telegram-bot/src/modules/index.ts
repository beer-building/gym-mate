import { Composer } from 'grammy'

import { AppContext } from '../domain/app-context'

import AuthModule from './auth.module'
import StartModule from './start.module'
import ProgramsModule from './programs.module'
import { serverHttp } from '../services/http.service'

const composer = new Composer<AppContext>((ctx, next) => {
	if (ctx.session.token) {
		serverHttp.setToken(ctx.session.token)
	}

	next()
})

composer.use(AuthModule)
composer.use(StartModule)
composer.use(ProgramsModule)

composer.command('current_state', (ctx) => {
	ctx.reply(`<pre>${JSON.stringify(ctx.session)}</pre>`, {
		parse_mode: 'HTML'
	})
})

export default composer
