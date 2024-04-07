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
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { format, formatISO } from "date-fns";
import { getAllOrganizations } from "../../services/api/organization.service";
import { createOpportunity } from "../../services/api/opportunity_service";
import { useDispatch } from "react-redux";
import { updateToast } from "../../redux/toast";
import { useNavigate } from "react-router-dom";

export const OpportunitiesRegisterModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Body className="bg-dark text-white border-0 rounded border-left border-secondary">
        <div className="my-3 fs-4">Are you attend the event?</div>
        <div className="d-flex justify-content-end gap-2 align-items-center my-3">
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="light" onClick={handleClose}>
            Yes
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const OpportunitiesCancelModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Body className="bg-dark text-white border-0 rounded border-left border-secondary">
        <div className="my-3 fs-4">Are you sure event is cancel?</div>
        <div className="d-flex justify-content-end gap-2 align-items-center my-3">
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="light" onClick={handleClose}>
            Yes
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const OpportunitiesAddModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [objectives, setObjectives] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(formatISO(new Date()));
  const [endDate, setEndDate] = useState(formatISO(new Date()));
  const [organizations, setOrganizations] = useState([]);
  const [organizationId, setOrganizationId] = useState("");
  const [isOrgLoading, setIsOrgLoading] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleStartDateTimeChange = (dateTime) => {
    setStartDate(formatISO(dateTime));
  };

  const handleEndDateTimeChange = (dateTime) => {
    setEndDate(formatISO(dateTime));
  };

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
        type: type,
        objectives: objectives,
        location: location,
        description: description,
        startDate: startDate,
        endDate: endDate,
        organizationId: organizationId,
      };
      const response = await createOpportunity(data);

      dispatch(
        updateToast({
          show: "true",
          message:
            response.status === 200 || response.status === 201
              ? "Successfully created Opportunity"
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
          <h3 className="text-Left">Create Oppurtunity</h3>
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
                  defaultValue={organizations[0]?.id}
                >
                  {organizations?.map((organization, key) => (
                    <option key={key} value={organization?.id}>
                      {organization?.username}
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
                  Please provide oppurtunity title
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="one-time">One Time</option>
                  <option value="long-term">Long Term</option>
                  <option value="ongoing">Ongoing</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide oppurtunity type
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
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
                <Form.Select
                  required
                  value={objectives}
                  onChange={(e) => setObjectives(e.target.value)}
                >
                  <option value="teaching">Teaching</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="building">Building</option>
                  <option value="others">Others</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please provide oppurtunity objectives
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="d-flex flex-column justify-content-start"
              >
                <Form.Label>Start DateTime</Form.Label>
                <DateTimePicker
                  onChange={handleStartDateTimeChange}
                  value={startDate}
                  className={"bg-light text-black rounded"}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide oppurtunity start date
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="d-flex flex-column justify-content-start"
              >
                <Form.Label>End DateTime</Form.Label>
                <DateTimePicker
                  onChange={handleEndDateTimeChange}
                  value={endDate}
                  className={"bg-light text-black rounded"}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide oppurtunity end date
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

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
