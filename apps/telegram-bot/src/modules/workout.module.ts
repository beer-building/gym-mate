import { Composer, InlineKeyboard } from 'grammy'
import { AppContext } from '../domain'
import { WorkoutKeyboards } from '../keyboards'
import { api } from '../services/http.service'
import {
	HUMAN_EQUIPMENT_NAMES,
	HUMAN_MUSCLE_NAMES,
	MUSCLE_GROUPS,
	MuscleGroup
} from '@gym-mate/shared-types'
import { Equipment, Muscle } from '@prisma/client'
import { HUMAN_MUSCLE_GROUP_NAMES } from '@gym-mate/shared-types'

const composer = new Composer<AppContext>()

composer.callbackQuery(/open_workout_(\d+)/, WorkoutKeyboards.openWorkoutKeyboard)

composer.callbackQuery(/edit_workout_(\d+)/, WorkoutKeyboards.editWorkoutKeyboard)

composer.callbackQuery(/change_workout_title_(\d+)/, async (ctx) => {
	const id = ctx.match[1]!

	await ctx.answerCallbackQuery()
	await ctx.reply('Enter new title: ')

	let messageHandled = false

	composer
		.filter(() => !messageHandled)
		.on('message:text', async (ctx) => {
			const userText = ctx.message.text

			const { data } = await api.updateWorkout(id, { workout: { title: userText } })

			messageHandled = true
			await ctx.reply(`New title is ${data.workout.title}`)
		})
})

composer.callbackQuery(/exercise_to_workout_list_(\d+)/, async (ctx) => {
	const workoutId = ctx.match[1]!

	const { data } = await api.getWorkout(workoutId)

	await ctx.answerCallbackQuery()

	const keyboard = new InlineKeyboard()

	Object.values(MuscleGroup).forEach((muscleGroup) => {
		keyboard
			.text(
				HUMAN_MUSCLE_GROUP_NAMES[muscleGroup],
				`open_muscle_group_for_workout_${muscleGroup}_${workoutId}`
			)
			.row()
	})

	const text = `
	    Add exercise for *Workout:* ${data.workout.title} 
	    `

	await ctx.reply(text, {
		reply_markup: keyboard.toFlowed(2),
		parse_mode: 'Markdown'
	})
})

composer.callbackQuery(/open_muscle_group_for_workout_(\w+)_(\d+)/, async (ctx) => {
	const muscleGroup = ctx.match[1]! as MuscleGroup
	const workoutId = ctx.match[2]!

	await ctx.answerCallbackQuery()

	const keyboard = new InlineKeyboard()

	MUSCLE_GROUPS[muscleGroup].forEach((muscle) => {
		keyboard
			.text(HUMAN_MUSCLE_NAMES[muscle], `choose_equipment_for_muscle_group_${muscle}_${workoutId}`)
			.row()
	})

	const text = `
*Exercises in muscle group* ${HUMAN_MUSCLE_GROUP_NAMES[muscleGroup]}: 
	    `

	await ctx.reply(text, {
		reply_markup: keyboard.toFlowed(2),
		parse_mode: 'Markdown'
	})
})

composer.callbackQuery(/choose_equipment_for_muscle_group_(\w+)_(\d+)/, async (ctx) => {
	const muscle = ctx.match[1]! as Muscle
	const workoutId = ctx.match[2]!

	// const { data } = await api.getWorkout(workoutId)

	const keyboard = new InlineKeyboard()

	Object.values(Equipment).forEach((equipment) => {
		keyboard
			.text(
				HUMAN_EQUIPMENT_NAMES[equipment],
				`open_exercises_for_muscle_group_${muscle}__${equipment}__${workoutId}`
			)
			.row()
	})

	const text = `*Choose exercise equipment:*`

	await ctx.reply(text, {
		reply_markup: keyboard.toFlowed(2),
		parse_mode: 'Markdown'
	})
})

composer.callbackQuery(/open_exercises_for_muscle_group_(\w+)__(\w+)__(\d+)/, async (ctx) => {
	const muscle = ctx.match[1]! as Muscle
	const equipment = ctx.match[2]! as Equipment
	const workoutId = ctx.match[3]!

	await ctx.answerCallbackQuery()

	const { data } = await api.getAllExercises({ equipment })

	const keyboard = new InlineKeyboard()

	data.exercises
		.filter(({ bodyLoad }) => bodyLoad.map(({ muscle }) => muscle).includes(muscle))
		.forEach((exercise) => {
			keyboard.text(exercise.title, `add_exercise_to_workout_${exercise.id}_${workoutId}`).row()
		})

	const text = `
*Exercises for muscle* ${HUMAN_MUSCLE_NAMES[muscle]} *with* ${HUMAN_EQUIPMENT_NAMES[equipment]}:
-----------------------------------------------------------------
	    `

	await ctx.reply(text, {
		reply_markup: keyboard.toFlowed(2),
		parse_mode: 'Markdown'
	})
})

composer.callbackQuery(/add_exercise_to_workout_(\d+)_(\d+)/, async (ctx, next) => {
	const exerciseId = Number(ctx.match[1])
	const id = ctx.match[2]!

	await ctx.answerCallbackQuery()

	try {
		await api.addExerciseToWorkout(id, { exerciseId })

		await ctx.reply(`Exercise was added`)

		ctx.match = ['', id]

		await WorkoutKeyboards.openWorkoutKeyboard(ctx, next)
	} catch (error) {
		await ctx.reply('Exercise already exist in this workout')
	}
})

export default composer
