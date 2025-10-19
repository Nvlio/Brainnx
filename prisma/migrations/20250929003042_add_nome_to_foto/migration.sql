/*
  Warnings:

  - You are about to drop the column `url` on the `foto` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[titulo]` on the table `Estudo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome` to the `Foto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `foto` DROP COLUMN `url`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Estudo_titulo_key` ON `Estudo`(`titulo`);
