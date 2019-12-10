import React from "react";
import { Container } from "react-bootstrap";
import {MDBIcon} from "mdbreact";

const Contact = props => {
  return (
    <Container>
      <section>
        <h1>Contacto</h1>
        <hr></hr>
        <h4>Administracion:</h4>
        <h5>Admón de Loterías nº 195, El Calvo de la Lotería</h5>
        <hr></hr>
        <h4>Dirección:</h4>
        <h5>Avda de los Poblados 58, 28044 Madrid Madrid</h5>
        <hr></hr>
        <h4>
          <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
          Teléfono:
        </h4>
        <h5>915 094 242</h5>
        <hr></hr>
        <h4>Email:</h4>
        <h5>info@elcalvodelaloteria.es</h5>
      </section>
    </Container>
  );
};

export default Contact;


// Admón de Loterías nº 195
// Avda de los Poblados 58
// 28044 Madrid Madrid
// Teléfono: 915 094 242
// Fax:
// Email: info@elcalvodelaloteria.es