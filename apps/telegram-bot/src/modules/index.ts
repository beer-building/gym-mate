import { Composer } from 'grammy'

import { AppContext } from '../domain/app-context'

import StartModule from './start.module'
import WorkoutModule from './workout.module'
import ProgramModule from './program.module'
import ProgramsModule from './programs.module'
import CreateProgramModule from './create-program.module'
import ExerciseModule from './exercise.module'
import { errorBoundaryMiddleware, updateTokenMiddleware } from '../middlewares'

const composer = new Composer<AppContext>()

composer.use(StartModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(updateTokenMiddleware)

composer.errorBoundary(errorBoundaryMiddleware()).use(ProgramModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(ProgramsModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(CreateProgramModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(WorkoutModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(ExerciseModule)

composer.command('current_state', (ctx) => {
	ctx.reply(`<pre>${JSON.stringify(ctx.session)}</pre>`, {
		parse_mode: 'HTML'
	})
})

export default composer
