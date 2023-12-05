import Button from '../Button/Button'
import './Formulario.css'

const Formulario = ({ title, children }) => {
    return (
        <form className='formulario'>
            <h1>{title}</h1>
            <div className='formulario'>
                {children}
            </div>
            <Button>Iniciar</Button>
        </form >
    )
}

export default Formulario