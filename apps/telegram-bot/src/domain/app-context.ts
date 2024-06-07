import { Context, SessionFlavor } from 'grammy'

import { SessionStorage } from './session-storage'

export type AppContext = Context & SessionFlavor<SessionStorage>
