//5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
//tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
//destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
//acabar...
//Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
//única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
//e fez check in, mas não conseguiu entender de forma alguma como o hotel 
//calculava o valor da conta. Ele é meio burro, vocês sabem...
//O albergue utilizas faixas de preço de acordo com o número de diárias
//Até 5 diárias, o preço por diária é R$100,00;
//De 6 a 10 diárias, R$90,00 por dia;
//A partir de 11 dias, sai R$80,00 por dia;
//Outros fatos relevantes para determinar o valor da conta:
//- Ele acabou ganhando um desconto a mais de 10% do valor total porque 
//teve um “envolvimento emocional” com a moça que trabalha no balcão;
//- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
//carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
//com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
//de desconto;
//- Ele se passou e vai pagar multa de R$150 por danos materiais.
//Criar um programa que lê o número de dias que ele vai ficar no albergue 
//e apresente o valor final da conta e sua composição (os detalhes, 
//pagamentos, descontos...);


import React from 'react'
import { useState } from 'react'

function Diaria_juca() {
const[input_diarias, set_input_diarias]=useState('')

function valores_diarias(){
  let valor_diarias,  valor_com_desconto, valor_total_pagar
  let desconto_calculo
  
      if(input_diarias <= 5){
      valor_diarias= input_diarias * 100
      desconto_calculo=  25/100 * valor_diarias
      valor_com_desconto= valor_diarias - desconto_calculo
      valor_total_pagar= valor_com_desconto + 150
  
      alert('valor das diarias: ' + valor_diarias , 'valor com deconto:' + valor_com_desconto , 'valor da multa: 150', 'valor total para Joca pagar: ' + valor_total_pagar )
      }
  }

  return (
    <div>
        <center>
        <h2>Alberque</h2>
       <h3>Digite as diarias de joca que daremos o valor total para ele pagar</h3>

       <label htmlFor='input_diarias'>Quantidades de diarias que joca irá ficar:</label>
       <input type='number' id='input_diarias'></input>
       {input_diarias}

       <button onClick={'valores_diarias'}>Valores</button>""
       </center>
       
    </div>
  )
}


export default Diaria_juca
