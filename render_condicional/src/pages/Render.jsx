import React from 'react'
import { useState } from 'react'
import Painel_adm from '../components/Painel_adm'
import Produtos_para_maiores from '../components/Produtos_para_maiores'
import Loginn from './Loginn'
import Usuario_logadoo from './Usuario_logadoo'

function Render() {
    const [adm, setAdm]=useState (true)
    const [idade, setIdade]= useState(0)
  return (
    <div>
      <h1>Renderizações condicionais</h1>
      <div className='render_container'>
        <button onClick={() => {setAdm(true)}}>Adm</button>
        <button onClick={() => {setAdm(false)}}>Removido</button>
        {adm && <Painel_adm/>}
      </div>

      <div className='render_container'>
      <button onClick={() => {setIdade(idade-1)}}>-</button>
      {idade}
      <button onClick={() => {setIdade(idade+1)}}>+</button>
      { idade>= 18 && <Produtos_para_maiores/>}
      </div>

      <div className='render_container'>
        <button onClick={() => {setUsuario(true)}}>Logar</button>
        <button onClick={() => {setUsuario(false)}}>Deslogar</button>
        {usario ? <Usuario_logadoo/> : <Loginn/> }
      </div>

    </div>

  )
}

export default Render
