import React, { Component } from "react";
import { Button, Form, Container, Toast } from "react-bootstrap";

import Service from "../../service/Auth.service";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      user: { username: "", password: "" , email: "" , perfil:""},
      showToast: false,
      toastText: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, email, perfil } = this.state.user;
    this._service
      .signup(username, password, email, perfil)
      .then(theNewUser => {
        this.props.setUser(theNewUser.data);
        this.setState({ username: "", password: "", email: "", perfil: "" });
        this.props.history.push('/') 
      })
        .catch(err => this.handleToastOpen(err.response.data.message));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
      this.setState({ user: { ...this.state.user, [name]: value } });
  };

  handleToastClose = () => this.setState({ showToast: false, toastText: "" });
  handleToastOpen = text => this.setState({ showToast: true, toastText: text });

  render() {
    return (
      <Container>
        <h1>Registro</h1>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Registrarme
          </Button>
        </Form>
        <Toast
          onClose={this.handleToastClose}
          show={this.state.showToast}
          delay={2000}
          autohide
          style={{
            position: "fixed",
            left: "170px",
            bottom: "250px",
            minWidth: "150px"
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{this.state.toastText}</Toast.Body>
        </Toast>
      </Container>
    );
  }
}

export default SignupForm;
