import { Type } from '@sinclair/typebox'
import { WorkoutProgramSchema } from './workout-program'
import { WorkoutSchema } from '../workout'

const withWorkouts = Type.Object({ workouts: Type.Array(WorkoutSchema) })

const WorkoutProgramWithWorkouts = Type.Intersect([WorkoutProgramSchema, withWorkouts])

export const GetWorkoutProgramReply = Type.Object({
	workoutProgram: WorkoutProgramWithWorkouts
})
