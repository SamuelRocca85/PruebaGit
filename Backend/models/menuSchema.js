import mongoose from 'mongoose'

const MenuSchema = mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  combo: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Pizza',
    },
  ],
})

const Menu = mongoose.model('Menu', MenuSchema)

export default Menu
