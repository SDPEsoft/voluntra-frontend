import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { IoMdStar, IoIosStarOutline } from "react-icons/io";
import { getAllOrganizations } from "../../services/api/organization.service";
import { getAllOpportunities } from "../../services/api/opportunity_service";
import Feedback from "react-bootstrap/esm/Feedback";
import { registerForOpportunity } from "../../services/api/useroppo_service";
import { addRate } from "../../services/api/rate_service";
import { updateToast } from "../../redux/toast";
import { useDispatch } from "react-redux";

export const RateModal = ({ show, handleClose, id }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = React.useState(0);
  const [organizations, setOrganizations] = useState([]);
  const [organizationId, setOrganizationId] = useState("");
  const [isOrgLoading, setIsOrgLoading] = useState(true);
  const [opportunities, setOpportunities] = useState([]);
  const [opportunityId, setOpportunityId] = useState("");
  const [isOppLoading, setIsOppLoading] = useState(true);
  const [feedback, setFeedback] = useState("");

  const handleRating = (rateCount) => {
    if (rating === rateCount) {
      setRating(rateCount - 1);
    } else {
      setRating(rateCount);
    }
  };
  const handleSave = async () => {
    const data = {
      organizationId: organizationId,
      opportunityId: opportunityId,
      feedback: feedback,
      rate: rating.toString(),
      volunteerId: id,
    };
    const response = await addRate(data);

    dispatch(
      updateToast({
        show: "true",
        message:
          response.status === 200 || response.status === 201
            ? "Successfully give rate"
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

    // if (response.status === 200 || response.status === 201) {
      handleClose();
    // }
  };

  const fetchOrganizations = async () => {
    setIsOrgLoading(true);
    const response = await getAllOrganizations();
    setOrganizations(response.data);
    console.log(response);
    setIsOrgLoading(false);
  };

  const fetchOpportunities = async () => {
    setIsOppLoading(true);
    const response = await getAllOpportunities();
    setOpportunities(response.data);
    console.log(response);
    setIsOppLoading(false);
  };

  useEffect(() => {
    fetchOrganizations();
    fetchOpportunities();
  }, []);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Body className="bg-dark text-white border-0 rounded border-left border-secondary">
        <div className="my-3 fs-4">Give a rating</div>
        <div className="text-left d-flex flex-column gap-3">
          <div>
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
          </div>
          <div>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label>Opportunities</Form.Label>
              <Form.Select
                value={opportunityId}
                onChange={(e) => setOpportunityId(e.target.value)}
                defaultValue={opportunities[0]?.id}
              >
                {opportunities?.map((opportunities, key) => (
                  <option key={key} value={opportunities?.id}>
                    {opportunities?.title}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select opportunities
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div>
            <Form.Group
              as={Col}
              controlId="validationCustom01"
              className="d-flex flex-column justify-content-start"
            >
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                required
                placeholder="Feedback"
                value={feedback}
                as="textarea"
                rows={2}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide oppurtunity description
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2">
            {[...Array(5)]?.map((_, i) => {
              return i < rating ? (
                <IoMdStar
                  size={30}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRating(i + 1)}
                />
              ) : (
                <IoIosStarOutline
                  size={30}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRating(i + 1)}
                />
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-end gap-2 align-items-center my-3">
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="light" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
