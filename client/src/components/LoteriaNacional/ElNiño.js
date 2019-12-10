import React, { Component } from "react";
import { Container } from "react-bootstrap";

class ElNiño extends Component {
  constructor(props) {
    super(props);
    // this._service = new EuroService();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <section>
          <h1>El Niño</h1>
        </section>
      </Container>
    );
  }
}


export default ElNiño