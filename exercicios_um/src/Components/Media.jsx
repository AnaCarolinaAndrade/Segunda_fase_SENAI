import {useState} from "react"
import './Media.css'
function Media() {
    const [resultado, setResultado]= useState()

    function calcularMedia(){
    let nota1= Number(prompt('Digite o 1o número:'))
    let nota2= Number(prompt('Digite o 2o número:'))
    let media= (nota1 + nota2)/2
    setResultado(media)
    }

    return(
    <div className="media2_container">
      <h2>Exercícios para calcular média de 2 números</h2>
      <div className="button_media">
        <center>
       <button onClick={calcularMedia}>Calcular</button>
       </center>
      </div>
        <div>
         Média: {resultado}
         </div>
    </div>
    )
  
}

export default Media
