import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import "./Form.css"
import ListaOpc from "../ListaOpc"



const Form = (props) => {

    const [nome,setNome] = useState('')
    const [posicao,setPosicao] = useState('')
    const [imagem,setImagem] = useState('')
    const [lista,setLista] = useState('')

    function aoclicar(evento){
        evento.preventDefault();
        props.cadastro({
            nome,
            posicao,
            imagem,
            lista
        })
        setNome('');
        setPosicao("");
        setImagem("");
        setLista('');
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
                setX = {setPosicao} 
                valor = {posicao} 
                obrigatorio = {true} 
                label="Cargo" 
                placeholder="Digite sua posição"
                />

                <CampoTexto 
                setX = {setImagem} 
                valor = {imagem} 
                obrigatorio = {true} 
                label="Imagem" 
                placeholder="Digite um endereço para uma imagem sua"
                />  
                <ListaOpc
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