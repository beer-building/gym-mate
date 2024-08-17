import { Bot, session } from 'grammy'
import { PrismaClient } from '@prisma/client'

import { BOT_TOKEN } from './plugins/config'
import modules from './modules'
import { AppContext } from './domain'
import { COMMAND_DESCRIPTION } from './utils/commands-description'
import { PrismaAdapter } from '@grammyjs/storage-prisma'

const prisma = new PrismaClient()

const bot = new Bot<AppContext>(BOT_TOKEN)

bot.use(
	session({
		initial: () => ({ token: '' }),
		storage: new PrismaAdapter(prisma.session),
		// Give every user their personal session storage
		// (will be shared across groups and in their private chat)
		getSessionKey: (ctx) => ctx.from?.id.toString()
	})
)

bot.api.setMyCommands(COMMAND_DESCRIPTION)

bot.use(modules)

process.on('unhandledRejection', (err) => {
	console.log(err)
})

bot.catch((err) => console.error(err.error))
bot.start()
