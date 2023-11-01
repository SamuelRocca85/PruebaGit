import { Router } from 'express'
import { createIngredient } from '../controllers/ingredientController.js'

const router = Router()

router.post('/ingredient', createIngredient)

export default router
