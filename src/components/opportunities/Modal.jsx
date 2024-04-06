import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

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
  return (
    <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
      <Modal.Body className="bg-dark text-white border-0 rounded border-left border-secondary">
        <div className="d-flex justify-content-between align-items-cemter">
          <h3 className="text-Left">Create Oppurtunity</h3>
          <div>
            <IoMdClose size={25} onClick={handleClose} />
          </div>
        </div>
        <div className="my-3 fs-4">Are you sure event is cancel?</div>
        <div className="d-flex justify-content-end gap-2 align-items-center my-3">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="light" onClick={handleClose}>
            Save
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
