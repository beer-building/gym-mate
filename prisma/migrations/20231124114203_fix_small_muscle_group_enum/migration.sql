/*
  Warnings:

  - The `smallMuscleGroup` column on the `Exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SmallMuscleGroup" AS ENUM ('SMALL_OF_THE_BACK', 'LATISSIMUS_MUSCLES', 'TRAPEZE', 'NECK', 'ABS', 'OBLUQUES', 'ANTERIOR_DELTA', 'MIDDLE_DELTA', 'REAR_DELTA', 'BICEPS', 'TRICEPS', 'FOREARMS', 'FRONT_THIGH', 'POSTERIOR_THIGH', 'INNER_THIGH', 'OUTER_THIGH');

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "smallMuscleGroup",
ADD COLUMN     "smallMuscleGroup" "SmallMuscleGroup";

-- DropEnum
DROP TYPE "SmallMucleGroup";

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_smallMuscleGroup_key" ON "Exercise"("smallMuscleGroup");
