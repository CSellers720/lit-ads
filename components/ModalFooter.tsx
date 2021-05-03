import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalFooterProps, defaultUserData } from './interfaces';

function ModalFooter({
  modalPhase, valid, incrementPhase, decrementPhase, toggle,
}: ModalFooterProps): JSX.Element {

  switch(modalPhase) {
    case 0: {
      return (
        <Modal.Footer>
          <Button disabled>
            {'<'} Back
          </Button>
          <Button
            onClick={incrementPhase}
          >
            Forward {'>'}
          </Button>
          <Button onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      );
    }
    case 1: {
      return (
        <Modal.Footer>
          <Button onClick={decrementPhase}>
            {'<'} Back
          </Button>
          <Button
            onClick={incrementPhase}
          >
            Forward {'>'}
          </Button>
          <Button onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      );
    }
    case 2: {
      return (
        <Modal.Footer>
          <Button onClick={decrementPhase}>
            {'<'} Back
          </Button>
          <Button
            onClick={incrementPhase}
          >
            Forward {'>'}
          </Button>
          <Button onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      );
    }
    case 3: {
      return (
        <Modal.Footer>
          <Button onClick={decrementPhase}>
            {'<'} Back
          </Button>
          <Button disabled={!valid}>
            Submit
          </Button>
          <Button onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      );
    }
  }
};

export default ModalFooter;
