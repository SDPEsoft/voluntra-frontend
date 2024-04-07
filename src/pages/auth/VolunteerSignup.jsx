import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDescription } from "react-icons/md";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  Spinner,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateToast } from "../../redux/toast";
import { useNavigate } from "react-router-dom";
import { createVolunteer } from "../../services/api/volunteer.service";

const VolunteerSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [interests, setInterests] = useState("");
  const [talents, setTalents] = useState("");
  const [abilities, setAbilities] = useState("");
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
        username: username,
        email: email,
        password: password,
        address: address,
        phoneno: phoneNo,
        dob: dob,
        interests: interests,
        abilities: abilities,
        talents: talents,
      };
      const response = await createVolunteer(data);

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
        navigate("/volunteer/signin");
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
            Volunteer Signup
          </div>
        </Row>
        <Row className="mb-2 d-flex justify-content-center">
          <Form.Group as={Col} sm="8" md="4" controlId="validationUsername">
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

          <Form.Group as={Col} sm="8" md="4" controlId="validationEmail">
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

       <Row className="mb-2 d-flex justify-content-center">
          <Form.Group as={Col} sm="8" md="4" controlId="validationPhoneNumber">
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

          <Form.Group as={Col} sm="8" md="4" controlId="validationAddress">
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

       <Row className="mb-2 d-flex justify-content-center">
          <Form.Group as={Col} sm="8" md="4" controlId="validationAddress">
            <FloatingLabel
              controlId="floatingAddress"
              label={
                <div className="d-flex align-items-center gap-2">
                  Date Of Birth
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                required
                type="date"
                placeholder="Date Of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid address.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} sm="8" md="4" controlId="validationAddress">
            <FloatingLabel
              controlId="floatingAddress"
              label={
                <div className="d-flex align-items-center gap-2">
                  <MdDescription />
                  Interests
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                as="textarea"
                rows={3}
                required
                placeholder="Interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid interests.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

       <Row className="mb-2 d-flex justify-content-center">
          <Form.Group as={Col} sm="8" md="4" controlId="validationAddress">
            <FloatingLabel
              controlId="floatingAddress"
              label={
                <div className="d-flex align-items-center gap-2">
                  <MdDescription />
                  Abilities
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                as="textarea"
                rows={3}
                required
                placeholder="Abilities"
                value={abilities}
                onChange={(e) => setAbilities(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid abilities.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} sm="8" md="4" controlId="validationAddress">
            <FloatingLabel
              controlId="floatingAddress"
              label={
                <div className="d-flex align-items-center gap-2">
                  <MdDescription />
                  Talents
                </div>
              }
              className="mb-2"
            >
              <Form.Control
                as="textarea"
                rows={3}
                required
                placeholder="Talents"
                value={talents}
                onChange={(e) => setTalents(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid talents.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

       <Row className="mb-2 d-flex justify-content-center">
          <Form.Group as={Col} sm="8" md="4" controlId="validationPassword">
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

          <Form.Group
            as={Col}
            sm="8"
            md="4"
            controlId="validationConfirmPassword"
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

        <Row className="mb-2 d-flex justify-content-center">
          <Form.Group as={Col} sm="8" md="8">
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

export default VolunteerSignup;
