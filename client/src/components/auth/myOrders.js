import React from "react";

import NationalService from "../../service/Nacional.service";

import { Container, Row, Button, Modal } from "react-bootstrap";

// import CoasterCard from "./Coaster-card";
// import CoasterForm from "./Coaster-form";
import MyOrderCard from "../../components/LoteriaNacional/NacionalOrder-Card";

class MyNationalOrder extends React.Component {
  constructor(props) {
    super(props);
    this._nationalService = new NationalService();
    this.state = {
      bonoloto: [],
      primitiva: [],
      gordo: [],
      euromillon: []
    };
  }

  componentDidMount = () => this.updateNationalList();

  updateNationalList = () => {
    this._nationalService
      .myOrderList()
      .then(nacional => {
        console.log(nacional);
        this.setState({ nacional: nacional.data });
      })
      .catch(err => console.log("Error", err));
  };
  // deleteHandler = id => {
  //   this._nationalService
  //     .deleteOrder(id)
  //     .then(x => this.updateNationalList())
  //     .catch(err => console.log("Error", err));
  // };

  render() {
    return (
      <section>
        <Container>
          <h1>Lista de pedidos de {this.props.loggedInUser.username} de Lotería Nacional:</h1>

          <Row>
            {/* {this.state.nacional.map(nacional => (
              <NationalCard
                key={nacional._id}
                {...nacional}
                delete={this.deleteHandler}
                updateNationalList={this.updateNationalList}
              />
            )).sort()} */}
            {this.state.nacional
              .sort((a, b) => {
                if (a.fechaSorteo > b.fechaSorteo) {
                  return 1;
                }
                if (a.fechaSorteo < b.fechaSorteo) {
                  return -1;
                } else {
                  if (a.numero > b.numero) {
                    return 1;
                  }
                  if (a.numero < b.numero) {
                    return -1;
                  }
                  // a must be equal to b
                  else {
                    if (a.serie > b.serie) {
                      return 1;
                    }
                    if (a.serie < b.serie) {
                      return -1;
                    } else {
                      if (a.fraccion > b.fraccion) {
                        return 1;
                      }
                      if (a.fraccion < b.fraccion) {
                        return -1;
                      }
                    }
                  }
                }
              })
              .map(nacional => (
                <MyOrderCard
                  key={nacional._id}
                  {...nacional}
                  delete={this.deleteHandler}
                  updateNationalList={this.updateNationalList}
                />
              ))}
          </Row>
        </Container>
      </section>
    );
  }
}

export default MyNationalOrder;