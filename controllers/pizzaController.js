import Pizza from '../models/pizzaSchema.js'

export const createPizza = (req, res) => {
  const pizza = new Pizza({
    name: req.body.name,
    sku: req.body.sku,
    price: req.body.price,
    size: req.body.size,
    ingredients: req.body.ingredients,
  })

  try {
    pizza.save()
    res.status(200).json({ pizza })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
