import Formulario from "../components/Formulario/Formulario"
import Input from "../components/Input/Input"
const Login = () => {
    return (
        <Formulario title='Login'>
            <Input id='username' label='Nombre de usuario' type='text' />
            <Input id='password' label='Contraseña' type='password' />
        </Formulario>
    )
}

export default Login