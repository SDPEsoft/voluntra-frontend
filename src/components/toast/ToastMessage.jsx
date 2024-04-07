import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateToast } from "../../redux/toast";

const ToastMessage = () => {
  const dispatch = useDispatch();
  const toastState = useSelector((state) => state.toast);

  const handleClose = async () => {
    dispatch(updateToast({ ...toastState, show: "false" }));
  };

  return (
    <Toast
      autohide
      delay={3000}
      onClose={handleClose}
      show={toastState.show === "true"}
      bg={toastState.variant}
      style={{ position: "fixed", top: "10px", right: "10px", zIndex: "10" }}
    >
      <Toast.Header>
        <strong className="uppercase w-100">
          {toastState.status.toUpperCase()}
        </strong>
      </Toast.Header>
      <Toast.Body className="text-white">{toastState.message}</Toast.Body>
    </Toast>
  );
};

export default ToastMessage;
