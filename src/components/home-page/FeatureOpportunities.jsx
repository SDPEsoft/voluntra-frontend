import React from "react";
import { Container, Stack, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const FeatureOpportunities = () => {
  return (
    <Container className="mt-5">
      <Stack direction="horizontal" gap={3}>
        <h3>Featured Opportunities</h3>
        <Button href="/opportunities" variant="dark" className="ms-auto">
          View all
        </Button>
      </Stack>
      <Stack
        direction="horizontal"
        gap={3}
        className="mt-3 d-flex flex-wrap justify-content-center"
      >
        <Card bg="dark" text="white">
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-vector/minimal-charity-event-facebook-post-template_23-2149387655.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711411200&semt=ais"
            width={260}
            height={250}
            style={{ width: "400px", height: "250px" }}
          />
          {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body> */}
        </Card>
        <Card bg="dark" text="white">
          <Card.Img
            variant="top"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/8b5435164095993.Y3JvcCwxMDgwLDg0NCwwLDA.jpg"
            width={260}
            height={250}
            style={{ width: "400px", height: "250px" }}
          />
          {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body> */}
        </Card>
        <Card bg="dark" text="white">
          <Card.Img
            variant="top"
            src="https://images.squarespace-cdn.com/content/v1/638d4d0d785e9054780ddf5d/ce0924b3-8642-4585-bfbe-480df9622ddf/Coastal+WALKWAY+clean+up+FB+event.png"
            width={260}
            height={250}
            style={{ width: "400px", height: "250px" }}
          />
          {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body> */}
        </Card>
      </Stack>
    </Container>
  );
};

export default FeatureOpportunities;
