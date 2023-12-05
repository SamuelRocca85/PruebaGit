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

export const getPizzas = (_req, res) => {
  try {
    Pizza.find({}).then((pizzas) => {
      res.status(200).json({ pizzas })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const deletePizza = (req, res) => {
  try {
    Pizza.findOneAndRemove({ sku: req.body.sku }).then((_) => {
      res.status(200).json({ status: 'Eliminado' })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const updatePizza = (req, res) => {
  try {
    Pizza.findOneAndUpdate(
      { sku: req.body.sku },
      {
        name: req.body.name,
        sku: req.body.sku,
        price: req.body.price,
        size: req.body.size,
        ingredients: req.body.ingredients,
      }
    ).then((_) => {
      res.status(200).json({ status: 'Actualizado' })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
