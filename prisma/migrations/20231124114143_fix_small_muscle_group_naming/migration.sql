/*
  Warnings:

  - You are about to drop the column `smallMucleGroup` on the `Exercise` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[smallMuscleGroup]` on the table `Exercise` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Exercise_smallMucleGroup_key";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "smallMucleGroup",
ADD COLUMN     "smallMuscleGroup" "SmallMucleGroup";

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_smallMuscleGroup_key" ON "Exercise"("smallMuscleGroup");
