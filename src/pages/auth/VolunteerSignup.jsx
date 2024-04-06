import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";

const VolunteerSignup = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        <Row className="mb-2 ">
          <div className="mx-auto text-center fs-1 fw-bold">
            Volunteer Signup
          </div>
        </Row>
        <Row className="mb-2">
          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationUsername"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingUsername"
              label={
                <div className="d-flex align-items-center gap-2">
                  <FaUser />
                  Username
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                required
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a username.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-2">
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
                  <IoMail />
                  Email
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationPhoneNumber"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingPhoneNumber"
              label={
                <div className="d-flex align-items-center gap-2">
                  <FaPhone />
                  Phone Number
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                required
                type="number"
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid phone number.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-2">
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
              className="mb-2"
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

        <Row className="mb-2">
          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationConfirmPassword"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingConfirmPassword"
              label={
                <div className="d-flex align-items-center gap-2">
                  <FaLock />
                  Confirm Password
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm="8" md="4" className="mx-auto">
            <Button variant="dark" size="lg" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default VolunteerSignup;
