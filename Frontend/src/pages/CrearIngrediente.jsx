import Button from "../components/Button/Button"
import Formulario from "../components/Formulario/Formulario"
import Input from "../components/Input/Input"

const CrearIngrediente = () => {
    return (
        <Formulario title='Crear ingrediente'>
            <div className='input-group'>
                <Input id='sku' label='SKU' type='text'></Input>
                <Input id='name' label='Nombre' type='text'></Input>
            </div>
            <div className="input-group">
                <Input id='qty' label='Cantidad' type='number'></Input>
                <Input id='price' label='Precio' type='number'></Input>
            </div>
            <div className="input-group">
                <Input id='buy' label='Fecha de Compra' type='date'></Input>
                <Input id='expire' label='Fecha Expiraion' type='date'></Input>
            </div>

            <Button>Iniciar</Button>
        </Formulario>
    )
}

export default CrearIngrediente