//5.29 - Copo meio cheio: Ler um número e informar se ele é positivo, 
//negativo ou nulo.

import { useState } from "react"

function ExerciciosUm() {
  const [resultado, setResultado]=useState()
  function clickNumero(){

    let numero=Number (prompt(" Digite um número: "))
    if(numero > 0)
    setResultado("O número é positivo! ")

    else if(numero < 0){
    setResultado("O número é negativo! ")
    
   }else if (numero >= 0){
    setResultado("O número é negativo! ")
   }
   
  }

  return (
    <div>
      <h2>Informaremos se o número digitdo é positivo, negativo ou nulo</h2>
      <button onClick={clickNumero}>Click</button>
      {resultado}
    </div>
  )
}

export default ExerciciosUm
