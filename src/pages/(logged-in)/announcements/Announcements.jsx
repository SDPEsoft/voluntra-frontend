import React from "react";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import PaginationComponent from "../../../components/common/PaginationComponent";
import AnnouncementCard from "../../../components/announcements/AnnouncementCard";

const announcements = [
  {
    id: 1,
    name: "Jhon Smith",
    email: "jhonsmith@gmail.com",
    phone_no: "0771234567",
    logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    description: "Volunteer 1 description",
    address: "Colombo 03.",
    dob: "12-05-2024",
    rating: 3,
  },
  {
    id: 2,
    name: "Kale Williams",
    email: "kale@gmail.com",
    phone_no: "0771234567",
    logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    description: "Volunteer 2 description",
    address: "Colombo 03.",
    dob: "12-05-2024",
    rating: 2,
  },
  {
    id: 3,
    name: "kushan Perera",
    email: "kushan@gmail.com",
    phone_no: "0771234567",
    logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    description: "Volunteer 3 description",
    address: "Colombo 03.",
    dob: "12-05-2024",
    rating: 4,
  },
];

const Announcements = () => {
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div className="h3 fw-bold">Announcements</div>
          <FormControl
            type="search"
            placeholder="Search Announcements"
            className="me-2 w-25"
            aria-label="Search"
          />
        </div>
        <Row>
          {announcements.map((announcement, i) => (
            <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
              <AnnouncementCard key={i} announcement={announcement} />
            </Col>
          ))}
        </Row>
        <PaginationComponent
          page={page}
          setPage={setPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={announcements.length}
        />
      </Container>
      <Footer />
      <Outlet />
    </div>
  );
};

export default Announcements;
