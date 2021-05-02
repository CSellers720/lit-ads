import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {
  UserData, PhaseProps,
} from './interfaces';
import cloneDeep from 'clone-deep';

function Phase2({ userData, userData: { phase2 }, setUserData }: PhaseProps): JSX.Element {
  function setter(stateName: string, newValue: any): void {
    let updated: UserData = cloneDeep(userData);
    updated.phase2[stateName] = newValue;
    setUserData(updated);
  };
  return (
    <Modal.Body>
    </Modal.Body>
  );
};

export default Phase2;
