import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Link,
  Toast
} from "react-bootstrap";

import BonolotoService from "../../service/Juegos.service";
class BonoLoto extends Component {
  constructor(props) {
    super(props);
    this._bonolotoService = new BonolotoService();
    this.state = {
      showToast: false,
      toastText: "",
      bonoloto: {
        fecha: "",
        numeros: {
          "1": [],
          "2": [],
          "3": [],
          "4": [],
          "5": [],
          "6": [],
          "7": [],
          "8": []
        },
        user: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this._bonolotoService.bonoloto(this.state.bonoloto);
    this.handleToastOpen("se crea el pedido");
  };

  handleClick = e => {
    let { name, value } = e.target;
    this.setState({
      bonoloto: {
        ...this.state.bonoloto,
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
    let copia = { ...this.state.bonoloto.numeros };
    if (copia[columna].length < 6) {
      e.target.innerHTML = "X";
      copia[columna].push(valor);
    }
    this.setState({
      numeros: copia
    });
  };

  handleToastClose = () => this.setState({ showToast: false, toastText: "" });
  handleToastOpen = text => this.setState({ showToast: true, toastText: text });

  generateButtons(start, end, col) {
    let arrButtons1 = [];
    for (let i = start; i <= end; i++) {
      arrButtons1.push(
        <div
          style={{ color: "red" }}
          key={i}
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

  render() {
    return (
      <Container>
        <section>
          <h1>BonoLoto</h1>
        </section>
        <p>
          Por favor, rellene las columnas que desee (en orden) con 6 números
          cada una
        </p>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={0.25}>
              <div variant="dark" className="nuCol">
                1
              </div>
              {this.generateButtons(1, 9, 1)}
            </Col>
            <Col xs={0.25}>{this.generateButtons(10, 19, 1)}</Col>
            <Col xs={0.25}>{this.generateButtons(20, 29, 1)}</Col>
            <Col xs={0.25}>{this.generateButtons(30, 39, 1)}</Col>
            <Col xs={0.25}>{this.generateButtons(40, 49, 1)}</Col>

            <Col xs={0.25}>
              <div variant="dark" className="nuCol">
                2
              </div>
              {this.generateButtons(1, 9, 2)}
            </Col>
            <Col xs={0.25}>{this.generateButtons(10, 19, 2)}</Col>
            <Col xs={0.25}>{this.generateButtons(20, 29, 2)}</Col>
            <Col xs={0.25}>{this.generateButtons(30, 39, 2)}</Col>
            <Col xs={0.25}>{this.generateButtons(40, 49, 2)}</Col>
            <Col xs={0.25}>
              <div variant="dark" className="nuCol">
                3
              </div>
              {this.generateButtons(1, 9, 3)}
            </Col>
            <Col xs={0.25}>{this.generateButtons(10, 19, 3)}</Col>
            <Col xs={0.25}>{this.generateButtons(20, 29, 3)}</Col>
            <Col xs={0.25}>{this.generateButtons(30, 39, 3)}</Col>
            <Col xs={0.25}>{this.generateButtons(40, 49, 3)}</Col>
            <Col xs={0.25}>
              <div variant="dark" className="nuCol">
                4
              </div>
              {this.generateButtons(1, 9, 4)}
            </Col>
            <Col xs={0.25}>{this.generateButtons(10, 19, 4)}</Col>
            <Col xs={0.25}>{this.generateButtons(20, 29, 4)}</Col>
            <Col xs={0.25}>{this.generateButtons(30, 39, 4)}</Col>
            <Col xs={0.25}>{this.generateButtons(40, 49, 4)}</Col>
            <Col xs={0.25}>
              <div variant="dark" className="nuCol">
                5
              </div>
              {this.generateButtons(1, 9, 5)}
            </Col>
            <Col xs={0.25}>{this.generateButtons(10, 19, 5)}</Col>
            <Col xs={0.25}>{this.generateButtons(20, 29, 5)}</Col>
            <Col xs={0.25}>{this.generateButtons(30, 39, 5)}</Col>
            <Col xs={0.25}>{this.generateButtons(40, 49, 5)}</Col>
            <Col xs={0.25}>
              <div variant="dark" className="nuCol">
                6
              </div>
              {this.generateButtons(1, 9, 6)}
            </Col>
            <Col xs={0.25}>{this.generateButtons(10, 19, 6)}</Col>
            <Col xs={0.25}>{this.generateButtons(20, 29, 6)}</Col>
            <Col xs={0.25}>{this.generateButtons(30, 39, 6)}</Col>
            <Col xs={0.25}>{this.generateButtons(40, 49, 6)}</Col>
            <Col xs={0.25}>
              <div variant="dark" className="nuCol">
                7
              </div>
              {this.generateButtons(1, 9, 7)}
            </Col>
            <Col xs={0.25}>{this.generateButtons(10, 19, 7)}</Col>
            <Col xs={0.25}>{this.generateButtons(20, 29, 7)}</Col>
            <Col xs={0.25}>{this.generateButtons(30, 39, 7)}</Col>
            <Col xs={0.25}>{this.generateButtons(40, 49, 7)}</Col>
            <Col xs={0.25}>
              <div variant="dark" className="nuCol">
                8
              </div>
              {this.generateButtons(1, 9, 8)}
            </Col>
            <Col xs={0.25}>{this.generateButtons(10, 19, 8)}</Col>
            <Col xs={0.25}>{this.generateButtons(20, 29, 8)}</Col>
            <Col xs={0.25}>{this.generateButtons(30, 39, 8)}</Col>
            <Col xs={0.25}>{this.generateButtons(40, 49, 8)}</Col>
          </Row>
          <br></br>
          <Form.Group>
            <Form.Label>Fechas a jugar: </Form.Label>
            <Form.Control
              as="select"
              name="fecha"
              onChange={this.handleClick}
              value={this.state.bonoloto.fecha}
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
            left: "200px",
            bottom: "150px",
            minwidth: "250px"
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

export default BonoLoto;
