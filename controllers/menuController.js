import Menu from '../models/menuSchema.js'

export const createMenu = (req, res) => {
  const menu = Menu({
    sku: req.body.sku,
    name: req.body.name,
    price: req.body.price,
    combo: req.body.combo,
  })

  try {
    menu.save()
    res.status(200).json({ menu })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
