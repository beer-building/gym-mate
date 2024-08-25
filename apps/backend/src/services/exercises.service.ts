import { FastifyInstance } from 'fastify'
import { ExercisesRepository } from '../repositories'
import { ExerciseSchema, MUSCLE_GROUPS, MuscleGroup } from '@gym-mate/shared-types'
import { BodyLoad, Exercise } from '@prisma/client'

export class ExercisesService {
	server: FastifyInstance
	exercisesRepository: ExercisesRepository

	constructor(server: FastifyInstance) {
		this.server = server
		this.exercisesRepository = new ExercisesRepository(server)
	}

	async getExercise(exerciseId: number) {
		const exercise = await this.exercisesRepository.getExercise(exerciseId)

		if (!exercise) throw this.server.httpErrors.badRequest('Exercise with this id does not exist')

		return exercise
	}

	async getExerciseByMuscleGroup() {
		const exercises = await this.exercisesRepository.getExercises()

		// const exerciseByMuscleGroup = exercises.reduce(
		// 	(acc, exercise) => {
		// 		Object.values(MuscleGroup).forEach((muscleGroup) => {
		// 			if (exercise.bodyLoad.some(({ muscle }) => MUSCLE_GROUPS[muscleGroup].includes(muscle))) {
		// 				acc[muscleGroup].push(exercise)
		// 			}
		// 		})

		// 		return acc
		// 	},
		// 	{
		// 		[MuscleGroup.BACK_AND_NECK]: [],
		// 		[MuscleGroup.BUTTOCKS]: [],
		// 		[MuscleGroup.ABS_AND_OBLIQUES]: [],
		// 		[MuscleGroup.SHOULDERS]: [],
		// 		[MuscleGroup.HANDS]: [],
		// 		[MuscleGroup.CHEST]: [],
		// 		[MuscleGroup.LEGS]: [],
		// 		[MuscleGroup.SHIN]: []
		// 	} as Record<MuscleGroup, Array<ExerciseSchema>>
		// )

		return exercises
	}
}
