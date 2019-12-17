import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";



const Index = () => {
  return (
    <div className="indexBack">
      <Container>
        <section>
          <h1>El Calvo de la Lotería</h1>
          <Row>
            <Col md={4}></Col>
            <Col md={6}>
              <h5>En está página podrás:</h5>
              <p>
                Ver los <Link to="/results"> resultados de la semana </Link>
              </p>
              <p>
                Realizar un pedido de lotería o jugar a los diferentes
                sorteos semanales una vez haga
                <Link to="/signup"> SignUp </Link> o haga{" "}
                <Link to="/login"> Login </Link>
              </p>
              <p>
                Para mas información <Link to="/contact"> contacte </Link> con
                nosotros
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Index;
