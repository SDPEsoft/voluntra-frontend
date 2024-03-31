import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const InfoCard = ({ heading, count, description, href }) => {
  return (
    <Link to={href} className="text-decoration-none" >
      <Card bg="dark" text="white" style={{ height: "100%" }}>
        <Card.Body>
          <Card.Title className="text-center">{heading}</Card.Title>
          <Card.Text className="text-center">
            <div className="fw-bold fs-5">{count}</div>
            <div>{description}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default InfoCard;
