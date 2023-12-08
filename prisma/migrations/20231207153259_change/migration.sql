/*
  Warnings:

  - You are about to alter the column `check_in` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Date`.
  - You are about to alter the column `check_out` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Date`.

*/
-- AlterTable
ALTER TABLE `booking` MODIFY `check_in` DATE NULL,
    MODIFY `check_out` DATE NULL;
