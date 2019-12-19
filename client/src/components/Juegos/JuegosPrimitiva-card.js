import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import ResultService from "../../service/Juegos.service";

//import { Link } from "react-router-dom";

class JuegosPrimitivaCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      // primitiva: null,
      // showModalWindow: false
    };
  }

  //state con la info de la card

  //pintar la carta con el state
  render() {
    return (
      <Col className="coaster-card" md={5}>
        <br></br>
        <p>Fecha: {this.props.primitiva.fecha} </p>
        <p>Reintegro: {this.props.primitiva.reintegro} </p>{" "}
        <p>Joker: {this.props.primitiva.joker} </p>
        <p>Columna 1: {this.props.primitiva.numeros[1].join(" ")}</p>
        <p>Columna 2: {this.props.primitiva.numeros[2].join(" ")}</p>
        <p>Columna 3: {this.props.primitiva.numeros[3].join(" ")}</p>
        <p>Columna 4: {this.props.primitiva.numeros[4].join(" ")}</p>
        <p>Columna 5: {this.props.primitiva.numeros[5].join(" ")}</p>
        <p>Columna 6: {this.props.primitiva.numeros[6].join(" ")}</p>
        <p>Columna 7: {this.props.primitiva.numeros[7].join(" ")}</p>
        <p>Columna 8: {this.props.primitiva.numeros[8].join(" ")}</p>
        <p>Estado: {this.props.primitiva.status}</p>
        <p>Usuario: {this.props.primitiva.user.username}</p>
        <Button
          variant="dark"
          onClick={() => this.props.delete(this.props._id)}
          className="botonTramitar"
        >
          Pedido realizado
        </Button>
      </Col>
    );
  }
}

export default JuegosPrimitivaCard;
