import React from "react";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import OpportunityCard from "../../../components/opportunities/OpportunityCard";
import { Outlet } from "react-router-dom";
import PaginationComponent from "../../../components/common/PaginationComponent";
import { IoAddOutline } from "react-icons/io5";
import { OpportunitiesAddModal } from "../../../components/opportunities/Modal";

const opportunities = [
  {
    id: 1,
    name: "Beach Cleaning",
    description: "Opportunity 1 description",
    venue: "BMICH",
    location_link: "https://www.google.com/maps",
    date: "12-05-2024",
    time: "10:00 AM",
    attendies: 100,
    organization: {
      id: 1,
      name: "Rotary Club",
      logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    },
  },
  {
    id: 2,
    name: "Opportunity 2",
    description: "Opportunity 2 description",
    venue: "BMICH",
    location_link: "https://www.google.com/maps",
    date: "12-05-2024",
    time: "10:00 AM",
    attendies: 100,
    organization: {
      id: 1,
      name: "Organization 1",
      logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    },
  },
  {
    id: 3,
    name: "Opportunity 3",
    description: "Opportunity 3 description",
    venue: "BMICH",
    location_link: "https://www.google.com/maps",
    date: "12-05-2024",
    time: "10:00 AM",
    attendies: 100,
    organization: {
      id: 2,
      name: "Organization 2",
      logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    },
  },
];

const Opportunities = () => {
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [addModalShow, setAddModalShow] = React.useState(false);

  const handleAddModalClose = () => setAddModalShow(false);
  const handleAddModalShow = () => setAddModalShow(true);
  return (
    <>
      <div>
        <NavigationBar />
        <Container className="mt-5 mb-10">
          <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <div className="h3 fw-bold">Opportunities</div>
            <div className="d-flex flex-sm-row w-sm-50 w-md-25 justify-content-between align-items-center gap-2">
              <FormControl
                type="search"
                placeholder="Search opportunities"
                className="w-100"
                aria-label="Search"
              />
              <Button
                variant="dark"
                className="d-flex justify-content-between align-items-center gap-1"
                onClick={handleAddModalShow}
              >
                <IoAddOutline size={20} />
                ADD
              </Button>
            </div>
          </div>
          <Row>
            {opportunities.map((opportunity, i) => (
              <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
                <OpportunityCard key={i} opportunity={opportunity} />
              </Col>
            ))}
          </Row>
          <PaginationComponent
            totalItems={opportunities?.length}
            page={page}
            setPage={setPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Container>
        <Footer />
      </div>
      <OpportunitiesAddModal show={addModalShow} handleClose={handleAddModalClose} />
    </>
  );
};

export default Opportunities;
