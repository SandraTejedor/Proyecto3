import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import ResultService from "../../service/Results.service";

import EuromillonCard from "./euromillon-card";
import BonolotoCard from "./Bonoloto-card";
import PrimitivaCard from "./primitiva-card";
import GordoCard from "./gordo-card";
import LototurfCard from "./lototurf-card";
import QuinielaCard from "./quiniela-card";
import QuinigolCard from "./quinigol-card";
import QuintupleCard from "./quintuple-card";
import JuevesCard from "./jueves-card";
import SabadoCard from "./sabado-card";

class Results extends Component {
  constructor(props) {
    super(props);
    this._service = new ResultService();
    this.state = {
     
    };
  }



  render() {
    return (
      <section>
        <Container>
          <h1>Resultados</h1>
        </Container>

        <Container>
          <Row>
            <EuromillonCard />
            <BonolotoCard />
            <PrimitivaCard />
            <GordoCard />
            <LototurfCard />
            <QuintupleCard />
            <QuinielaCard />
            <QuinigolCard />
          </Row>
          <hr></hr>
          <Row>
            <JuevesCard />
            <SabadoCard />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Results;
