import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Image,
  Dropdown,
} from "react-bootstrap";
import { SignInModal, SignUpModal } from "./Modal";
import { useAuth } from "../auth/AuthProvider";

const NavigationBar = () => {
  const { user, setUser } = useAuth();
  const [show, setShow] = useState(true);

  const [signinModalShow, setSigninModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);

  const handleSigninModalClose = () => setSigninModalShow(false);
  const handleSigninModalShow = () => setSigninModalShow(true);
  const handleSignupModalClose = () => setSignupModalShow(false);
  const handleSignupModalShow = () => setSignupModalShow(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

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
              <Nav.Link
                href={`/${user?.role}-dashboard`}
                className="text-white"
              >
                Dashboard
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-2">
              {user ? (
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
                    {user?.role != "admin" && (
                      <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    )}
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Button
                    variant="outline-light"
                    onClick={handleSignupModalShow}
                  >
                    Sign Up
                  </Button>
                  <Button variant="light" onClick={handleSigninModalShow}>
                    Sign In
                  </Button>
                </>
              )}
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
