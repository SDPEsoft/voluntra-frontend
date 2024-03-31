import React from "react";
import { Button, Modal } from "react-bootstrap";

export const RegisterToOrganizationModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Body className="bg-dark text-white border-0 rounded border-left border-secondary">
        <div className="my-3 fs-4">Are you sure you want to register to this organization?</div>
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
