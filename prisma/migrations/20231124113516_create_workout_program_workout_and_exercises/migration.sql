-- CreateEnum
CREATE TYPE "LargeMuscleGroup" AS ENUM ('BACK_AND_NECK', 'BUTTOCKS', 'ABS_AND_OBLIQUES', 'SHOULDERS', 'HANDS', 'CHEST', 'LEGS', 'SHIN');

-- CreateEnum
CREATE TYPE "SmallMucleGroup" AS ENUM ('SMALL_OF_THE_BACK', 'LATISSIMUS_MUSCLES', 'TRAPEZE', 'NECK', 'ABS', 'OBLUQUES', 'ANTERIOR_DELTA', 'MIDDLE_DELTA', 'REAR_DELTA', 'BICEPS', 'TRICEPS', 'FOREARMS', 'FRONT_THIGH', 'POSTERIOR_THIGH', 'INNER_THIGH', 'OUTER_THIGH');

-- CreateTable
CREATE TABLE "WorkoutProgram" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT DEFAULT '',
    "userId" INTEGER NOT NULL,

    CONSTRAINT "WorkoutProgram_pkey" PRIMARY KEY ("id")
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
    "largeMuscleGroup" "LargeMuscleGroup" NOT NULL,
    "smallMucleGroup" "SmallMucleGroup",
    "workoutId" INTEGER,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyLoad" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "largeMuscleGroup" "LargeMuscleGroup" NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "BodyLoad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_smallMucleGroup_key" ON "Exercise"("smallMucleGroup");

-- AddForeignKey
ALTER TABLE "WorkoutProgram" ADD CONSTRAINT "WorkoutProgram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_workoutProgramId_fkey" FOREIGN KEY ("workoutProgramId") REFERENCES "WorkoutProgram"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BodyLoad" ADD CONSTRAINT "BodyLoad_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
