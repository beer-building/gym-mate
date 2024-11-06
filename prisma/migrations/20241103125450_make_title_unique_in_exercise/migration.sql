/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Exercise` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Exercise" ALTER COLUMN "title" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_title_key" ON "Exercise"("title");
