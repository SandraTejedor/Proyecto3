import React, { Component } from "react";
import { Container } from "react-bootstrap";

class ElGordo extends Component {
  constructor(props) {
    super(props);
    // this._service = new EuroService();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <section>
          <h1>El Gordo</h1>
        </section>
      </Container>
    );
  }
}

export default ElGordo;
