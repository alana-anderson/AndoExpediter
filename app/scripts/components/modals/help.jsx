import React, { PropTypes } from 'react';
import { Modal } from 'react-bootstrap';


/*
 * Help Modal
 * Will prompt the user to close the kitchen
 */
const HelpModalPropTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleKitchenStatus: PropTypes.func.isRequired,
};

function HelpModal(props) {
  return (
    <Modal
      show={Boolean(props.showModal)}
    >
      <Modal.Header>
        <Modal.Title>Are you sure you want to close the kitchen?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Closing the kitchen will prevent any further orders for the day.</p>
      </Modal.Body>
      <Modal.Footer className="align-center">
        <a
          id="true"
          className="btn brand"
          onClick={props.handleKitchenStatus}
        >
          Yes, Close Kitchen
        </a>
        <button
          type="button"
          className="btn"
          onClick={props.closeModal}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
}
HelpModal.propTypes = HelpModalPropTypes;

export default HelpModal;
