import { Middleware } from 'grammy'
import { AppContext } from '../domain'
import { serverHttp } from '../services/http.service'

export const updateTokenMiddleware: Middleware<AppContext> = (ctx, next) => {
	serverHttp.setToken(ctx.session.token)

	return next()
}
