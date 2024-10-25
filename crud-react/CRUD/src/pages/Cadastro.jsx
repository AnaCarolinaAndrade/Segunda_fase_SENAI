"import {useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import {GlobalContext} from '../contexts/GlobalContext'
import './Cadastro.css'


function Cadastro() {
    const{contatinho, setContatinho, contatinhos, setContatinhos}= useContext(GlobalContext)
    const[inputNome,setInputNome]=useState('')
    function cadastrarContatinho(){
       
       setContatinhos([...contatinhos, inputNome])
       console.log(contatinhos);
    }
  return (
    <div>
        <Navbar/>
      <h1>Cadastre seu Contato</h1>
      <div className='input-container'>
      <label htmlFor=''>Digite seu nome</label>
      <input type='text' value={inputNome} onChange={(event) => setInputNome(event.target.value)}></input>
      </div>
   

      <button onClick={cadastrarContatinho}>Cadastrar contato</button>
      <div className='contatinhos'>
        {contatinhos.map( (a, inedx) => (
            <div className='card-contatinho' key={inedx}>
                <p>{a}</p>
            </div>
        ))}
      </div>

    </div>
  )
}

export default Cadastro
