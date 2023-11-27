import { Type } from '@sinclair/typebox'
import { workoutProgram } from './workout-program'
import { workout } from '../workout/workout'

const withWorkouts = Type.Object({ workouts: Type.Array(workout) })

const workoutProgramWithWorkouts = Type.Intersect([workoutProgram, withWorkouts])

export const GetWorkoutProgramReply = Type.Object({
  workoutProgram: workoutProgramWithWorkouts
})
