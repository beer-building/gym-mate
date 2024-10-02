import { Composer } from 'grammy'

import { AppContext } from '../domain/app-context'

import StartModule from './start.module'
import WorkoutModule from './workout.module'
import ProgramModule from './program.module'
import ProgramsModule from './programs.module'
import ProgramCreateModule from './program-create.module'
import WorkoutExercise from './workout-exercise.module'
import { errorBoundaryMiddleware, updateTokenMiddleware } from '../middlewares'

const composer = new Composer<AppContext>()

composer.use(StartModule)
composer.use(updateTokenMiddleware)

composer.errorBoundary(errorBoundaryMiddleware()).use(ProgramModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(ProgramsModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(ProgramCreateModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(WorkoutModule)
composer.errorBoundary(errorBoundaryMiddleware()).use(WorkoutExercise)

composer.command('current_state', (ctx) => {
	ctx.reply(`<pre>${JSON.stringify(ctx.session)}</pre>`, {
		parse_mode: 'HTML'
	})
})

export default composer
