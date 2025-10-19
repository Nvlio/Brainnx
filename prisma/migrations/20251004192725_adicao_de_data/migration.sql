/*
  Warnings:

  - Added the required column `titulo` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estudo` ADD COLUMN `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `video` ADD COLUMN `titulo` VARCHAR(191) NOT NULL;
