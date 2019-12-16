import React, { Component } from "react";
import { Container, Button, Col, Row, Toast, Form } from "react-bootstrap";

import EuromillonService from "../../service/Juegos.service";

class Euromillon extends Component {
  constructor(props) {
    super(props);
    this._euromillonService = new EuromillonService();
    this.state = {
      showToast: false,
      toastText: "",
      euromillon: {
        fecha: "",
        numeros: {
          "1": [],
          "2": [],
          "3": [],
          "4": [],
          "5": []
        },
        estrellas: {
          "1": [],
          "2": [],
          "3": [],
          "4": [],
          "5": []
        },
        user: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this._euromillonService.euromillon(this.state.euromillon);
    this.handleToastOpen("se crea el pedido");
  };

  handleClick = e => {
    let { name, value } = e.target;
    this.setState({
      euromillon: {
        ...this.state.euromillon,
        [name]: value,
        user: this.props.loggedInUser
      }
    });
    console.log(this.state);
  };

  handleDiv = e => {
    // console.log(e.target.getAttribute("name"));
    // console.log(e.target.getAttribute("value"));
    let columna = e.target.getAttribute("name");
    let valor = e.target.getAttribute("value");
    let copia = { ...this.state.euromillon.numeros };
    if (copia[columna].length < 5) {
      copia[columna].push(valor);
    }
    this.setState({
      numeros: copia
    });
  };
  handleDivStar = e => {
    // console.log(e.target.getAttribute("name"));
    // console.log(e.target.getAttribute("value"));
    let columna = e.target.getAttribute("name");
    let valor = e.target.getAttribute("value");
    let copia = { ...this.state.euromillon.estrellas };
    if (copia[columna].length < 2) {
      copia[columna].push(valor);
    }
    this.setState({
      estrellas: copia
    });
  };
  handleToastClose = () => this.setState({ showToast: false, toastText: "" });
  handleToastOpen = text => this.setState({ showToast: true, toastText: text });

  generateButtons(start, end, col) {
    let arrButtons1 = [];
    for (let i = start; i <= end; i++) {
      arrButtons1.push(
        <div
          className="celda"
          variant="dark"
          type="submit"
          name={col}
          onClick={this.handleDiv}
          value={i}
        >
          {i}
        </div>
      );
    }
    return arrButtons1;
  }

  generateStars(start, end, col) {
    let arrButtons1 = [];
    for (let i = start; i <= end; i++) {
      arrButtons1.push(
        <div
          className="celda"
          variant="dark"
          type="submit"
          name={col}
          onClick={this.handleDivStar}
          value={i}
        >
          {i}
        </div>
      );
    }
    return arrButtons1;
  }

  render() {
    return (
      <Container>
        <section>
          <h1>Euromillon</h1>
        </section>
        <p>
          Por favor, rellene las columnas que desee (en orden) con 5 números
          cada una y 2 estrellas
        </p>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <div variant="dark" className="nuCol">
              1
            </div>
            <Col xs={0.25}>{this.generateButtons(1, 9, 1)}</Col>
            <Col xs={0.25}>{this.generateButtons(10, 18, 1)}</Col>
            <Col xs={0.25}>{this.generateButtons(19, 27, 1)}</Col>
            <Col xs={0.25}>{this.generateButtons(28, 36, 1)}</Col>
            <Col xs={0.25}>{this.generateButtons(37, 45, 1)}</Col>
            <Col xs={0.25}>{this.generateButtons(46, 50, 1)}</Col>
            <div variant="dark" className="nuCol">
              2
            </div>
            <Col xs={0.25}>{this.generateButtons(1, 9, 2)}</Col>
            <Col xs={0.25}>{this.generateButtons(10, 18, 2)}</Col>
            <Col xs={0.25}>{this.generateButtons(19, 27, 2)}</Col>
            <Col xs={0.25}>{this.generateButtons(28, 36, 2)}</Col>
            <Col xs={0.25}>{this.generateButtons(37, 45, 2)}</Col>
            <Col xs={0.25}>{this.generateButtons(46, 50, 2)}</Col>
            <div variant="dark" className="nuCol">
              3
            </div>
            <Col xs={0.25}>{this.generateButtons(1, 9, 3)}</Col>
            <Col xs={0.25}>{this.generateButtons(10, 18, 3)}</Col>
            <Col xs={0.25}>{this.generateButtons(19, 27, 3)}</Col>
            <Col xs={0.25}>{this.generateButtons(28, 36, 3)}</Col>
            <Col xs={0.25}>{this.generateButtons(37, 45, 3)}</Col>
            <Col xs={0.25}>{this.generateButtons(46, 50, 3)}</Col>
            <div variant="dark" className="nuCol">
              4
            </div>
            <Col xs={0.25}>{this.generateButtons(1, 9, 4)}</Col>
            <Col xs={0.25}>{this.generateButtons(10, 18, 4)}</Col>
            <Col xs={0.25}>{this.generateButtons(19, 27, 4)}</Col>
            <Col xs={0.25}>{this.generateButtons(28, 36, 4)}</Col>
            <Col xs={0.25}>{this.generateButtons(37, 45, 4)}</Col>
            <Col xs={0.25}>{this.generateButtons(46, 50, 4)}</Col>
            <div variant="dark" className="nuCol">
              5
            </div>
            <Col xs={0.25}>{this.generateButtons(1, 9, 5)}</Col>
            <Col xs={0.25}>{this.generateButtons(10, 18, 5)}</Col>
            <Col xs={0.25}>{this.generateButtons(19, 27, 5)}</Col>
            <Col xs={0.25}>{this.generateButtons(28, 36, 5)}</Col>
            <Col xs={0.25}>{this.generateButtons(37, 45, 5)}</Col>
            <Col xs={0.25}>{this.generateButtons(46, 50, 5)}</Col>
          </Row>
          <Row>
            <br></br>
          </Row>
          <Row>
            <div variant="dark" className="nuCol">
              1
            </div>
            <Col xs={0.25}>{this.generateStars(1, 4, 1)}</Col>
            <Col xs={0.25}>{this.generateStars(5, 8, 1)}</Col>
            <Col xs={0.25}>{this.generateStars(9, 11, 1)}</Col>
            <Col xs={0.25}>{""} </Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
            <div variant="dark" className="nuCol">
              2
            </div>
            <Col xs={0.25}>{this.generateStars(1, 4, 2)}</Col>
            <Col xs={0.25}>{this.generateStars(5, 8, 2)}</Col>
            <Col xs={0.25}>{this.generateStars(9, 11, 2)}</Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
            <div variant="dark" className="nuCol">
              3
            </div>
            <Col xs={0.25}>{this.generateStars(1, 4, 3)}</Col>
            <Col xs={0.25}>{this.generateStars(5, 8, 3)}</Col>
            <Col xs={0.25}>{this.generateStars(9, 11, 3)}</Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
            <div variant="dark" className="nuCol">
              4
            </div>
            <Col xs={0.25}>{this.generateStars(1, 4, 4)}</Col>
            <Col xs={0.25}>{this.generateStars(5, 8, 4)}</Col>
            <Col xs={0.25}>{this.generateStars(9, 11, 4)}</Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
            <div variant="dark" className="nuCol">
              5
            </div>
            <Col xs={0.25}>{this.generateStars(1, 4, 5)}</Col>
            <Col xs={0.25}>{this.generateStars(5, 8, 5)}</Col>
            <Col xs={0.25}>{this.generateStars(9, 11, 5)}</Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
            <Col xs={0.25}></Col>
          </Row>
          <br></br>
          <Form.Group>
            <Form.Label>Fechas a jugar: </Form.Label>
            <Form.Control
              as="select"
              name="fecha"
              onChange={this.handleClick}
              value={this.state.euromillon.fecha}
            >
              <option>Seleccionar</option>
              <option>Un sorteo</option>
              <option>Semana en curso</option>
              <option>Dos semanas</option>
            </Form.Control>
          </Form.Group>

          <div className="botones">
            <Button variant="dark" type="submit">
              Crear
            </Button>
            {/* <Link to="/" className="btn btn-dark">
              Volver
            </Link> */}
          </div>
        </Form>
        <Toast
          onClose={this.handleToastClose}
          show={this.state.showToast}
          delay={2000}
          autohide
          style={{
            position: "fixed",
            left: "170px",
            bottom: "250px",
            minWidth: "150px"
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">Aviso</strong>
          </Toast.Header>
          <Toast.Body>{this.state.toastText}</Toast.Body>
        </Toast>
      </Container>
    );
  }
}

export default Euromillon;
