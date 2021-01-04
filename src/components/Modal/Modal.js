import React from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ show, handleClose, ...props }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{props.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.Plot}</Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CustomModal;
