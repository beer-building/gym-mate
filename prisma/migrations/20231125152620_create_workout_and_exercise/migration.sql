-- CreateEnum
CREATE TYPE "Muscle" AS ENUM ('SMALL_OF_THE_BACK', 'LATISSIMUS', 'TRAPEZE', 'NECK', 'BUTTOCKS', 'ABS', 'OBLIQUES', 'FRONT_DELTA', 'MIDDLE_DELTA', 'REAR_DELTA', 'BICEPS', 'TRICEPS', 'FOREARMS', 'CHEST', 'FRONT_THIGH', 'POSTERIOR_THIGH', 'INNER_THIGH', 'OUTER_THIGH', 'SHIN');

-- CreateTable
CREATE TABLE "WorkoutProgram" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT DEFAULT '',

    CONSTRAINT "WorkoutProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWorkoutPrograms" (
    "userId" INTEGER NOT NULL,
    "workoutProgramId" INTEGER NOT NULL,

    CONSTRAINT "UserWorkoutPrograms_pkey" PRIMARY KEY ("userId","workoutProgramId")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workoutProgramId" INTEGER,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT DEFAULT '',
    "workoutId" INTEGER,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyLoad" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "muscle" "Muscle" NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "BodyLoad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkoutProgram" ADD CONSTRAINT "WorkoutProgram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWorkoutPrograms" ADD CONSTRAINT "UserWorkoutPrograms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWorkoutPrograms" ADD CONSTRAINT "UserWorkoutPrograms_workoutProgramId_fkey" FOREIGN KEY ("workoutProgramId") REFERENCES "WorkoutProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_workoutProgramId_fkey" FOREIGN KEY ("workoutProgramId") REFERENCES "WorkoutProgram"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BodyLoad" ADD CONSTRAINT "BodyLoad_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
