import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import NationalService from "../../service/Nacional.service";

class BuyLottery extends Component {
  constructor(props) {
    super(props);
    this._nationalService = new NationalService();
    this.state = {
      otro: "",
      nacional: {
          cero:0,
          uno:0,
          dos:0,
          tres:0,
          cuatro:0,
          cinco:0,
          seis:0,
          siete:0,
          ocho:0,
          nueve:0,
        
        fechaSorteo: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._nationalService.postNacionalBuy(this.state.nacional);
  };

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
          <h2>Venta online de Lotería Nacional</h2>

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

          <Form.Group>
            <Form.Label>Nºs acabados en 0</Form.Label>
            <Form.Control
              type="number"
              name="sorteo"
              onChange={this.handleInputChange}
              value={this.state.nacional.cero}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 1</Form.Label>
            <Form.Control
              type="number"
              name="serieInicio"
              onChange={this.handleInputChange}
              value={this.state.nacional.uno}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 2</Form.Label>
            <Form.Control
              type="number"
              name="sorteo"
              onChange={this.handleInputChange}
              value={this.state.nacional.dos}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 3</Form.Label>
            <Form.Control
              type="number"
              name="serieInicio"
              onChange={this.handleInputChange}
              value={this.state.nacional.tres}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 4</Form.Label>
            <Form.Control
              type="number"
              name="sorteo"
              onChange={this.handleInputChange}
              value={this.state.nacional.cuatro}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 5</Form.Label>
            <Form.Control
              type="number"
              name="serieInicio"
              onChange={this.handleInputChange}
              value={this.state.nacional.cinco}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 6</Form.Label>
            <Form.Control
              type="number"
              name="sorteo"
              onChange={this.handleInputChange}
              value={this.state.nacional.seis}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 7</Form.Label>
            <Form.Control
              type="number"
              name="serieInicio"
              onChange={this.handleInputChange}
              value={this.state.nacional.siete}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 8</Form.Label>
            <Form.Control
              type="number"
              name="sorteo"
              onChange={this.handleInputChange}
              value={this.state.nacional.ocho}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 9</Form.Label>
            <Form.Control
              type="number"
              name="serieInicio"
              onChange={this.handleInputChange}
              value={this.state.nacional.nueve}
            />
          </Form.Group>

          <div className="botones">
            <Button variant="dark" type="submit">
              Pedir
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

export default BuyLottery;
