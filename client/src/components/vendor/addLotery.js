import React, { Component } from "react";
import { Button, Form, Container, Toast } from "react-bootstrap";

import { Link } from "react-router-dom";

import NationalService from "../../service/Nacional.service";

class AddLottery extends Component {
  constructor(props) {
    super(props);
    this._nationalService = new NationalService();
    this.state = {
      showToast: false,
      toastText: "",
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
       this.handleToastOpen("se crea el decimo");
    // .then(x => {
    // })
    // .catch(err => {});
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({
      nacional: { ...this.state.nacional, [name]: value }
    });
  };

  handleToastClose = () => this.setState({ showToast: false, toastText: "" });
   handleToastOpen = text => this.setState({ showToast: true, toastText: text });

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
              <option>Lotería del Niño 2020</option>
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

export default AddLottery;
