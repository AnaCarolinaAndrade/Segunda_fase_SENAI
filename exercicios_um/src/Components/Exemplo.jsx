import { useState } from "react"
function Exemplo(){

    const [resultado, setResultado]= useState(0)

    function aumentar(){
        setResultado(resultado + 1)
    }

    return (
    <div className="Media_container">
      <button onClick={aumentar}>+</button>
       {resultado}

       <button onClick={diminuir}>-</button>
       {resultado}
       
    </div>
    )

    function diminuir(){
        setResultado(resultado - 1)
    }
    
    
}

export default Exemplo