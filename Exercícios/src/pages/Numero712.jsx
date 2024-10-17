import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Numero712() {
    const [inputNumero, setInputNumero]= useState("")
    const [contagem, setContagem]= useState ('')
    const [mostrarResultado, setResultado]= useState (false)


    function lerNumero(){
        if(inputNumero > 100 && inputNumero < 200){
            setContagem(contagem + 1)
        }
    }

    function renderizadoResultado(){
        setResultado(true)
    }

  return (
    <div>
      <Navbar/>

      <h2>Exercícios 712</h2>
      <input ttype='text' value={inputNumero} onChange={(event) => setInputNumero(event.target.value)}></input>

      <button  onClick={lerNumero}>Ler</button>
      <button onClick={renderizadoResultado}>Resultado</button>

     { mostrarResultado &&
      <div>
        <p>Números na faixa 100 a 200 {contagem}</p>
      </div>
    }
    </div>
  )

}

export default Numero712
