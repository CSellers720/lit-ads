import Modal from 'react-bootstrap/Modal';
import { ModalHeaderProps } from './interfaces';

function ModalHeader({ modalPhase }: ModalHeaderProps): JSX.Element {
  switch(modalPhase) {
    case 0: {
      return (
        <Modal.Header closeButton>
            <Modal.Title>
                Create a listing
            </Modal.Title>
        </Modal.Header>
      );
    }
    case 1: {
      return (
        <Modal.Header closeButton>
            <Modal.Title>
                Add image, date and description
            </Modal.Title>
        </Modal.Header>
      );
    }
    case 2: {
      return (
        <Modal.Header closeButton>
            <Modal.Title>
                Set price, condition, and contact info
            </Modal.Title>
        </Modal.Header>
      );
    }
    case 3: {
      return (
        <Modal.Header closeButton>
            <Modal.Title>
                Confirm Your Listing
            </Modal.Title>
        </Modal.Header>
      );
    }
  }
};

export default ModalHeader;
