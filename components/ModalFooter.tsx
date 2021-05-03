import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalFooterProps, UserData } from './interfaces';
import axios from 'axios';

function ModalFooter({
  modalPhase, valid, userData, incrementPhase, decrementPhase, toggle,
}: ModalFooterProps): JSX.Element {
  const submitHandler = (input: UserData): void => {
    axios.post('/api/listings/', userData)
      .then((data) => {
        console.log(data);
      });
    toggle();
    window.location.reload(false);
  };

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
          <Button
            disabled={!valid}
            onClick={() => submitHandler(userData)}
          >
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
