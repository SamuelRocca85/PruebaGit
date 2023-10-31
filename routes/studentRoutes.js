import { deleteStudent, newStudent } from '../controllers/studentController.js'
import { Router } from 'express'

const router = Router()

router.post('/create', newStudent)
router.delete('/delete', deleteStudent)

export default router
