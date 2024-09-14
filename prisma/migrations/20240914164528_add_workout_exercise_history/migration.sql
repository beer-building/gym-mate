-- AlterTable
ALTER TABLE "WorkoutExercise" ALTER COLUMN "rest" SET DEFAULT 120;

-- CreateTable
CREATE TABLE "WorkoutExerciseHistory" (
    "id" SERIAL NOT NULL,
    "workoutExerciseId" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 0,
    "reps" INTEGER NOT NULL DEFAULT 0,
    "sets" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkoutExerciseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WorkoutToWorkoutExerciseHistory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_WorkoutToWorkoutExerciseHistory_AB_unique" ON "_WorkoutToWorkoutExerciseHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_WorkoutToWorkoutExerciseHistory_B_index" ON "_WorkoutToWorkoutExerciseHistory"("B");

-- AddForeignKey
ALTER TABLE "_WorkoutToWorkoutExerciseHistory" ADD CONSTRAINT "_WorkoutToWorkoutExerciseHistory_A_fkey" FOREIGN KEY ("A") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WorkoutToWorkoutExerciseHistory" ADD CONSTRAINT "_WorkoutToWorkoutExerciseHistory_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkoutExerciseHistory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
