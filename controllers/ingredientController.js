import Ingredient from '../models/ingredientSchema.js'

export const createIngredient = (req, res) => {
  const ingredient = new Ingredient({
    name: req.body.name,
    sku: req.body.sku,
    quantity: req.body.quantity,
    expireDate: req.body.expireDate,
    buyDate: req.body.buyDate,
    price: req.body.price,
  })

  try {
    ingredient.save()
    res.status(200).json(ingredient)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
