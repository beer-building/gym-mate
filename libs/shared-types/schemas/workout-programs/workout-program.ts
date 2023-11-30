import { Type } from '@sinclair/typebox';
import type { WorkoutProgram } from '@prisma/client';

type WorkoutProgramUnit = Omit<WorkoutProgram, 'userId'>;

export type WorkoutProgramReply = {
	workoutProgram: WorkoutProgramUnit;
};

export type WorkoutProgramsReply = {
	workoutPrograms: Array<WorkoutProgram>;
};

export const workoutProgram = Type.Object({
	id: Type.Number(),
	title: Type.String(),
	userId: Type.Number(),
	description: Type.Union([Type.Null(), Type.String()]),
	createdAt: Type.Optional(Type.Date())
});

export const WorkoutProgramReply = Type.Object({
	workoutProgram
});

export const WorkoutProgramsReply = Type.Object({
	workoutPrograms: Type.Array(workoutProgram)
});
