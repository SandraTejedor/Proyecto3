import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../../service/Auth.service";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
  }

  logoutUser = () => {
    this._service
      .logout()
      .then(x => this.props.setUser(false))
      .catch(err => console.log(err));
  };

  render() {
    const saludo = this.props.loggedInUser
      ? this.props.loggedInUser.username
      : ""; //"invitado"
    console.log("soy el login", this.props.loggedInUser);
    //let a = this.props.loggedInUser;
    if (
      this.props.loggedInUser &&
      this.props.loggedInUser.perfil === "vendedor"
    ) {
      return (
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar bg="dark">
            <Navbar.Brand href="/">El Calvo de la Lotería</Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              {/* <Nav.Link as="li">
              <Link to="/">Inicio</Link>
            </Nav.Link> */}
              <NavDropdown
                title="Loteria Nacional"
                id="basic-nav-dropdown"
                as="li"
              >
                <NavDropdown.Item as="li">
                  <Link to="/nacional/new">Añadir lotería</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/nacional/list">Lista de lotería disponible</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/nacional/order">Lista de pedidos de lotería</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/nacional/sold">Lista de ventas de lotería</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Juegos"
                id="basic-nav-dropdown"
                as="li"
              >
                <NavDropdown.Item as="li">
                  <Link to="/juegos/order">Lista de pedidos de juegos</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item as="li">
                  <Link to="/nacional/list">Lista de lotería disponible</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/nacional/order">Lista de pedidos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/nacional/sold">Lista de ventas</Link>
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link as="li">
                <Link to="/profile">Mi perfil</Link>
              </Nav.Link>
              <Nav.Link as="li" onClick={this.logoutUser}>
                Logout |
              </Nav.Link>
              <Navbar.Text>Bienvenid@ {saludo}</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    if (this.props.loggedInUser) {
      return (
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar bg="dark">
            <Navbar.Brand href="/">El Calvo de la Lotería</Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              {/* <Nav.Link as="li">
              <Link to="/">Inicio</Link>
            </Nav.Link> */}
              <Nav.Link as="li">
                <Link to="/results">Resultados</Link>
              </Nav.Link>
              <NavDropdown title="Juegos" id="basic-nav-dropdown" as="li">
                <NavDropdown.Item as="li">
                  <Link to="/juegos/primitiva">Primitiva</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/juegos/bonoLoto">BonoLoto</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/juegos/elGordo">Gordo</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/juegos/euromillon">Euromillones</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Loteria Nacional"
                id="basic-nav-dropdown"
                as="li"
              >
                <NavDropdown.Item as="li">
                  <Link to="/nacional/buy">Compra online</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li">
                  <Link to="/nacional/myorder">Mis pedidos</Link>
                </NavDropdown.Item>
               
              </NavDropdown>
              
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link as="li">
                <Link to="/contact">Contacto</Link>
              </Nav.Link>
              <Nav.Link as="li">
                <Link to="/profile">Mi perfil</Link>
              </Nav.Link>
              <Nav.Link as="li" onClick={this.logoutUser}>
                Logout |
              </Nav.Link>
              <Navbar.Text>Bienvenid@ {saludo}</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    if (!this.props.loggedInUser) {
      return (
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar bg="dark">
            <Navbar.Brand href="/">El Calvo de la Lotería</Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              {/* <Nav.Link as="li">
              <Link to="/">Inicio</Link>
            </Nav.Link> */}
              <Nav.Link as="li">
                <Link to="/results">Resultados</Link>
              </Nav.Link>
              <Nav.Link as="li">
                <Link to="/contact">Contacto</Link>
              </Nav.Link>
             
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link as="li">
                <Link to="/signup">Registro</Link>
              </Nav.Link>
              <Nav.Link as="li">
                <Link to="/login">Login </Link>
              </Nav.Link>
              {/* <Navbar.Text>Bienvenid@ {saludo}</Navbar.Text> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}

export default Navigation;
