import React, { useState } from "react";
import {
  Container,
  Card,
  Stack,
  Row,
  Col,
  Button,
  Modal,
} from "react-bootstrap";
import { IoLocation, IoLocationOutline } from "react-icons/io5";
import { OpportunitiesCancelModal, OpportunitiesRegisterModal } from "./Modal";

const OpportunityDetailsCard = ({ id, opportunity }) => {
  const [registerModalShow, setRegisterModalShow] = useState(false);
  const [cancelModalShow, setCancelModalShow] = useState(false);

  const handleRegisterModalClose = () => setRegisterModalShow(false);
  const handleRegisterModalShow = () => setRegisterModalShow(true);
  const handleCancelModalClose = () => setCancelModalShow(false);
  const handleCancelModalShow = () => setCancelModalShow(true);

  return (
    <>
      <Container className="mt-5">
        <Card bg="dark" text="white">
          <Card.Body>
            <Card.Title className="fs-2 d-flex justify-content-between align-items-center">
              <div>{opportunity?.name}</div>
              <div className="d-flex gap-2">
                <Button variant="light" onClick={handleRegisterModalShow}>
                  Register
                </Button>
                {/* <Button variant="light" onClick={handleRegisterModalShow}>
                  Edit
                </Button>
                <Button variant="light" onClick={handleCancelModalShow}>
                  Cancel Event
                </Button> */}
              </div>
            </Card.Title>
            <Card.Subtitle className="mb-2 pb-2 text-secondary border-bottom border-secondary">
              Organizing By {opportunity?.organization?.name}
            </Card.Subtitle>
            <Card.Text className="border-bottom border-secondary p-3">
            <div className="d-flex flex-wrap justify-content-left align-items-center gap-3">
                <img
                  src={
                    opportunity?.organization?.logo ||
                    "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  }
                  class="rounded-circle"
                  width={100}
                  alt="Avatar"
                />
                <div>
                  <div className="fs-4">
                    {opportunity?.organization?.name}
                    <br />
                    <span className="text-secondary">rotary@rotary.lk</span>
                  </div>
                </div>
              </div>
              <Row direction="horizontal">
                <Col xs={12} md={6} direction="vertical" gap={1} className="mt-3">
                  <div className="fw-bold">Date </div>
                  <div>{opportunity?.date}</div>
                </Col>
                <Col xs={12} md={6} direction="vertical" gap={1} className="mt-3">
                  <div className="fw-bold">Time </div>
                  <div>{opportunity?.time}</div>
                </Col>
              </Row>
              <Row direction="horizontal">
                <Col xs={12} md={6} direction="vertical" gap={1} className="mt-3">
                  <div className="fw-bold">Venue </div>
                  <div>{opportunity?.venue}</div>
                </Col>
                <Col xs={12} md={6} direction="vertical" gap={1} className="mt-3">
                  <div className="fw-bold">Attendies </div>
                  <div>{opportunity?.attendies}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="text-white-50">
                    {opportunity?.description}
                  </div>
                </Col>
              </Row>
            </Card.Text>
            <Card.Link
              target="_blank"
              href={opportunity?.location_link}
              className="text-decoration-none d-flex align-items-center gap-1"
            >
              <IoLocationOutline size={20} />
              <div>Location</div>
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>

      <OpportunitiesRegisterModal
        show={registerModalShow}
        handleClose={handleRegisterModalClose}
      />
      <OpportunitiesCancelModal
        show={cancelModalShow}
        handleClose={handleCancelModalClose}
      />
    </>
  );
};

export default OpportunityDetailsCard;
