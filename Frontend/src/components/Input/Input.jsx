import './Input.css'

const Input = ({ label, id, type }) => {
    return (
        <div className='text-input'>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} />
        </div>
    )
}

export default Input