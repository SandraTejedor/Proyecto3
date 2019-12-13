import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class QuinielaCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      quiniela: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateQuinielaList();

  updateQuinielaList = () => {
    this._service
      .quiniela()
      .then(quiniela => this.setState({ quiniela: quiniela.data }))
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.quiniela ? (
      <Col className="coaster-card" md={5}>
        <h4>Quiniela {this.state.quiniela[3]}</h4>
        <div className="laQuiniela">
          <div className="partidos">
            <ol>
              {this.state.quiniela[0].map((quiniela,index) => (
                <li key={index} className="partidosQuiniela">
                  {quiniela}
                </li>
              ))}
            </ol>
          </div>
          <div className="resultados">
            {this.state.quiniela[1].map((quiniela,index) => (
              <p key={index} className="resultadoPartidos">
                {quiniela}
              </p>
            ))}
          </div>
          <div className="quiniela">
            {this.state.quiniela[2].map((quiniela,index) => (
              <p key={index} className="resultadoQuiniela">
                {" "}
                {quiniela}{" "}
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

export default QuinielaCard;
