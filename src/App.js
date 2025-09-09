import { useState } from 'react';
import Banner from './componentes/Banner/Banner_inicio';
import Form from './componentes/Form';
import Time from './componentes/Time';



function App() {

  const times = [
    {
      nome: 'Tecnologia',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Produto',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Design',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Marketing',
      corPrimaria: '#E05B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Operações',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#EAE9F5'
    }                        
  ]

  const [cadastros,setCadastros] = useState([])

  const cadastro_adicionado = (cadastro_unico) =>{
      setCadastros([...cadastros,cadastro_unico])
      console.log(cadastros)
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form times = {times.map(time => time.nome)} cadastro = {cadastro_unico => cadastro_adicionado(cadastro_unico)}/>
      
      {times.map(time =>
        <Time key = {time.nome} 
        nome = {time.nome} 
        corPrimaria = {time.corPrimaria}  
        corSecundaria = {time.corSecundaria}
        cadastros = {cadastros.filter(cadastro => cadastro.lista === time.nome)}
        />)}

    </div>
  );
}

export default App;
