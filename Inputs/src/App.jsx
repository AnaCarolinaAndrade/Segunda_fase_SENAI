import { useState } from 'react'
import De_maior from './Components/De_maior'
import De_menor from './Components/De_menor'
import Exer_um from './Components/Exer_um'
import './App.css'

function App() {
  const [input_idade, set_input_idade] = useState(0)
  const [maior, set_maior]= useState (false)
  const [menor, set_menor]=useState(false)
  const [dias, set_semana]=useState(false)

  function processar_idade(){
    if(input_idade >= 18){
     set_maior(true)
     set_menor(false)
    
    }else{
    set_menor(true)
    set_maior(false)
    }
  }
    
    function dias_semanas(){
      if(dias == 1){
      set_semana(true)
      }
    
      else if(dias == 2){
      set_semana(true)
      }
    
      else if(dias == 3){
        set_semana(true)
        }
    
      else if(dias == 4){
      set_semana(true)
     }
    
     else if(dias == 5){
        set_semana(true)
       }
    
       else if(dias == 6){
        set_semana(true)
       }
    
       else if(dias == 7){
        set_semana(true)
       }
      
    }
  

  return (
    <>
      <h1>Inputs</h1>

      Idade: 
      <input type="number" className='formularios'
      value={input_idade}
      onChange={(event) => {set_input_idade(event.target.value)}}
      />

      <button onClick={processar_idade}>Processar idade</button>
      {maior && <De_maior/>}
      {menor && <De_menor/>}

      <h1>Dias das semanas</h1>
      <input type='number' className='dias_da_semana'
      value={dias}
      onChange={(event) => {set_semana(event.target.value)}}>Digite um dia da semana de um a sete
      </input>

      <button onClick={dias_semanas}>Dia</button>
      {dias && <Exer_um/>}
      
    </>
  )
}

export default App
