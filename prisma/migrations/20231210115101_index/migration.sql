-- RedefineIndex
CREATE INDEX `Booking_rooms_id_fkey` ON `booking`(`rooms_id`);
DROP INDEX `booking_rooms_id_fkey` ON `booking`;
