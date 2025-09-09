import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import Lista_opcoes from "../Lista_Opc"
import "./Form.css"



const Form = (props) => {

    const [nome,setNome] = useState('')
    const [endereco,setEndereco] = useState('')
    const [imagem,setImagem] = useState('')
    const [lista,setLista] = useState('Programação')

    function aoclicar(evento){
        evento.preventDefault();
        props.cadastro({
            nome,
            endereco,
            imagem,
            lista
        })
        setNome('');
        setEndereco("");
        setImagem("");
        setLista('')
    }   

    return(
        <section className="form">
            <form onSubmit={aoclicar}>
                <h2>Preencha o card para criar o card do colaborador</h2>
                <CampoTexto 
                setX = {setNome} 
                valor = {nome} 
                obrigatorio = {true} 
                label="Nome" 
                placeholder="Digite seu nome"
                />

                <CampoTexto 
                setX = {setEndereco} 
                valor = {endereco} 
                obrigatorio = {true} 
                label="Numero" 
                placeholder="Digite seu numero"
                />

                <CampoTexto 
                setX = {setImagem} 
                valor = {imagem} 
                obrigatorio = {true} 
                label="Endereço" 
                placeholder="Digite seu Endereço"
                />  
                <Lista_opcoes 
                label= "Time" 
                itens = {props.times}
                valor = {lista}
                setX = {setLista}
                />  
                <Botao>Criar card</Botao>            
            </form>
        </section>
    )
}

export default Form