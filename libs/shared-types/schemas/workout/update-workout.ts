import { Static, Type } from '@sinclair/typebox';
import { WorkoutSchema } from './workout';

export const UpdateWorkoutDto = Type.Object({
	workout: WorkoutSchema
});

export type UpdateWorkoutDto = Static<typeof UpdateWorkoutDto>;
