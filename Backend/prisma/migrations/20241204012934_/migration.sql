/*
  Warnings:

  - You are about to drop the column `nama_invetory` on the `inventory` table. All the data in the column will be lost.
  - Added the required column `nama_barang` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inventory` DROP COLUMN `nama_invetory`,
    ADD COLUMN `nama_barang` VARCHAR(191) NOT NULL;
