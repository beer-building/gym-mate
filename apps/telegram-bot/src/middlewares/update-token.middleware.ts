import { Middleware } from 'grammy'
import { AppContext } from '../domain'
import { serverHttp } from '../services/http.service'

export const updateTokenMiddleware: Middleware<AppContext> = (ctx, next) => {
	if (serverHttp.token) {
		return next()
	}
	if (!ctx.session.token) {
		return next()
	}

	if (!serverHttp.token && ctx.session.token) {
		serverHttp.setToken(ctx.session.token)
	}

	return next()
}
