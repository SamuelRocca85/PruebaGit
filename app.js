import express, { json } from 'express'
import { connect, model } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import studentRoute from './routes/studentRoutes.js'
const app = express()
const port = 3000

app.use(json())

connect(process.env.MONGOOSE_KEY, { useNewUrlParser: true })
// const Alumno = model('Alumno', {
//   id: Number,
//   name: String,
//   age: Number,
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/es', (req, res) => {
  res.send('Hola Mundo!')
})

app.get('/home', (req, res) => {
  res.send('Home')
})

app.use(studentRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
