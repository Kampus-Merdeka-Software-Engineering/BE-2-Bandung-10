-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `rooms_id` INTEGER NULL,
    `check_in` DATETIME(3) NOT NULL,
    `check_out` DATETIME(3) NOT NULL,
    `adults_amount` INTEGER NOT NULL,
    `childs_amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rooms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rooms` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_rooms_id_fkey` FOREIGN KEY (`rooms_id`) REFERENCES `Rooms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
