import React, { useEffect } from "react";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import OpportunityCard from "../../../components/opportunities/OpportunityCard";
import { Outlet } from "react-router-dom";
import PaginationComponent from "../../../components/common/PaginationComponent";
import { IoAddOutline } from "react-icons/io5";
import { OpportunitiesAddModal } from "../../../components/opportunities/Modal";
import {
  getAllOpportunities,
  getOpportunitiesByOrganization,
} from "../../../services/api/opportunity_service";
import { useAuth } from "../../../components/auth/AuthProvider";

const Opportunities = () => {
  const { user } = useAuth();
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [opportunities, setOpportunities] = React.useState();
  const [addModalShow, setAddModalShow] = React.useState(false);
  const [isAll, setIsAll] = React.useState(true);

  const handleAddModalClose = () => setAddModalShow(false);
  const handleAddModalShow = () => setAddModalShow(true);

  const fetchAllOpportunities = async () => {
    setIsLoading(true);
    const response = await getAllOpportunities();
    setOpportunities(response.data);
    console.log(response);
  };

  const fetchOpportunitiesByOrganization = async () => {
    setIsLoading(true);
    const response = await getOpportunitiesByOrganization(1);
    setOpportunities(response.data);
    console.log(response);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isAll) {
      fetchAllOpportunities();
    } else {
      fetchOpportunitiesByOrganization();
    }
  }, [isAll]);
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

          {user?.role === "organization" && (
            <div className="mb-4">
              <Form.Check
                inline
                label="All"
                name="all"
                type="radio"
                checked={isAll}
                onChange={() => setIsAll(true)}
              />
              <Form.Check
                inline
                label="Own"
                name="all"
                type="radio"
                checked={!isAll}
                onChange={() => setIsAll(false)}
              />
            </div>
          )}

          <Row>
            {opportunities?.map((opportunity, i) => (
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
      <OpportunitiesAddModal
        show={addModalShow}
        handleClose={handleAddModalClose}
      />
    </>
  );
};

export default Opportunities;
