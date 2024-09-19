//5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
//crédito para os funcionários. O valor da prestação não pode ultrapassar 
//30% do salário. Faça um programa que receba o salário, o valor do 
//empréstimo e o número de prestações e informe se o empréstimo pode ser 
//concedido. Nenhum dos valores informados pode ser zero ou negativo.

import React from 'react'
import { useState } from 'react'
import Relatorio_emprestimo from './Relatorio_emprestimo'

function analise_emprestimo (){
 let valor_maximo_prestacoes= input_salario * 0.3
 let valor_pretacoes= input_emprestimo / input_prestacoes

 if(valor_pretacoes < valor_maximo_prestacoes){
 let infos_relatorio= {
  situacao: 'aprovado!',
  max_prestacoes: valor_maximo_prestacoes,
  prestacao: valor_pretacoes,
  emprestimo: input_emprestimo,
  prestacoes: input_prestacoes
}
 set_state_relatorio(infos_relatorio)

 }else{
  let infos_relatorio= {
    situacao: 'reprovado!',
    max_prestacoes: valor_maximo_prestacoes,
    prestacao: valor_pretacoes,
    emprestimo: input_emprestimo,
    prestacoes: input_prestacoes
  }
   set_state_relatorio(infos_relatorio)
  }

}

function ExerciciosQuatro() {
  const [input_salario, set_input_salario]= useState('')
  const [input_emprestimo, set_input_emprestimo]= useState('')
  const [input_prestacoes, set_input_prestacoes]= useState('')
  const [state_relatorio, set_state_relatorio]=useState ('')
 
  return (
    <div class="garcom_contaiener">
    
    <label htmlFor="input_salario">Salario</label>
    <input type="text" id='input_salario'></input>
    value={input_salario}
    onChange={ (event) => set_input_salario(event.target.value)}

    <label htmlFor="input_emprestimo">Valor do emprestimo</label>
    <input type="text" id='input_emprestimo'></input>
    value={input_emprestimo}
    onChange={ (event) => set_input_emprestimo(event.target.value)}

    <label htmlFor="input_prestacoes">Quantidades de prestações de emprestimo</label>
    <input type="text" id='input_prestacoes'></input>
    value={input_prestacoes}
    onChange={ (event) => set_input_prestacoes(event.target.value)}

    <button onClick={'analise_emprestimo'}>Autorizar emprestimo</button>

    {state_relatorio && 
    <Relatorio_emprestimo infos={ state_relatorio}/>
    }

    </div>
  )
}

export default ExerciciosQuatro
