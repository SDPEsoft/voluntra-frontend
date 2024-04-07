import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Rating from "../common/Rating";
import { format } from "date-fns";

const AnnouncementDetailCard = ({ id, announcement }) => {
  return (
    <>
      <Container className="mt-5">
        <Card bg="dark" text="white">
          <Card.Body>
            <Card.Title className="fs-2 d-flex justify-content-between align-items-center">
              <div className="w-100 d-flex align-items-center justify-content-between gap-2">
                <div>{announcement?.title} asd</div>
                {/* <Button variant="light" onClick={handleRegisterModalShow}>
                  Register
                </Button> */}
              </div>
            </Card.Title>
            <Card.Text className="border-bottom border-secondary p-3">
              <div className="d-flex flex-wrap justify-content-left align-items-center gap-3">
                <img
                  src={
                    announcement?.organizationEntity?.logo_url ||
                    "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  }
                  class="rounded-circle"
                  width={100}
                  alt="Avatar"
                />
                <div>
                  <div className="fs-4">
                    {announcement?.organizationEntity?.username}
                    <br />
                    <span className="text-secondary">
                      {announcement?.organizationEntity?.email}
                    </span>
                  </div>
                </div>
              </div>
              <Row direction="horizontal">
                <Col xs={12} md={6} className="mt-3">
                  <div className="fw-bold">Message </div>
                  <div>{announcement?.message}</div>
                </Col>
                <Col xs={12} md={6} className="mt-3">
                  <div className="fw-bold">Created At </div>
                  <div>
                    {announcement?.date &&
                      format(announcement?.date, "dd/MM/yyyy HH:mm")}
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="text-white-50">
                    {announcement?.description}
                  </div>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default AnnouncementDetailCard;
