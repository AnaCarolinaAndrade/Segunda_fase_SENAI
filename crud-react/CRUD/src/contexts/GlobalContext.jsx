import { createContext, useState } from "react";
import { useActionData } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const[contatinho,setContatinho]= useState('')
const[contatinhos, setContatinhos]=useState([])



    return(
        <GlobalContext.Provider value={
            {
                usuarioLogado, 
                contatinho,
                setContatinho,
                contatinhos,
                setContatinhos

            }}>
            {children}
        </GlobalContext.Provider>
    )
}
