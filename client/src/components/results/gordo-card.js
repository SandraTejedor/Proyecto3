import React, {Component} from "react";
import Col from "react-bootstrap/Col";
import ResultService from "../../service/Results.service";

//import { Link } from "react-router-dom";

class GordoCard extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
      gordo: null,
      showModalWindow: false
    };
  }

  //state con la info de la card

  //cuando se monte llamar al servicio y actualizar el state
  componentDidMount = () => this.updateGordoList();

  updateGordoList = () => {
    this._service
      .gordo()
      .then(gordo => this.setState({ gordo: gordo.data }))
      .catch(err => console.log("Error", err));
  };

  //pintar la carta con el state
  render() {
    return this.state.gordo ? (
      <Col className="coaster-card" md={5}>
        <h4>Gordo del día {this.state.gordo[2]}</h4>
        {this.state.gordo[0].map((gordo , index)=> (
          <span key={index}  className="numerosGordo">
            {" "}
            {gordo}{" "}
          </span>
        ))}
        <span className="reintegroGordo">{this.state.gordo[1]}</span>
      </Col>
    ) : (
      "Esperando resultados..."
    );
  }
}

export default GordoCard;
