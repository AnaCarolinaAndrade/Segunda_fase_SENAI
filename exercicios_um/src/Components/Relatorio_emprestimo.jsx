import React from 'react'

function Relatorio_emprestimo(props) {
  return (
    <div>
      <p>Relatorio do resultado da simulação:</p>
      <p> resultado: {props.infos.situacao}</p>
      <p>Valor emprestimo: R${props.infos.situacao}</p>
      <p>Número prestações: {props.infos.situacao}</p>
      <p>Valor de cada prestações: R$ {props.infos.situacao}</p>
      <p>Valor limite de cada emprestações: R$ {props.infos.situacao}</p>
    </div>
  )
}

export default Relatorio_emprestimo
