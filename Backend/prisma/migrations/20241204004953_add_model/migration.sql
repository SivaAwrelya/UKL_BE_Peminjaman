-- CreateTable
CREATE TABLE `User` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_user` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'member') NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inventory` (
    `id_inventory` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_invetory` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id_inventory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Peminjaman` (
    `id_peminjaman` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_inventory` INTEGER NOT NULL,
    `qty` INTEGER NOT NULL,
    `borrow_date` DATETIME(3) NOT NULL,
    `return_date` DATETIME(3) NOT NULL,
    `status` ENUM('kembali', 'dipinjam') NOT NULL DEFAULT 'dipinjam',

    PRIMARY KEY (`id_peminjaman`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Peminjaman` ADD CONSTRAINT `Peminjaman_id_inventory_fkey` FOREIGN KEY (`id_inventory`) REFERENCES `Inventory`(`id_inventory`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peminjaman` ADD CONSTRAINT `Peminjaman_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
