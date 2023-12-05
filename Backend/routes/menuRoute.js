import { Router } from 'express'
import {
  createMenu,
  deleteMenu,
  getMenus,
  updateMenu,
} from '../controllers/menuController.js'

const router = Router()

router.post('/menu', createMenu)
router.get('/menu', getMenus)
router.delete('/menu', deleteMenu)
router.put('/menu', updateMenu)

export default router
