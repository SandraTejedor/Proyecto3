import React, { Component } from "react";
import { Col } from "react-bootstrap";
import ResultService from "../../service/Juegos.service";

//import { Link } from "react-router-dom";

class JuegosBonolotoCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      // bonoloto: null,
      // showModalWindow: false
    };
  }

  //state con la info de la card

  //pintar la carta con el state
  render() {
    return (
      <Col className="coaster-card" md={4}>
        <p>Fecha: {this.props.bonoloto.fecha} </p>
        <p>Columna 1: {this.props.bonoloto.numeros[1].join(" ")}</p>
        <p>Columna 2: {this.props.bonoloto.numeros[2].join(" ")}</p>
        <p>Columna 3: {this.props.bonoloto.numeros[3].join(" ")}</p>
        <p>Columna 4: {this.props.bonoloto.numeros[4].join(" ")}</p>
        <p>Columna 5: {this.props.bonoloto.numeros[5].join(" ")}</p>
        <p>Columna 6: {this.props.bonoloto.numeros[6].join(" ")}</p>
        <p>Columna 7: {this.props.bonoloto.numeros[7].join(" ")}</p>
        <p>Columna 8: {this.props.bonoloto.numeros[8].join(" ")}</p>
        <p>Estado: {this.props.bonoloto.status}</p>
        <p>Usuario: {this.props.bonoloto.user.username}</p>
      

        {/* {this.state.bonoloto.map((bonoloto, index) => (
          <span key={index} className="">
            {" "}
            {bonoloto.fecha}{" "}
          </span>
        ))} */}
      </Col>
    );
  }
}

export default JuegosBonolotoCard;
