import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import ResultService from "../../service/Results.service";

import imagenestrella from "./../../../src/images/estrell-trans.png";

class EuromillonCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      euromillon: null,
      showModalWindow: false
    };
  }

  componentDidMount = () => this.updateEuromillonList();

  updateEuromillonList = () => {
    this._service
      .euromillon()
      .then(euro => this.setState({ euromillon: euro.data }))
      .catch(err => console.log("Error", err));
  };

  render() {
    return this.state.euromillon ? (
      <Col className="coaster-card" md={5}>
        <h4 className="euromillon">
          Euromillón del día {this.state.euromillon[3]}
        </h4>
        {this.state.euromillon[0].map((euro, index) => (
          <span key={index} className="numerosEuro">
            {" "}
            {euro}{" "}
          </span>
        ))}
        {this.state.euromillon[1].map((euro, index) => (
          <span key={index} className="estrellasEuro ">
            <span>
              {" "}
              <img src={imagenestrella} className="laimagen" alt="imagen estrella"/>
            </span>
            {euro}{" "}
          </span>
        ))}
        <p className="millon">
          El Millón:
          <span className="elmillon"> {this.state.euromillon[2]}</span>
        </p>
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}

export default EuromillonCard;
