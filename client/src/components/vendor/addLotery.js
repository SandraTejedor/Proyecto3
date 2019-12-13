import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import NationalService from "../../service/Nacional.service";

class AddLottery extends Component {
  constructor(props) {
    super(props);
    this._nationalService = new NationalService();
    this.state = {
      otro: "",
      nacional: {
        numero: "",
        sorteo: "",
        serieInicio: 0,
        serieFinal: 0,
        fechaSorteo: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._nationalService.postNacional(this.state.nacional);
  };

  // handleNumberChange = e => {
  //   let a = 0;
  //   if (e.target.value == "") {
  //     a = 0;
  //   } else {
  //     a = parseInt(e.target.value, 10);
  //   }
  //   this.setState({
  //     nacional: { ...this.state.nacional, numero: a }
  //   });
  // };

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({
      nacional: { ...this.state.nacional, [name]: value }
    });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <br></br>
          <h2>Añadir décimos para la venta online</h2>

          <Form.Group>
            <Form.Label>Número del décimo</Form.Label>
            <Form.Control
              type="text"
              name="numero"
              onChange={this.handleInputChange}
              value={this.state.nacional.numero}
              maxLength="5"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nº de sorteo</Form.Label>
            <Form.Control
              type="text"
              name="sorteo"
              onChange={this.handleInputChange}
              value={this.state.nacional.sorteo}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Serie de inicio</Form.Label>
            <Form.Control
              type="number"
              name="serieInicio"
              onChange={this.handleInputChange}
              value={this.state.nacional.serieInicio}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Serie final</Form.Label>
            <Form.Control
              type="number"
              name="serieFinal"
              onChange={this.handleInputChange}
              value={this.state.nacional.serieFinal}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha sorteo: </Form.Label>
            <Form.Control
              as="select"
              name="fechaSorteo"
              onChange={this.handleInputChange}
              value={this.state.nacional.fechaSorteo}
            >
              <option>Seleccionar</option>
              <option>Lotería de Navidad 2019</option>
              <option>Lotería del Niño 2019</option>
            </Form.Control>
          </Form.Group>
          <div className="botones">
            <Button variant="dark" type="submit">
              Crear
            </Button>
            <Link to="/" className="btn btn-dark">
              Volver
            </Link>
          </div>
        </Form>
      </Container>
    );
  }
}

export default AddLottery;
