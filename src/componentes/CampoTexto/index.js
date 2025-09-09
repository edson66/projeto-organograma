import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const aodigitar = (evento) => {
        props.setX(evento.target.value)
    }
    

    return(
        <div className='cptexto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aodigitar} required = {props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    );
}

export default CampoTexto