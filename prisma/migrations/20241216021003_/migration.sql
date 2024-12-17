/*
  Warnings:

  - You are about to drop the column `genreId` on the `Book` table. All the data in the column will be lost.
  - Added the required column `name` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_genreId_fkey`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `genreId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_name_fkey` FOREIGN KEY (`name`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
