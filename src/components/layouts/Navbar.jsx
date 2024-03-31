import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/admin-dashboard" className="text-white">
          Volunteer Platform
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="t bg-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin-dashboard" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex gap-2">
            {/* <FormControl
              type="search"
              placeholder="Search opportunities"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="outline-light">Sign Up</Button>
            <Button variant="light">Sign In</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
