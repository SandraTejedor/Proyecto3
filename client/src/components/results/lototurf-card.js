import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class LototurfCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      lototurf: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateLototurfList();

  updateLototurfList = () => {
    this._service
      .lototurf()
      .then(lototurf => this.setState({ lototurf: lototurf.data }))
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.lototurf ? (
      <Col className="coaster-card" md={5}>
        <h4 className="lototurf">Lototurf {this.state.lototurf[3]}</h4>
        {this.state.lototurf[0].map((lototurf, index) => (
          <span key={index} className="numerosLototurf">
            {" "}
            {lototurf}{" "}
          </span>
        ))}
        <p className="millon">
          <span>
            Caballo:{" "}
            <span className="caballoLototurf"> {this.state.lototurf[1]}</span>
          </span>
          <span>
            Reintegro:{" "}
            <span className="reintegroLototurf">{this.state.lototurf[2]}</span>
          </span>
        </p>
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}


export default LototurfCard;
