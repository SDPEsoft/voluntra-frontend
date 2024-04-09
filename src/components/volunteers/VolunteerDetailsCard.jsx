import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Rating from "../common/Rating";
import { RateModal } from "./Modal";
import { format } from "date-fns";

const VolunteerDetailsCard = ({ id, volunteer }) => {
  const [rateModalShow, setRateModalShow] = useState(false);

  const handleRateModalClose = () => setRateModalShow(false);
  const handleRateModalShow = () => setRateModalShow(true);

  return (
    <>
      <Container className="mt-5">
        <Card bg="dark" text="white">
          <Card.Body>
            <Card.Title className="fs-2 d-flex justify-content-between align-items-center">
              <div className="w-100 d-flex align-items-center justify-content-between gap-2">
                {/* <div>{volunteer?.name}</div> */}
                {/* <Button variant="light" onClick={handleRegisterModalShow}>
                  Register
                </Button> */}
              </div>
            </Card.Title>
            <Card.Text className="border-bottom border-secondary p-3">
              <div className="d-flex justify-content-between align-items-start gap-3">
                <div className="d-flex flex-wrap justify-content-left align-items-center gap-3">
                  <img
                    src={
                      volunteer?.logo_url ||
                      "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    }
                    class="rounded-circle"
                    width={100}
                    alt="Avatar"
                  />
                  <div>
                    <div className="fs-4">
                      {volunteer?.username}
                      <br />
                      <span className="text-secondary">{volunteer?.email}</span>
                      <Rating id={volunteer?.id} />
                    </div>
                  </div>
                </div>
                <div>
                  <Button onClick={handleRateModalShow} variant="outline-light">Rate</Button>
                </div>
              </div>
              <Row direction="horizontal">
                <Col xs={12} md={6} className="mt-3">
                  <div className="fw-bold">Phone Number </div>
                  <div>{volunteer?.phoneno}</div>
                </Col>
                <Col xs={12} md={6} className="mt-3">
                  <div className="fw-bold">Address </div>
                  <div>{volunteer?.address}</div>
                </Col>
              </Row>
              <Row direction="horizontal">
                <Col xs={12} md={6} className="mt-3">
                  <div className="fw-bold">DOB </div>
                  <div>{volunteer?.dob && format(new Date(volunteer?.dob), "dd/MM/yyyy")}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div>Interests</div>
                  <div className="text-white-50">{volunteer?.interests}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div>Abilities</div>
                  <div className="text-white-50">{volunteer?.abilities}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div>Talents</div>
                  <div className="text-white-50">{volunteer?.talents}</div>
                </Col>
              </Row>
            </Card.Text>
            {/* <div className="d-flex justify-content-left align-items-center gap-3 ">
              <Card.Link
                target="_blank"
                href={`/opportunities?search_key=organization_id&search_value=${id}`}
                className="text-decoration-none d-flex align-items-center gap-1"
              >
                <div>Our opportunities</div>
              </Card.Link>
              <Card.Link
                target="_blank"
                href={volunteer?.location_link}
                className="text-decoration-none d-flex align-items-center gap-1"
              >
                <div>Our Events</div>
              </Card.Link>
              <Card.Link
                target="_blank"
                href={volunteer?.location_link}
                className="text-decoration-none d-flex align-items-center gap-1"
              >
                <div>Our Sessions</div>
              </Card.Link>
            </div> */}
          </Card.Body>
        </Card>
      </Container>
      <RateModal show={rateModalShow} handleClose={handleRateModalClose} id={volunteer?.id} />
    </>
  );
};

export default VolunteerDetailsCard;
