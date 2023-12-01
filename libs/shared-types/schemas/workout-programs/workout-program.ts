import { Static, Type } from '@sinclair/typebox';
import type { WorkoutProgram } from '@prisma/client';
import { TDate } from '../t-date';

type WorkoutProgramUnit = Omit<WorkoutProgram, 'userId'>;

export type WorkoutProgramReply = {
	workoutProgram: WorkoutProgramUnit;
};

export type WorkoutProgramsReply = {
	workoutPrograms: Array<Static<typeof workoutProgram>>;
};

export const workoutProgram = Type.Object({
	id: Type.Number(),
	title: Type.String(),
	userId: Type.Number(),
	description: Type.String(),
	createdAt: TDate(),
	updatedAt: TDate()
});

export const WorkoutProgramReply = Type.Object({
	workoutProgram
});

export const WorkoutProgramsReply = Type.Object({
	workoutPrograms: Type.Array(workoutProgram)
});
