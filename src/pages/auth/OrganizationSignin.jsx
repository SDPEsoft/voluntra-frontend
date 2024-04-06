import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {
  Button,
  Col,
  Form,
  Row,
  Container,
  FloatingLabel,
} from "react-bootstrap";

const OrganizationSignin = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("email", email);
      console.log("password", password);
    }
    setValidated(true);
  };
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-100"
      >
        <Row className="mb-3 ">
          <div className="mx-auto text-center fs-1 fw-bold">Organization Login</div>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationEmail"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingEmail"
              label={
                <div className="d-flex align-items-center gap-2">
                  <FaUser />
                  Email
                </div>
              }
              className="mb-3"
            >
              <Form.Control
                required
                type="email"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationPassword"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingPassword"
              label={
                <div className="d-flex align-items-center gap-2">
                  <FaLock />
                  Password
                </div>
              }
              className="mb-3"
            >
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm="8" md="4" className="mx-auto">
            <Button variant="dark" size="lg" type="submit" className="w-100">
              Log In
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default OrganizationSignin;
