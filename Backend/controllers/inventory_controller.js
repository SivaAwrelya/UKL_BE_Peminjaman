import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllInventory = async (req, res) => {
    try {
        const { ids } = req.query;
        let result;

        if (ids) {
            const idsArray = ids.split(','); 
            result = await prisma.inventory.findMany({
                where: {
                    id: {
                        in: idsArray, 
                    },
                },
            });
        } else {
            result = await prisma.inventory.findMany();
        }

        res.status(200).json({
            status: "success",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while fetching inventory",
        });
    }
};
export const getInventoryById = async(req, res) =>{
    try {
        const result = await prisma.inventory.findUnique({
            where:{
                id_inventory:Number (req.params.id)  
            }
        })
        res.status(200).json({
            success: true,
            data : result
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: MessageChannel.error
        })   
    }
}
export const addInventory = async(req, res) =>{
    try {
        const {barang, kategori, location, quantity} = req.body
        const result = await prisma.inventory.create({
            data:{
                nama_barang : barang,
                category : kategori,
                location : location,
                quantity : quantity
            }
        })
        res.status(200).json({
            status: "success",
            message : "Barang berhasil ditambahkan",
            data : result
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: MessageChannel.error
        })   
    }
}
export const updateInventory = async(req, res) =>{
    try {
        const {barang, kategori, location, quantity} = req.body
        const result = await prisma.inventory.update({
            where:{
                id_inventory: Number(req.params.id)
            },
            data:{
                nama_barang : barang,
                category : kategori,
                location : location,
                quantity : quantity
            }
        })
        res.status(200).json({
            status: "success",
            message : "Barang berhasil diubah", 
            data : result
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: MessageChannel.error
        })   
    }
}
export const deleteInventory = async(req, res) =>{
    try {
        const result = await prisma.inventory.delete({
            where:{
                id_inventory: Number(req.params.id)
            },
        })
        res.status(200).json({
            Status:"success",
            message : "data berhasil di hapus",
            data:result
        })
    } catch (error) {
        console.log(error);
        res.json({
            message : "id tidak ditemukan",
            msg: MessageChannel.error
        })   
    }
}