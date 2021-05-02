import Modal from 'react-bootstrap/Modal';
import Phase0 from './Phase0';
import Phase1 from './Phase1';
import Phase2 from './Phase2';
import { ModalBodyProps } from './interfaces';

function ModalBody({
  modalPhase, userData, setUserData,
}: ModalBodyProps): JSX.Element {
  switch(modalPhase) {
    case 0: {
      return (
        <Phase0
          userData={userData}
          setUserData={setUserData}
        />
      );
    }
    case 1: {
      return (
        <Phase1
          userData={userData}
          setUserData={setUserData}
        />
      );
    }
    case 2: {
      return (
        <Phase2
          userData={userData}
          setUserData={setUserData}
        />
      );
    }
    case 3: {
      return (
        <Modal.Body>
          
        </Modal.Body>
      );
    }
  }
};

export default ModalBody;
