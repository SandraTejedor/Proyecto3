import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class PrimitivaCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      primitiva: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updatePrimitivaList();

  updatePrimitivaList = () => {
    this._service
      .primitiva()
      .then(euro => this.setState({ primitiva: euro.data }))
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.primitiva ? (
      <Col className="coaster-card" md={5}>
        <h4 className="primitiva" >Primitiva del día {this.state.primitiva[4]} </h4>
        {this.state.primitiva[0].map((primitiva, index) => (
          <span key={index} className="numerosPrimitiva">
            {" "}
            {primitiva}{" "}
          </span>
        ))}
        <p className="millon">
          <span>
            Complementario:{" "}
            <span className="complementarioPrimi">
              {this.state.primitiva[1]}
            </span>
          </span>
          <span>
            Reintegro:{" "}
            <span className="reintegroPrimi">
              {this.state.primitiva[2]}
            </span>
          </span>
        </p>
        <p className="joker">
          El Joker:
          <span className="eljoker"> {this.state.primitiva[3]}</span>{" "}
        </p>
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}

export default PrimitivaCard;
