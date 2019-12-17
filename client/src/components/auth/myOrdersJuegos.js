import React from "react";

import JuegosService from "../../service/Juegos.service";

import { Container, Row, Button, Modal } from "react-bootstrap";

import BonolotoOrderCard from "../../components/Juegos/JuegosBonoloto-cardSold";
import PrimitivaOrderCard from "../../components/Juegos/JuegosPrimitiva-cardSold";
import GordoOrderCard from "../../components/Juegos/JuegosGordo-cardSold";
import EuromillonOrderCard from "../../components/Juegos/JuegosEuromillon-cardSold";

class MyNationalOrder extends React.Component {
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
      .myOrderListBono()
      .then(bonoloto => {
        console.log(bonoloto);
        this.setState({ bonoloto: bonoloto.data });
      })
      .catch(err => console.log("Error", err));
  };
  updatePrimitivaList = () => {
    this._juegosService
      .myOrderListPrimi()
      .then(primitiva => {
        console.log(primitiva);
        this.setState({ primitiva: primitiva.data });
      })
      .catch(err => console.log("Error", err));
  };
  updateGordoList = () => {
    this._juegosService
      .myOrderListGordo()
      .then(gordo => {
        console.log(gordo);
        this.setState({ gordo: gordo.data });
      })
      .catch(err => console.log("Error", err));
  };

  updateEuromillonList = () => {
    this._juegosService
      .myOrderListEuro()
      .then(euromillon => {
        console.log(euromillon);
        this.setState({ euromillon: euromillon.data });
      })
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <section>
        <Container>
          <h1>
            Lista de pedidos de {this.props.loggedInUser.username} de Juegos:
          </h1>
          <h4 className="">Bonolotos pedidos</h4>
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
          <h4 className="">Primitivas pedidos</h4>
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
          <h4 className="">Gordos pedidos</h4>
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
          <h4 className="">Euromillones pedidos</h4>
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

export default MyNationalOrder;
