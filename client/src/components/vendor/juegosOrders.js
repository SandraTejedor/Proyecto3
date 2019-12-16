import React from "react";

import JuegosService from "../../service/Juegos.service";

import { Container, Row, Button, Modal } from "react-bootstrap";

import BonolotoOrderCard from "../../components/Juegos/JuegosBonoloto-card";
import PrimitivaOrderCard from "../../components/Juegos/JuegosPrimitiva-card";
import GordoOrderCard from "../../components/Juegos/JuegosGordo-card";
import EuromillonOrderCard from "../../components/Juegos/JuegosEuromillon-card";

class JuegosOrder extends React.Component {
  constructor(props) {
    super(props);
    this._juegosService = new JuegosService();
    this.state = {
      bonoloto: [],
      primitiva: [],
      gordo: [],
      euromillon: []
    };
  }

  componentDidMount = () => {
    this.updateBonolotoList();
    this.updatePrimitivaList();
    this.updateGordoList();
    this.updateEuromillonList();
  };

  updateBonolotoList = () => {
    this._juegosService
      .getbonoloto()
      .then(bonoloto => {
        console.log(bonoloto);
        this.setState({ bonoloto: bonoloto.data });
      })
      .catch(err => console.log("Error", err));
  };
  updatePrimitivaList = () => {
    this._juegosService
      .getprimitiva()
      .then(primitiva => {
        console.log(primitiva);
        this.setState({ primitiva: primitiva.data });
      })
      .catch(err => console.log("Error", err));
  };
  updateGordoList = () => {
    this._juegosService
      .getgordo()
      .then(gordo => {
        console.log(gordo);
        this.setState({ gordo: gordo.data });
      })
      .catch(err => console.log("Error", err));
  };

  updateEuromillonList = () => {
    this._juegosService
      .geteuromillon()
      .then(euromillon => {
        console.log(euromillon);
        this.setState({ euromillon: euromillon.data });
      })
      .catch(err => console.log("Error", err));
  };

  deleteHandlerBono = id => {
    this._juegosService
      .deleteBonoOrder(id)
      .then(x => this.updateBonolotoList())
      .catch(err => console.log("Error", err));
  };

  deleteHandlerPrimi = id => {
    this._juegosService
      .deletePrimiOrder(id)
      .then(x => this.updatePrimitivaList())
      .catch(err => console.log("Error", err));
  };

  deleteHandlerGordo = id => {
    this._juegosService
      .deleteGordoOrder(id)
      .then(x => this.updateGordoList())
      .catch(err => console.log("Error", err));
  };

  deleteHandlerEuro = id => {
    this._juegosService
      .deleteEuroOrder(id)
      .then(x => this.updateEuromillonList())
      .catch(err => console.log("Error", err));
  };
  render() {
    return (
      <section>
        <Container>
          <h1>Lista de pedidos de Juegos:</h1>
          <h4 className="">Bonolotos pendientes</h4>
          <Row>
            {this.state.bonoloto.map(bonoloto => (
              <BonolotoOrderCard
                key={bonoloto._id}
                {...bonoloto}
                delete={this.deleteHandlerBono}
                updateBonolotoList={this.updateBonolotoList}
              />
            ))}
          </Row>
          <h4 className="">Primitivas pendientes</h4>
          <Row>
            {this.state.primitiva.map(primitiva => (
              <PrimitivaOrderCard
                key={primitiva._id}
                {...primitiva}
                delete={this.deleteHandlerPrimi}
                updatePrimitivaList={this.updatePrimitivaList}
              />
            ))}
          </Row>
          <h4 className="">Gordos pendientes</h4>
          <Row>
            {this.state.gordo.map(gordo => (
              <GordoOrderCard
                key={gordo._id}
                {...gordo}
                delete={this.deleteHandlerGordo}
                updateGordoList={this.updateGordoList}
              />
            ))}
          </Row>
          <h4 className="">Euromillones pendientes</h4>
          <Row>
            {this.state.euromillon.map(euromillon => (
              <EuromillonOrderCard
                key={euromillon._id}
                {...euromillon}
                delete={this.deleteHandlerEuro}
                updateEuromillonList={this.updateEuromillonList}
              />
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}

export default JuegosOrder;
