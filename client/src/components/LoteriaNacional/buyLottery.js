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
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,

        fechaSorteo: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._nationalService.postNacionalBuy(this.state.nacional);
  };

  handleInputChange = e => {
    console.log("changin inou");
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
              name="0"
              onChange={this.handleInputChange}
              value={this.state.nacional["0"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 1</Form.Label>
            <Form.Control
              type="number"
              name="1"
              onChange={this.handleInputChange}
              value={this.state.nacional["1"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 2</Form.Label>
            <Form.Control
              type="number"
              name="2"
              onChange={this.handleInputChange}
              value={this.state.nacional["2"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 3</Form.Label>
            <Form.Control
              type="number"
              name="3"
              onChange={this.handleInputChange}
              value={this.state.nacional["3"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 4</Form.Label>
            <Form.Control
              type="number"
              name="4"
              onChange={this.handleInputChange}
              value={this.state.nacional["4"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 5</Form.Label>
            <Form.Control
              type="number"
              name="5"
              onChange={this.handleInputChange}
              value={this.state.nacional["5"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 6</Form.Label>
            <Form.Control
              type="number"
              name="6"
              onChange={this.handleInputChange}
              value={this.state.nacional["6"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 7</Form.Label>
            <Form.Control
              type="number"
              name="7"
              onChange={this.handleInputChange}
              value={this.state.nacional["7"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 8</Form.Label>
            <Form.Control
              type="number"
              name="8"
              onChange={this.handleInputChange}
              value={this.state.nacional["8"]}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nºs acabados en 9</Form.Label>
            <Form.Control
              type="number"
              name="9"
              onChange={this.handleInputChange}
              value={this.state.nacional["9"]}
            />
          </Form.Group>
          <Form.Group>
            Si quieres un número o una terminación en particular ponte en
            <Link to="/contact"> contacto </Link> con nosotros
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
