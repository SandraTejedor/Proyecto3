import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class EuromillonCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      euromillon: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateEuromillonList();

  updateEuromillonList = () => {
    this._service
      .euromillon()
      .then(euro => this.setState({ euromillon: euro.data }))
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.euromillon ? (
      <Col className="coaster-card" md={6}>
        <h4>Euromillón del día {this.state.euromillon[3]}</h4>
        {this.state.euromillon[0].map(euro => (
          <span className="numerosEuro"> {euro} </span>
        ))}
        {this.state.euromillon[1].map(euro => (
          <span className="estrellasEuro"> {euro} </span>
        ))}
        <span className="elmillon">{this.state.euromillon[2]}</span>
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}

export default EuromillonCard;
