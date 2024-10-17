import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/numero712">Numero712</Link>
        <Link to="/numero713">Numero713</Link>
    </nav>
  )
}

export default Navbar
