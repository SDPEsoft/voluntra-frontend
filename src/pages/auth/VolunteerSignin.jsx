import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {
  Button,
  Col,
  Form,
  Row,
  Container,
  FloatingLabel,
  Spinner,
} from "react-bootstrap";
import { updateToast } from "../../redux/toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { volunteerLogin } from "../../services/api/volunteer.service";
import { useAuth } from "../../components/auth/AuthProvider";

const VolunteerSignin = () => {
  const { setUser } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    setValidated(true);
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const data = {
        username: email,
        password: password,
      };
      const response = await volunteerLogin(data);

      dispatch(
        updateToast({
          show: "true",
          message:
            response.status === 200 || response.status === 201
              ? "Successfully Signed Up"
              : response.response.data.error || "Something went wrong",
          status:
            response.status === 200 || response.status === 201
              ? "success"
              : "error",
          variant:
            response.status === 200 || response.status === 201
              ? "success"
              : "danger",
        })
      );

      if (response.status === 200 || response.status === 201) {
        const user = {
          username: email,
          role: "volunteer",
          token: response.data,
        };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/organization-dashboard");
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const user =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    if (user?.role) {
      if (user.role === "admin") {
        navigate("/admin-dashboard");
      }
      if (user.role === "volunteer") {
        navigate("/volunteer-dashboard");
      }
      if (user.role === "organization") {
        navigate("/organization-dashboard");
      }
    }
  }, []);
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-100"
      >
        <Row className="mb-3 ">
          <div className="mx-auto text-center fs-1 fw-bold">
            Volunteer Login
          </div>
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
                  Username
                </div>
              }
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid username.
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
            <Button
              variant="dark"
              size="lg"
              type="submit"
              className="w-100 d-flex align-items-center justify-content-center gap-2"
              disabled={isLoading}
            >
              {isLoading && (
                <Spinner
                  as="span"
                  animation="border"
                  role="status"
                  aria-hidden="true"
                  style={{ width: "25px", height: "25px" }}
                />
              )}
              Log In
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default VolunteerSignin;
