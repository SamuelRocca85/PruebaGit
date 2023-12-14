import Button from '../Button/Button'
import './Formulario.css'

const Formulario = ({ title, children }) => {
    return (
        <form className='formulario'>
            <h1>{title}</h1>
            <div className='formulario'>
                {children}
            </div>
        </form >
    )
}

export default Formulario