import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  Spinner,
} from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import { CgOptions } from "react-icons/cg";
import { createOrganization } from "../../services/api/organization.service";
import { useDispatch } from "react-redux";
import { updateToast } from "../../redux/toast";
import { useNavigate } from "react-router-dom";

const OrganizationSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        username: name,
        email: email,
        password: password,
        address: address,
        type: type,
        description: description,
      };
      const response = await createOrganization(data);

      dispatch(
        updateToast({
          show: "true",
          message:
            response.status === 200 || response.status === 201
              ? "Successfully Signed Up"
              : response.response.data || "Something went wrong",
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
        navigate("/organization/signin");
      }
    }
    setIsLoading(false);
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
            Organization Signup
          </div>
        </Row>
        <Row className="mb-2">
          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationName"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingName"
              label={
                <div className="d-flex align-items-center gap-2">
                  <FaUser />
                  Organization Name
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a organozation name.
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
            controlId="validationAddress"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingAddress"
              label={
                <div className="d-flex align-items-center gap-2">
                  <FaLocationDot />
                  Address
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                required
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid address.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationAddress"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingAddress"
              label={
                <div className="d-flex align-items-center gap-2">
                  <CgOptions />
                  Type
                </div>
              }
              className="mb-2"
            >
              <Form.Select
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="non-profit">Nonprofit Organizations</option>
                <option value="community-groups">Community Groupss</option>
                <option value="NGO">
                  NGOs (Non-Governmental Organizations)
                </option>
                <option value="charities">Charities</option>
                <option value="social-enterprises">Social Enterprises</option>
                <option value="government-agencies">Government Agencies</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please enter a valid type.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationAddress"
            className="mx-auto"
          >
            <FloatingLabel
              controlId="floatingAddress"
              label={
                <div className="d-flex align-items-center gap-2">
                  <MdDescription />
                  Description
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                as="textarea"
                rows={3}
                required
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid type.
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
              Sign Up
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default OrganizationSignup;
