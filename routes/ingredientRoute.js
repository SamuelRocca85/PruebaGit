import { Router } from 'express'
import {
  createIngredient,
  deleteIngredient,
  getIngredients,
  updateIngredient,
} from '../controllers/ingredientController.js'

const router = Router()

router.post('/ingredient', createIngredient)
router.get('/ingredient', getIngredients)
router.delete('/ingredient', deleteIngredient)
router.put('/ingredient', updateIngredient)

export default router
