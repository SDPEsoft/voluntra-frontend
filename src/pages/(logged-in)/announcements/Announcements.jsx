import React, { useEffect, useState } from "react";
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
import { Outlet } from "react-router-dom";
import PaginationComponent from "../../../components/common/PaginationComponent";
import AnnouncementCard from "../../../components/announcements/AnnouncementCard";
import {
  getAllAnnouncements,
  getAnnouncementsByOrganization,
} from "../../../services/api/announcement_service";
import { IoAddOutline } from "react-icons/io5";
import { AnnouncementAddModal } from "../../../components/announcements/Modal";
import { useAuth } from "../../../components/auth/AuthProvider";

const Announcements = () => {
  const { user } = useAuth();
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [announcements, setAnnouncements] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [addModalShow, setAddModalShow] = React.useState(false);
  const [isAll, setIsAll] = React.useState(true);

  const handleAddModalClose = () => setAddModalShow(false);
  const handleAddModalShow = () => setAddModalShow(true);

  const fetchAllAnnouncements = async () => {
    setIsLoading(true);
    const response = await getAllAnnouncements();
    setAnnouncements(response.data);
    console.log(response);
  };

  const fetchAnnouncementsByOrganization = async () => {
    setIsLoading(true);
    const response = await getAnnouncementsByOrganization(5);
    setAnnouncements(response.data);
    console.log(response);
  };

  useEffect(() => {
    if (isAll) {
      fetchAllAnnouncements();
    } else {
      fetchAnnouncementsByOrganization();
    }
  }, [isAll]);

  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <div className="h3 fw-bold">Announcements</div>
          <div className="d-flex flex-sm-row w-sm-50 w-md-25 justify-content-between align-items-center gap-2">
            <FormControl
              type="search"
              placeholder="Search announcements"
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
        {user.role === "organization" && (
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
          {announcements?.map((announcement, i) => (
            <Col key={i} xs={12} md={6} lg={4} xl={3} className="mb-4">
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
          totalItems={announcements?.length}
        />
      </Container>
      <Footer />
      <AnnouncementAddModal
        show={addModalShow}
        handleClose={handleAddModalClose}
      />
    </div>
  );
};

export default Announcements;
