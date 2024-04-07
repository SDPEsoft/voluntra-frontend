import React from "react";
import { Container, Stack, Button,Card } from "react-bootstrap";

const FeatureCommunityGatherings = () => {
  return (
    <Container className="mt-5">
      <Stack direction="horizontal" gap={3}>
        <h3>Featured Comminity Gatherings</h3>
        <Button href="/opportunities" variant="dark" className="ms-auto">
          View all
        </Button>
      </Stack>
      <Stack direction="horizontal" gap={3} className="mt-3 d-flex flex-wrap justify-content-center">
        <Card bg="dark" text="white" >
          <Card.Img
            variant="top"
            src="https://charlestonanimalsociety.org/nokillscshelter/wp-content/uploads/2022/05/lights-camera-APPRECIATION.png"
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
        <Card bg="dark" text="white" >
          <Card.Img
            variant="top"
            src="https://www.newham.gov.uk/images/09121_Volunteer_Day_Social_tiles_v6_BOTTOM_MIDDLE.jpg"
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
        <Card bg="dark" text="white" >
          <Card.Img
            variant="top"
            src="https://www.gracegrapevine.org/wp-content/uploads/2022/06/Volunteer-Appreciation-Evite-2022-4.png"
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

export default FeatureCommunityGatherings;
