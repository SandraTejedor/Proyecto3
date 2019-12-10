import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class BonolotoCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      bonoloto: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateBonolotoList();

  updateBonolotoList = () => {
    this._service
      .bonoloto()
      .then(bonoloto => this.setState({ bonoloto: bonoloto.data }))
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.bonoloto ? (
      <Col className="coaster-card" md={6}>
        <h4>Resultado del BonoLoto del día</h4>
        {this.state.bonoloto[0].map(bonoloto => (
          <span className="numerosBonoloto"> {bonoloto} </span>
        ))}
        <span className="complementarioBono"> {this.state.bonoloto[1]} </span>
        <span className="reintegroBono"> {this.state.bonoloto[2]} </span>
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}


export default BonolotoCard;
