import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {
  UserData, PhaseProps,
} from './interfaces';
import cloneDeep from 'clone-deep';

function Phase1({ userData, userData: { phase1 }, setUserData }: PhaseProps): JSX.Element {
  const { image, description, price, date } = phase1;
  console.log(this.imageFile);
  function setter(stateName: string, newValue: any): void {
    let updated: UserData = cloneDeep(userData);
    updated.phase0[stateName] = newValue;
    setUserData(updated);
  };
  return (
    <Modal.Body>
      <Form>
        <Form.Group controlId="imageFile">
          <Form.File label="Upload an image file" />
        </Form.Group>
      </Form>
    </Modal.Body>
  );
};

export default Phase1;
