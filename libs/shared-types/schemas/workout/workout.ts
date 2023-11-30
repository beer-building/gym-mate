import { Type } from '@sinclair/typebox';

export const workout = Type.Object({
	id: Type.Number(),
	createdAt: Type.Date(),
	updatedAt: Type.Date(),
	workoutProgramId: Type.Union([Type.Null(), Type.Number()])
});
