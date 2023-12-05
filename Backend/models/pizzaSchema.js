import mongoose from 'mongoose'

const PizzaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Ingredient',
    },
  ],
})

const Pizza = mongoose.model('Pizza', PizzaSchema)

export default Pizza
