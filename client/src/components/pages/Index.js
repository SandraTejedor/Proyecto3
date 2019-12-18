import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import imagen from "./../../../src/images/Layer.png";

const Index = () => {
  return (
    <div className="indexBack">
      <Container>
        <section>
          <br></br>
          <br></br>
          <Row>
            <Col md={4}>
              <img className="imgInicio" src={imagen} />
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <h3>En esta página podrás:</h3>
              <br></br>
              <div style={{ fontSize: "20px" }}>
                <p>
                  Ver los <Link to="/results"> resultados de la semana </Link>
                </p>
                <p>
                  Realizar un pedido de lotería o jugar a los diferentes sorteos
                  semanales una vez haga
                  <Link to="/signup"> Signup </Link> o haga{" "}
                  <Link to="/login"> Login </Link>
                </p>
                <p>
                  Para mas información <Link to="/contact"> contacte </Link> con
                  nosotros
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Index;
