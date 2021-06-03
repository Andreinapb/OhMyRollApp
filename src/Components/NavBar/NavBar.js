import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css'

function NavBar() {
    return (
      <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Oh My Roll</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <p className="nav-link" href="#">Nosotros</p>
        <p className="nav-link" href="#">Recomendaciones</p>
        <p className="nav-link" href="#">Nuestros Productos</p>
        <p className="nav-link" href="#">Contacto</p>
      </div>
    </div>
  </div>
</nav>
          
      </div>
    );
  }
  
  export default NavBar;
  