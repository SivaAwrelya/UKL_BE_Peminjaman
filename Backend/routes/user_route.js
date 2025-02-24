import express from 'express'
import {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser

}from '../controllers/user_controller.js'

import { authenticate, authorize } from '../controllers/auth_controller.js';
import {IsAdmin, IsMember} from '../middleware/role_validation.js';


const app = express()
app.use(express.json())

app.get('/', authorize, IsAdmin,getAllUser)
app.get('/:id', authorize, IsAdmin, getUserById)
app.post('/', authorize, IsAdmin, addUser)
app.get('/:id',authorize, IsAdmin, updateUser)
app.get('/:id', authorize, IsAdmin,  deleteUser)

app.post('/login', authenticate)

export default app