import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

class BonoLoto extends Component {
  constructor(props) {
    super(props);
    // this._service = new EuroService();
    this.state = {};
  }
  render() {
    let arrButtons1 = [];
    for (let i = 1; i < 10; i++) {
      arrButtons1.push(
        <Button variant="dark" type="submit">
          {i}
        </Button>
      );
    }
    let arrButtons2 = [];
    for (let i = 10; i < 20; i++) {
      arrButtons2.push(
        <Button variant="dark" type="submit">
          {i}
        </Button>
      );
    }
    let arrButtons3 = [];
    for (let i = 20; i < 30; i++) {
      arrButtons3.push(
        <Button variant="dark" type="submit">
          {i}
        </Button>
      );
    }
    let arrButtons4 = [];
    for (let i = 30; i < 40; i++) {
      arrButtons4.push(
        <Button variant="dark" type="submit">
          {i}
        </Button>
      );
    }
    let arrButtons5 = [];
    for (let i = 40; i < 50; i++) {
      arrButtons5.push(
        <Button variant="dark" type="submit">
          {i}
        </Button>
      );
    }
    return (
      <Container>
        <section>
          <h1>BonoLoto</h1>
        </section>
        <Row>
          <Col xs={1}>
            <p>1</p>
            {arrButtons1}
          </Col>
          <Col xs={1}>{arrButtons2}</Col>
          <Col xs={1}>{arrButtons3}</Col>
          <Col xs={1}>{arrButtons4}</Col>
          <Col xs={1}>{arrButtons5}</Col>
        </Row>
      </Container>
    );
  }
}

export default BonoLoto