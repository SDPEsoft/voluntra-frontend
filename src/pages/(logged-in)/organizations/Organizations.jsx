import React, { useEffect } from "react";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import OpportunityCard from "../../../components/opportunities/OpportunityCard";
import { Outlet } from "react-router-dom";
import OrganizationCard from "../../../components/organizations/OrganizationCard";
import PaginationComponent from "../../../components/common/PaginationComponent";
import { getAllOrganizations } from "../../../services/api/organization.service";

// const organizations = [
//   {
//     id: 1,
//     name: "Rotary Club",
//     email: "info@organization.com",
//     logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
//     description: "Organization 1 description",
//     address: "Colombo 03.",
//     start_date: "12-05-2024",
//     members_count: 100,
//     rating: 3,
//   },
//   {
//     id: 2,
//     name: "Organization 2",
//     email: "info@organization.com",
//     logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
//     description: "Organization 2 description",
//     address: "Colombo 03.",
//     start_date: "12-05-2024",
//     members_count: 100,
//     rating: 2,
//   },
//   {
//     id: 3,
//     name: "Organization 3",
//     email: "info@organization.com",
//     logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
//     description: "Organization 3 description",
//     address: "Colombo 03.",
//     start_date: "12-05-2024",
//     members_count: 100,
//     rating: 4,
//   },
// ];

const Organizations = () => {
  const [organizations, setOrganizations] = React.useState();
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchOrganizations = async() => {
    setIsLoading(true);
    const response =await getAllOrganizations();
    setOrganizations(response.data);
    console.log(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div className="h3 fw-bold">Organizations</div>
          <FormControl
            type="search"
            placeholder="Search organizations"
            className="me-2 w-25"
            aria-label="Search"
          />
        </div>
        <Row>
          {organizations?.map((organization, key) => (
            <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
              <OrganizationCard key={key} organization={organization} />
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
          totalItems={organizations?.length}
        />
      </Container>
      <Footer />
      <Outlet />
    </div>
  );
};

export default Organizations;
