import { Composer } from 'grammy'
import { AppContext } from '../domain'
import { WorkoutKeyboards } from '../keyboards'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_workout_(\d+)/, WorkoutKeyboards.openWorkoutKeyboard)

composer.callbackQuery(/edit_workout_(\d+)/, WorkoutKeyboards.editWorkoutKeyboard)

export default composer
