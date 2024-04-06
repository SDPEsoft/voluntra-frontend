import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Image,
  Dropdown,
} from "react-bootstrap";
import { SignInModal, SignUpModal } from "./Modal";

const NavigationBar = () => {
  const [signinModalShow, setSigninModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);

  const handleSigninModalClose = () => setSigninModalShow(false);
  const handleSigninModalShow = () => setSigninModalShow(true);
  const handleSignupModalClose = () => setSignupModalShow(false);
  const handleSignupModalShow = () => setSignupModalShow(true);
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="text-white">
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
            <div className="d-flex gap-2">
              <Button variant="outline-light" onClick={handleSignupModalShow}>
                Sign Up
              </Button>
              <Button variant="light" onClick={handleSigninModalShow}>
                Sign In
              </Button>

              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="p-0 text-white"
                  
                >
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle bg-cover"
                    width={40}
                    height={40}
                    roundedCircle
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SignInModal
        show={signinModalShow}
        handleClose={handleSigninModalClose}
      />
      <SignUpModal
        show={signupModalShow}
        handleClose={handleSignupModalClose}
      />
    </>
  );
};

export default NavigationBar;
