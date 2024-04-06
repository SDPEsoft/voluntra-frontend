import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Rating from "../common/Rating";

const MemberDetailsCard = ({ id, member }) => {
//   const [registerModalShow, setRegisterModalShow] = useState(false);

//   const handleRegisterModalClose = () => setRegisterModalShow(false);
//   const handleRegisterModalShow = () => setRegisterModalShow(true);

  return (
    <>
      <Container className="mt-5">
        <Card bg="dark" text="white">
          <Card.Body>
            <Card.Title className="fs-2 d-flex justify-content-between align-items-center">
              <div className="w-100 d-flex align-items-center justify-content-between gap-2">
                {/* <div>{member?.name}</div> */}
                {/* <Button variant="light" onClick={handleRegisterModalShow}>
                  Register
                </Button> */}
              </div>
            </Card.Title>
            <Card.Text className="border-bottom border-secondary p-3">
              <div className="d-flex flex-wrap justify-content-left align-items-center gap-3">
                <img
                  src={
                    member?.logo_url ||
                    "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  }
                  class="rounded-circle"
                  width={100}
                  alt="Avatar"
                />
                <div>
                  <div className="fs-4">
                    {member?.name}
                    <br />
                    <span className="text-secondary">{member?.email}</span>
                    <Rating rating={member?.rating} />
                  </div>
                </div>
              </div>
              <Row direction="horizontal">
                <Col xs={12} md={6} className="mt-3">
                  <div className="fw-bold">Phone Number </div>
                  <div>{member?.phone_no}</div>
                </Col>
                <Col xs={12} md={6} className="mt-3">
                  <div className="fw-bold">Address </div>
                  <div>{member?.address}</div>
                </Col>
              </Row>
              <Row direction="horizontal">
                <Col xs={12} md={6} className="mt-3">
                  <div className="fw-bold">DOB </div>
                  <div>{member?.dob}</div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="text-white-50">{member?.description}</div>
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
                href={member?.location_link}
                className="text-decoration-none d-flex align-items-center gap-1"
              >
                <div>Our Events</div>
              </Card.Link>
              <Card.Link
                target="_blank"
                href={member?.location_link}
                className="text-decoration-none d-flex align-items-center gap-1"
              >
                <div>Our Sessions</div>
              </Card.Link>
            </div> */}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default MemberDetailsCard;
