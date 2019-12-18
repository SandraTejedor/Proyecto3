import React from "react";

import NationalService from "../../service/Nacional.service";

import { Container, Row, Button, Modal } from "react-bootstrap";

import NationalOrderCard from "../../components/LoteriaNacional/NacionalOrder-Card";
import jsPDF from "jspdf";

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
    //
    this.updateNationalList();
  };

  updateNationalList = () => {
    this._nationalService
      .nacionalOrder()
      .then(nacional => this.setState({ nacional: nacional.data }))
      .catch(err => console.log("Error", err));
  };

  deleteHandler = id => {
    let pdf = new jsPDF();
    pdf.text(0, 0, "Hello World!");
    let pdfBase64 = pdf.output("arraybuffer");
    console.log(pdfBase64);

    this._nationalService
      .deleteOrder(id, pdfBase64)
      .then(x => {
        // console.log("estoy haciendo el console log");
        this.updateNationalList();
      })
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <section>
        <Container>
          <h1>Lista de pedidos:</h1>

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
