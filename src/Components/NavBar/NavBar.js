import { NavLink } from 'react-router-dom';
import CardWidget from '../CartWidget/CardWidget';
import './NavBar.css';
 import {Link} from 'react-router-dom'
function NavBar() {
    return (
      <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <NavLink  className="navbar-brand" to={'/'}> Oh My Roll</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <NavLink className="nav-link" to={'/'}>Nosotros</NavLink>
       <NavLink className="nav-link" to={'/'}>Recomendaciones</NavLink>
       <NavLink className="nav-link" to={'/'}>Nuestros Productos</NavLink>
          <NavLink to={'/'} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Nuestros Productos</NavLink>         
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
            <NavLink  className="dropdown-item" to={'category/:id'}>Categoria 1</NavLink>
            <NavLink  className="dropdown-item" to={'category/:id'}>Categoria 2</NavLink>
            <NavLink  className="dropdown-item" to={'category/:id'}>Categoria 3</NavLink>
            </li>
          </ul>
       <NavLink className="nav-link" to={'/Contacto'}>Contacto</NavLink>
      </div>
    </div>
    <CardWidget/>
  </div>
</nav>
          
      </div>
    );
  }
  
  export default NavBar;
  