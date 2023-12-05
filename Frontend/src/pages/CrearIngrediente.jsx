import Formulario from "../components/Formulario/Formulario"
import Input from "../components/Input/Input"

const CrearIngrediente = () => {
    return (
        <Formulario title='Crear ingrediente'>
            <Input id='sku' label='SKU' type='text'></Input>
            <Input id='name' label='Nombre' type='text'></Input>
            <Input id='qty' label='Cantidad' type='number'></Input>
            <Input id='price' label='Precio' type='number'></Input>
            <Input id='buy' label='Fecha de Compra' type='date'></Input>
            <Input id='expire' label='Fecha Expiraion' type='date'></Input>
        </Formulario>
    )
}

export default CrearIngrediente