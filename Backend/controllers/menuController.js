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

export const getMenus = (_req, res) => {
  try {
    Menu.find({}).then((menus) => {
      res.status(200).json({ menus })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const deleteMenu = (req, res) => {
  try {
    Menu.findOneAndRemove({ sku: req.body.sku }).then((_) => {
      res.status(200).json({ status: 'Eliminado' })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const updateMenu = (req, res) => {
  try {
    Menu.findOneAndUpdate(
      { sku: req.body.sku },
      {
        sku: req.body.sku,
        name: req.body.name,
        price: req.body.price,
        combo: req.body.combo,
      }
    ).then((_) => {
      res.status(200).json({ status: 'Actualizado' })
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
