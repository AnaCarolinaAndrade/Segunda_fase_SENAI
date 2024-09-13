import React from 'react'

//Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).

function Exer_um(){
    return(
        <>
        <h1>Dias das semanas</h1>
        <input type='number' className='dias_da_semana'
        value={dias}
        onChange={(event) => {set_semana(event.target.value)}}>Digite um dia da semana de um a sete</input>
    
        <button onClick={dias_semanas}>Dia</button>
        {dias && <Exer_um/>}
        </>
        )
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


export default Exer_um
