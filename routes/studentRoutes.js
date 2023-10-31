import { newStudent } from '../controllers/studentController.js'
import { Router } from 'express'

const router = Router()

router.post('/create', newStudent)

export default router
