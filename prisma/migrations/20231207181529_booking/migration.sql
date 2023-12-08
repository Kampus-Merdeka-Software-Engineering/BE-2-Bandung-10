/*
  Warnings:

  - You are about to alter the column `fullname` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - Made the column `email` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `check_in` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `check_out` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `adults_amount` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `childs_amount` on table `booking` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_rooms_id_fkey`;

-- AlterTable
ALTER TABLE `booking` MODIFY `fullname` VARCHAR(50) NOT NULL,
    MODIFY `email` VARCHAR(50) NOT NULL,
    MODIFY `phone` VARCHAR(50) NOT NULL,
    MODIFY `check_in` DATE NOT NULL,
    MODIFY `check_out` DATE NOT NULL,
    MODIFY `adults_amount` INTEGER NOT NULL,
    MODIFY `childs_amount` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_rooms_id_fkey` FOREIGN KEY (`rooms_id`) REFERENCES `Rooms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
