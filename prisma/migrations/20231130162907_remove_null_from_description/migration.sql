/*
  Warnings:

  - Made the column `description` on table `WorkoutProgram` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "WorkoutProgram" ALTER COLUMN "description" SET NOT NULL;
