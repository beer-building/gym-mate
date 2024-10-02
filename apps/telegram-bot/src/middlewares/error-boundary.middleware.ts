import { BotError, NextFunction } from 'grammy'
import { AppContext } from '../domain'

export const errorBoundaryMiddleware =
	(errorText = 'Something went wrong. Please try again later.') =>
	async ({ error, ctx }: BotError<AppContext>, next: NextFunction) => {
		console.log('[ERROR]', error)
		await ctx.reply(errorText)
		next()
	}
