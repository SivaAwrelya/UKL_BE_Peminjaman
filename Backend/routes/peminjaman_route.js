import express from 'express'
import {
   getAllPeminjaman,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   usageReport
} from '../controllers/peminjaman_controller.js'

import { authorize } from '../controllers/auth_controller.js'
import { IsAdmin, IsMember } from '../middleware/role_validation.js'
const app = express()


app.get('/borrow', authorize, [IsAdmin], getAllPeminjaman)
app.get('/borrow/:id', authorize,[IsAdmin], getPeminjamanById)
app.post('/borrow', authorize,[IsAdmin], addPeminjaman)
app.post('/return', authorize, [IsAdmin], pengembalianBarang)
app.post('/usage-report', authorize, [IsAdmin], usageReport)

export default app