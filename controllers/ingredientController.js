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

export const getIngredients = (_req, res) => {
  try {
    Ingredient.find({}).then((ingredients) => {
      res.status(200).json({ ingredients })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const deleteIngredient = (req, res) => {
  try {
    Ingredient.findOneAndRemove({ sku: req.body.sku }).then((_) => {
      res.status(200).json({ status: 'Eliminado' })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const updateIngredient = (req, res) => {
  try {
    Ingredient.findOneAndUpdate(
      { sku: req.body.sku },
      {
        name: req.body.name,
        sku: req.body.sku,
        quantity: req.body.quantity,
        expireDate: req.body.expireDate,
        buyDate: req.body.buyDate,
        price: req.body.price,
      }
    ).then((_) => {
      res.status(200).json({ status: 'Actualizado' })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
