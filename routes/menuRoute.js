import { Router } from 'express'
import { createMenu } from '../controllers/menuController.js'

const router = Router()

router.post('/menu', createMenu)

export default router
