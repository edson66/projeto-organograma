import "./Lista_Opc.css"

const Lista_opcoes = (props) => {

    const aoescolher = (evento) => {
        props.setX(evento.target.value)
    }

    return(
        <div className="Lista">
            <label>{props.label}</label>
            <select onChange={aoescolher} value={props.valor}>
                <option value = ""></option>
                {props.itens.map(item => {
                    return (
                        <option key={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Lista_opcoes