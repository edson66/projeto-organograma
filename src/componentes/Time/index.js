import Cadastrado from "../Cadastrado"
import "./Time.css"

const Time = (props) => {
    return(
        (props.cadastros.length > 0) ? <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="cadastros">
                {props.cadastros.map(cadastro => <Cadastrado key = {cadastro.nome} cor = {props.corPrimaria} nome = {cadastro.nome}  cargo = {cadastro.posicao}  imagem = {cadastro.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time

