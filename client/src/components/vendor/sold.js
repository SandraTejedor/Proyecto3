import React from "react";

import NationalService from "../../service/Nacional.service";

import { Container, Row, Button, Modal } from "react-bootstrap";

import NationalOrderCard from "../LoteriaNacional/Sold-Card";

class NationalOrder extends React.Component {
  constructor(props) {
    super(props);
    this._nationalService = new NationalService();
    this.state = {
      nacional: [],
      otro: ""
    };
  }

  componentDidMount = () => {

    // const script = document.createElement("script");
    // script.src = "https://unpkg.com/jspdf@latest/dist/jspdf.min.js";
    // script.async = true;
    // document.body.appendChild(script);

     this.updateNationalList();
  }

  updateNationalList = () => {
    this._nationalService
      .sold()
      .then(nacional => this.setState({ nacional: nacional.data }))
      .catch(err => console.log("Error", err));
  };
  

  render() {
    return (
      <section>
        <Container>
          <h1>Lista de ventas:</h1>

          <Row>
            {this.state.nacional.sort((a, b) => {
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
              }).map(nacional => (
              <NationalOrderCard
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

export default NationalOrder;
