import { Router } from 'express'
import {
  createPizza,
  deletePizza,
  getPizzas,
  updatePizza,
} from '../controllers/pizzaController.js'

const router = Router()

router.post('/pizza', createPizza)
router.get('/pizza', getPizzas)
router.delete('/pizza', deletePizza)
router.put('/pizza', updatePizza)

export default router
