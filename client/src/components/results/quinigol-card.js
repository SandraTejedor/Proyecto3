import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class QuinigolCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
     timestamps: null, 
      quinigol: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateQuinigolList();

  updateQuinigolList = () => {
    this._service
      .quinigol()
      .then(quinigol =>
        this.setState({ quinigol: quinigol.data})
      )
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.quinigol ? (
      <Col className="coaster-card" md={5}>
        <h4 className="quinigol2">
          Quinigol {this.state.quinigol[3]}
          {/* {this.state.timestamps.created_at} */}
        </h4>
        <div className="elQuinigol">
          <div className="partidos">
            <ol>
              {this.state.quinigol[0].map((quinigol, index) => (
                <li key={index} className="partidosQuinigol espacio">
                  {quinigol}
                </li>
              ))}
            </ol>
          </div>
          <div className="resultados">
            {this.state.quinigol[1].map((quinigol, index) => (
              <p key={index} className="resultadoPartidosQuinigol">
                {quinigol}
              </p>
            ))}
          </div>
          <div className="quiniela">
            {this.state.quinigol[2].map((quinigol, index) => (
              <p key={index} className="resultadoQuinigol">
                {quinigol}
              </p>
            ))}
          </div>
        </div>
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}

export default QuinigolCard;
