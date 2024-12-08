import express from 'express'

import { authenticate, authorize } from '../controllers/auth_controller.js'


const app = express()
app.use(express.json())

app.post('/login', authenticate)

export default app