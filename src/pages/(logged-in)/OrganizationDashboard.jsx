
import React from "react";
import NavigationBar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import InfoCard from "../../components/dashboard/InfoCard";
import { Container, Row, Col } from "react-bootstrap";

const info = [
  {
    heading: "Opportunities",
    count: "50",
    description: "View opportunities",
    href: "/opportunities",
  },
  {
    heading: "Organizations",
    count: "15",
    description: "View Organizations",
    href: "/organizations",
  },
  {
    heading: "Members",
    count: "115",
    description: "View Members",
    href: "/members",
  },
  {
    heading: "Volunteers",
    count: "115",
    description: "View volunteers",
    href: "/volunteers",
  },
  {
    heading: "Trainig Seesions",
    count: "5",
    description: "View Trainig Seesions",
    href: "/trainings",
  },
  {
    heading: "Organizations Announcements",
    count: "5",
    description: "View Organizations events",
    href: "/events",
  }
];

const OrganizationDashboard = () => {
  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <Row>
          {info.map((infobody, i) => (
            <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
              <InfoCard key={i} {...infobody} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default OrganizationDashboard;