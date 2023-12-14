import express from 'express'
import { connect } from 'mongoose'
import dotenv from 'dotenv'
import PizzaRoute from './routes/pizzaRoute.js'
import IngredientRoute from './routes/ingredientRoute.js'
import MenuRoute from './routes/menuRoute.js'
import cors from 'cors'
dotenv.config()
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

connect(process.env.MONGOOSE_KEY, { useNewUrlParser: true })

app.use(PizzaRoute)
app.use(IngredientRoute)
app.use(MenuRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
