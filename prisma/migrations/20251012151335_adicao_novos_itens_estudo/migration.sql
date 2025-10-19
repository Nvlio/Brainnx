-- AlterTable
ALTER TABLE `estudo` ADD COLUMN `anteriorid` INTEGER NULL,
    ADD COLUMN `posteriorid` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Estudo` ADD CONSTRAINT `Estudo_anteriorid_fkey` FOREIGN KEY (`anteriorid`) REFERENCES `Estudo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estudo` ADD CONSTRAINT `Estudo_posteriorid_fkey` FOREIGN KEY (`posteriorid`) REFERENCES `Estudo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
