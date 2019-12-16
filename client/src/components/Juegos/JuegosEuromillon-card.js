import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import ResultService from "../../service/Juegos.service";

//import { Link } from "react-router-dom";

class JuegosEuromillonCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      // euromillon: null,
      // showModalWindow: false
    };
  }

  //state con la info de la card

  //pintar la carta con el state
  render() {
    return (
      <Col className="coaster-card" md={5}>
        <p>Fecha: {this.props.euromillon.fecha} </p>
        <p>
          Columna 1: {this.props.euromillon.numeros[1].join(" ")} | Estrellas:{" "}
          {this.props.euromillon.estrellas[1].join(" ")}
        </p>
        <p>
          Columna 2: {this.props.euromillon.numeros[2].join(" ")} | Estrellas:
          {this.props.euromillon.estrellas[2].join(" ")}
        </p>
        <p>
          Columna 3: {this.props.euromillon.numeros[3].join(" ")} | Estrellas:
          {this.props.euromillon.estrellas[3].join(" ")}
        </p>
        <p>
          Columna 4: {this.props.euromillon.numeros[4].join(" ")} | Estrellas:
          {this.props.euromillon.estrellas[4].join(" ")}
        </p>
        <p>
          Columna 5: {this.props.euromillon.numeros[5].join(" ")} | Estrellas:
          {this.props.euromillon.estrellas[5].join(" ")}
        </p>
        <p>Usuario: {this.props.euromillon.user.username}</p>
        <Button
          variant="dark"
          onClick={() => this.props.delete(this.props._id)}
        >
          Pedido realizado
        </Button>
      </Col>
    );
  }
}

export default JuegosEuromillonCard;
