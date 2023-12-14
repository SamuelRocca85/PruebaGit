// import { ingredients } from "../../data/ingredients"
import { useEffect, useState } from 'react'
import './VerIngredientes.css'
import axios from 'axios'
import { getIngredientes } from '../../middlewares/Ingredientes/ingredientes'

const VerIngredientes = () => {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        getIngredientes().then(ingredientes => {
            setIngredients(ingredientes)
        })
    }, [])

    return (
        <div>
            {ingredients && <>
                <h1>Lista de Ingredientes</h1>
                <table>
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Compra</th>
                            <th>Expiracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map(ingredient => (
                            <tr key={ingredient._id}>
                                <td>{ingredient.sku}</td>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.quantity}</td>
                                <td>{ingredient.price}</td>
                                <td>{ingredient.buyDate}</td>
                                <td>{ingredient.expireDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>}
        </div>
    )
}

export default VerIngredientes