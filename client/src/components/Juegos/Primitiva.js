import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Primitiva extends Component {
  constructor(props) {
    super(props);
    // this._service = new EuroService();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <section>
          <h1>Primitiva</h1>
        </section>
      </Container>
    );
  }
}

export default Primitiva;
