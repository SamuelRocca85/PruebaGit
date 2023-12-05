import mongoose from 'mongoose'

const IngredientSchema = mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  expireDate: {
    type: Date,
    required: true,
  },
  buyDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const Ingredient = mongoose.model('Ingredient', IngredientSchema)

export default Ingredient
