import { Type } from '@sinclair/typebox';

export const IdParams = Type.Object({
	id: Type.Number()
});

export const WorkoutParams = Type.Object({
	workoutId: Type.Number()
});

export const WorkoutProgramWorkoutParams = Type.Union([IdParams, WorkoutParams]);
