import React, { Component } from "react";
import {Col}from "react-bootstrap";
import ResultService from "../../service/Juegos.service";

//import { Link } from "react-router-dom";

class JuegosGordoCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      // gordo: null,
      // showModalWindow: false
    };
  }

  //state con la info de la card

  //pintar la carta con el state
  render() {
    return (
      <Col className="coaster-card" md={3}>
        <p>Fecha: {this.props.gordo.fecha} </p>
        <p>NºClave: {this.props.gordo.clave} </p>{" "}
        <p>Columna 1: {this.props.gordo.numeros[1].join(" ")}</p>
        <p>Columna 2: {this.props.gordo.numeros[2].join(" ")}</p>
        <p>Columna 3: {this.props.gordo.numeros[3].join(" ")}</p>
        <p>Columna 4: {this.props.gordo.numeros[4].join(" ")}</p>
        <p>Columna 5: {this.props.gordo.numeros[5].join(" ")}</p>
        <p>Columna 6: {this.props.gordo.numeros[6].join(" ")}</p>
        <p>Estado: {this.props.gordo.status}</p>
        <p>Usuario: {this.props.gordo.user.username}</p>
     
      </Col>
    );
  }
}

export default JuegosGordoCard;
