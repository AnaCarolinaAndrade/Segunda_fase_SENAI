import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Pages_um from './pages/Pages_um'
import Peges_dois from './pages/Peges_dois'
import Render from './pages/Render'

function App() {
  const [pagina, setpagina]=useState(<Peges_dois/>)

function mostarHome(){
  setpagina (<Home/>)
}

  return (
    <>
    <nav>

      <button onClick={() => {setpagina(<Home/>)}}>page 1</button>
      <button onClick={() => {setpagina(<Peges_dois/>)}}>page 2</button>
      <button onClick={() => {setpagina(<Pages_um/>)}}>page 3</button>
      <button onClick={() => {setpagina(<Render/>)}}>page 4</button>
    </nav>
    {pagina}
    </>
  )
}

export default App
