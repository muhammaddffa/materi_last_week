/*
  Warnings:

  - You are about to drop the column `name` on the `Book` table. All the data in the column will be lost.
  - Added the required column `genreId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_name_fkey`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `name`,
    ADD COLUMN `genreId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
