import { Composer } from 'grammy'
import { AppContext, Command } from '../domain'
import { ProgramKeyboards } from '../keyboards'

const composer = new Composer<AppContext>()

composer.command(Command.programs, ProgramKeyboards.programsListKeyboard)

export default composer
