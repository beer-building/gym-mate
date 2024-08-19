import { CallbackQueryContext, MiddlewareFn } from 'grammy'
import { AppContext } from '../domain'

export type CallbackQueryMiddleware = MiddlewareFn<CallbackQueryContext<AppContext>>
