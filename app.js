const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = 3000

app.use(express.json())

mongoose.connect(process.env.MONGOOSE_KEY, { useNewUrlParser: true })
const Alumno = mongoose.model('Alumno', {
  id: Number,
  name: String,
  age: Number,
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/es', (req, res) => {
  res.send('Hola Mundo!')
})

app.get('/home', (req, res) => {
  res.send('Home')
})

app.post('/mongo', (req, res) => {
  const alumno = new Alumno({
    id: 2,
    name: 'Mongo',
    age: 23,
  })
  alumno.save().then(() => console.log('Creado'))
  res.send('Exito')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
