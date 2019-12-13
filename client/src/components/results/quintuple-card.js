import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class QuintupleCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      quintuple: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateQuintupleList();

  updateQuintupleList = () => {
    this._service
      .quintuple()
      .then(quintuple => {
        this.setState({ quintuple: quintuple.data });
      })
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.quintuple ? (
      <Col className="coaster-card" md={5}>
        <h4>Quintuple Plus {this.state.quintuple[1]}</h4>

        {this.state.quintuple[0].map((quintuple, index) => (
          <p key={index} className="resultadosQuintuple">
            Carrera {index + 1}: {quintuple}
          </p>
        ))}
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}

export default QuintupleCard;
