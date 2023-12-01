import { Type } from '@sinclair/typebox';
import { WorkoutSchema } from './workout';

export const WorkoutsReply = Type.Object({
	workouts: Type.Array(WorkoutSchema)
});
