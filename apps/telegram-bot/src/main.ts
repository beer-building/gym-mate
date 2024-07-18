import { Bot } from 'grammy'
import { BOT_TOKEN } from './plugins/config'
import modules from './modules'
import { AppContext } from './domain'
import { COMMAND_DESCRIPTION } from './utils/commands-description'

const bot = new Bot<AppContext>(BOT_TOKEN)

bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'))

bot.use(modules)

bot.api.setMyCommands(COMMAND_DESCRIPTION)

bot.catch((err) => console.error(err.error))
bot.start()
