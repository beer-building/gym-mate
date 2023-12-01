import { Type } from '@sinclair/typebox';
import { TDate } from '../t-date';

export const workout = Type.Object({
	id: Type.Number(),
	createdAt: TDate(),
	updatedAt: TDate(),
	workoutProgramId: Type.Union([Type.Null(), Type.Number()])
});
