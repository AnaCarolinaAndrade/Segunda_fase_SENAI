import React, { useState } from 'react'
import Navbar from '../components/Navbar'

//7.13 - Faça um algoritmo que leia dois números e mostre todos os números 
//pares contidos entre eles. 
//Exemplo: 
// - Limite inferior: 3 
// - Limite superior: 12 
// - Saída: 4 6 8 10

function Numero713() {
const [numerosPares, setnumerosPares]= useState("")
const [numerosParesDois, setnumerosParesDois]= useState("")
const [mostrarPares, setMostrarPares]= useState (false)

    function lerNumero(){
    let calculoNumeroPar

    calculoNumeroPar= numerosPares / 2

    if(calculoNumeroPar % 2 == 0){
    }
    }

    function mostrarOsPares(){

    }

  return (
    <div>
      <Navbar/>
     <h2>Exercício 7.13</h2>

     <label>Digite um número</label><input type='number' value={numerosPares} onChange={(event) => setnumerosPares(event.target.value)}></input>
     <label>Digite o segundo número</label><input type='number' value={numerosParesDois} onChange={(event) => setnumerosParesDois(event.target.value)}></input>
     
     <button onClick={lerNumero}>Ler</button>
     <button onClick={mostrarOsPares}>Números pares</button>
    </div>
  )
}

export default Numero713
