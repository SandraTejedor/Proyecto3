import React , {Component}from "react";
import { Container } from "react-bootstrap";

import EuroService from "../../service/Results.service";

class Euromillon extends Component {
  constructor(props) {
    super(props);
   // this._service = new EuroService();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <section>
          <h1>Euromillones</h1>
        </section>
      </Container>
    );
  }
}

export default Euromillon;
