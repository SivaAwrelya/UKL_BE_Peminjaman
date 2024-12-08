import express from 'express'
import {
    getAllInventory,
    getInventoryById,
    addInventory,
    updateInventory,
    deleteInventory

}from '../controllers/inventory_controller.js'

import { authenticate, authorize } from '../controllers/auth_controller.js'
import { IsAdmin, IsMember } from '../middleware/role_validation.js'


const app = express()
app.use(express.json())

app.get('/',authorize, [IsAdmin], [IsMember], getAllInventory)
app.get('/:id', authorize, [IsAdmin], getInventoryById)
app.post('/', authorize, [IsAdmin], addInventory)
app.put('/:id', authorize, [IsAdmin], updateInventory)
app.delete('/:id', authorize,[IsAdmin], deleteInventory)

app.post('/login', authenticate)

export default app