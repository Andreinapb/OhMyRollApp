import { NavLink } from "react-router-dom";
import '../../styles/NavBar.scss'
import CardWidget from "./CardWidget";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

function NavBar() {
  return (
    <div >
      <Navbar className="menu" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <NavLink className="navbar-brand" to={"/"}>
              {" "}
              Oh My Roll
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Nosotros">
                <NavLink className="nav-link" to={"/Nosotros"}>
                  Nosotros
                </NavLink>
              </Nav.Link>
              <NavLink className="nav-link" to={"/"}>
              <NavDropdown
                title="Nuestros Productos"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink className="dropdown-item" to={"/categoria/Grande"}>
                    Bandejas Grande
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="dropdown-item" to={"/categoria/Familiar"}>
                    Bandejas Familiares
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              </NavLink>
              <Nav.Link href="#pricing">
                <NavLink className="nav-link" to={"/Recomendaciones"}>
                  Recomendaciones
                </NavLink>
              </Nav.Link>
              <Nav.Link >  <NavLink className="nav-link" to={"/Contacto"}>
                 Contactanos
                </NavLink></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CardWidget />
        </Container>
      </Navbar>

    </div>
  );
}

export default NavBar;
