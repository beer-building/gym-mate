/*
  Warnings:

  - The values [OBLUQUES] on the enum `SmallMuscleGroup` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SmallMuscleGroup_new" AS ENUM ('SMALL_OF_THE_BACK', 'LATISSIMUS_MUSCLES', 'TRAPEZE', 'NECK', 'ABS', 'OBLIQUES', 'ANTERIOR_DELTA', 'MIDDLE_DELTA', 'REAR_DELTA', 'BICEPS', 'TRICEPS', 'FOREARMS', 'FRONT_THIGH', 'POSTERIOR_THIGH', 'INNER_THIGH', 'OUTER_THIGH');
ALTER TABLE "Exercise" ALTER COLUMN "smallMuscleGroup" TYPE "SmallMuscleGroup_new" USING ("smallMuscleGroup"::text::"SmallMuscleGroup_new");
ALTER TYPE "SmallMuscleGroup" RENAME TO "SmallMuscleGroup_old";
ALTER TYPE "SmallMuscleGroup_new" RENAME TO "SmallMuscleGroup";
DROP TYPE "SmallMuscleGroup_old";
COMMIT;
