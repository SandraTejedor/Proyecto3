import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class SabadoCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      sabado: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateSabadoList();

  updateSabadoList = () => {
    this._service
      .sabado()
      .then(sabado => this.setState({ sabado: sabado.data }))
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.sabado ? (
      <Col className="coaster-card" md={5}>
        <h4>Sorteo del Sábado del día {this.state.sabado[2]}</h4>
        {this.state.sabado[0].map((sabado, index) => (
          <span key={index} className="numerosSabado">
            {" "}
            {sabado}{" "}
          </span>
        ))}
        {this.state.sabado[1].map((sabado, index) => (
          <span key={index} className="reintegroSabado">
            {" "}
            {sabado}{" "}
          </span>
        ))}
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}
export default SabadoCard;
