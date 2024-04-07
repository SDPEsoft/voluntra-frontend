import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

export const SignInModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Body className="bg-dark text-white border-0 rounded">
        <div className="d-flex justify-content-between align-items-cemter">
          <h3 className="text-Left">Signin Options</h3>
          <div>
            <IoMdClose size={25} onClick={handleClose} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center gap-2 align-items-center my-3 w-100">
          <Button
            href="/volunteer/signin"
            className="w-100"
            variant="outline-light"
            onClick={handleClose}
          >
            You are volunteer
          </Button>
          <Button
            href="/organization/signin"
            className="w-100"
            variant="outline-light"
            onClick={handleClose}
          >
            You are organization
          </Button>
          <Button
            href="/admin/signin"
            className="w-100"
            variant="outline-light"
            onClick={handleClose}
          >
            You are admin
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const SignUpModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Body className="bg-dark text-white border-0 rounded">
        <div className="d-flex justify-content-between align-items-cemter">
          <h3 className="text-Left">Signup Options</h3>
          <div>
            <IoMdClose size={25} onClick={handleClose} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center gap-2 align-items-center my-3 w-100">
          <Button
            href="/volunteer/signup"
            className="w-100"
            variant="outline-light"
            onClick={handleClose}
          >
            Become a volunteer
          </Button>
          <Button
            href="/organization/signup"
            className="w-100"
            variant="outline-light"
            onClick={handleClose}
          >
            Become a organization
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
