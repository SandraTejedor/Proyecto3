import React, { Component } from "react";
import { Button, Col } from "react-bootstrap";

import NationalService from "../../service/Nacional.service";

class NationalCard extends Component {
  constructor(props) {
    super(props);
    this._nationalService = new NationalService();
    this.state = {
      //primitiva: null,
      //showModalWindow: false
    };
  }

  render() {
    return (
      <Col className="" md={4}>
        <h4>Sorteo {this.props.fechaSorteo} </h4>
        <p>
          Número: <strong>{this.props.numero}</strong>
        </p>
        <p> Serie: {this.props.serie} </p>
        <p> Fracción: {this.props.fraccion} </p>
        <p> Estado: {this.props.status} </p>
        <Button
          variant="dark"
          onClick={() => this.props.delete(this.props._id)}
          className="botonTramitar"
        >
          Darlo de baja
        </Button>
        <hr></hr>
      </Col>
    );
  }
}

export default NationalCard;
