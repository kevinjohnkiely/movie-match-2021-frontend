import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom'

const FaveAlertModal = () => {
    const history = useHistory()
  return (
    <Modal show={true}>
      <Modal.Header>
        <Modal.Title>5 Likes Added!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Thank you for adding your 5 favourite movies. Click on the button below
        to find your matches!
      </Modal.Body>
      <Modal.Footer style={{ display: "flex" }}>
        <Button variant="info" style={{ marginRight: "auto" }} onClick={() => history.push('/profile')}>
          Edit Favourites
        </Button>
        <Button variant="primary" style={{ marginLeft: "auto" }} onClick={() => history.push('/matches')}>
          Find Matches
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FaveAlertModal;
