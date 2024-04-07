import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  FloatingLabel,
  InputGroup,
  Col,
  Row,
} from "react-bootstrap";
// import { DateTime } from "react-datetime-bootstrap";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateToast } from "../../redux/toast";
import { useNavigate } from "react-router-dom";
import { getAllOrganizations } from "../../services/api/organization.service";
import { registerForOpportunity } from "../../services/api/useroppo_service";
import { createAnnouncement } from "../../services/api/announcement_service";



export const AnnouncementAddModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [isOrgLoading, setIsOrgLoading] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);


  const handleSubmit = async (event) => {
    setIsLoading(true);
    setValidated(true);
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const data = {
        title: title,
        message: message,
        description: description,
        organizationId: organizationId,
      };
      const response = await createAnnouncement(data);

      dispatch(
        updateToast({
          show: "true",
          message:
            response.status === 200 || response.status === 201
              ? "Successfully created announcement"
              : response.response.data || "Something went wrong",
          status:
            response.status === 200 || response.status === 201
              ? "success"
              : "error",
          variant:
            response.status === 200 || response.status === 201
              ? "success"
              : "danger",
        })
      );

      if (response.status === 200 || response.status === 201) {
        handleClose();
      }
    }
    setIsLoading(false);
  };

  const fetchOrganizations = async () => {
    setIsOrgLoading(true);
    const response = await getAllOrganizations();
    setOrganizations(response.data);
    console.log(response);
    setIsOrgLoading(false);
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  return (
    <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
      <Modal.Body className="bg-dark text-white border-0 rounded border-left border-secondary">
        <div className="d-flex justify-content-between align-items-cemter">
          <h3 className="text-Left">Create Announcement</h3>
          <div style={{ cursor: "pointer" }}>
            <IoMdClose size={25} onClick={handleClose} />
          </div>
        </div>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Organization</Form.Label>
                <Form.Select
                  value={organizationId}
                  onChange={(e) => setOrganizationId(e.target.value)}
                >
                  {organizations?.map((organization, key) => (
                    <option key={key} value={organization.id}>
                      {organization.username}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select organization
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide announcement title
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide message
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide oppurtunity location
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Objectives</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Objectives"
                  value={objectives}
                  onChange={(e) => setObjectives(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide oppurtunity objectives
                </Form.Control.Feedback>
              </Form.Group>
            </Row> */}

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="validationCustom01"
                className="d-flex flex-column justify-content-start"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  placeholder="Description"
                  value={description}
                  as="textarea"
                  rows={2}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide oppurtunity description
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <div className="d-flex justify-content-end gap-2 align-items-center my-3">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="light" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
