//5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
//crédito para os funcionários. O valor da prestação não pode ultrapassar 
//30% do salário. Faça um programa que receba o salário, o valor do 
//empréstimo e o número de prestações e informe se o empréstimo pode ser 
//concedido. Nenhum dos valores informados pode ser zero ou negativo.

import { useState } from 'react'

function ExerciciosTres(){

    function calcularPrestacoes(){
     const [resultado, setResultado]=useState()

     let salario= Number (prompt('Digite seu salário:'))
     let valor_emprestimo= Number (prompt('Digite o valor do seu emprestimo:'))
     let prestacoes=Number (prompt('Digite o valor do suas prestaçãoes:' ))
     let calculo= valor_emprestimo/prestacoes
     let calculoDois=calculo * 100/salario

     if( salario <= 0 || valor_emprestimo <= 0 || prestacoes <= 0){
     setResultado(' Valores incorretos! ')
     }

     else if(calculoDois <= 30){
     setResultado ('o empréstimo Não pode ser concedido!')
     }

     else if(calculoDois >= 30){
     setResultado('o empréstimo pode ser concedido!')
     }

    }   

  return (
    <div className='pretacoes_container'>
        <h2>Linha de credito da nossa empresa xxx</h2>

         <button onClick={calcularPrestacoes}>aperte</button>
         {resultado}
    </div>
  )
}

export default ExerciciosTres