import React, {Component} from "react";
import Col from "react-bootstrap/Col";

import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class juevesCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      jueves: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateJuevesList();

  updateJuevesList = () => {
    this._service
      .jueves()
      .then(jueves => this.setState({ jueves: jueves.data }))
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.jueves ? (
      <Col className="coaster-card" md={6}>
        <h4>Resultado del Jueves del día</h4>
        {this.state.jueves[0].map(jueves => (
          <span className="numerosJueves"> {jueves} </span>
        ))}
        {this.state.jueves[1].map(jueves => (
          <span className="reintegroJueves"> {jueves} </span>
        ))}
        
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}

export default juevesCard;
