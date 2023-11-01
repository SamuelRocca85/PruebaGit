import { Router } from 'express'
import { createPizza } from '../controllers/pizzaController.js'

const router = Router()

router.post('/pizza', createPizza)

export default router
