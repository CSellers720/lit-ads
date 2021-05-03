import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { UserData, PhaseProps, Tag, Check } from './interfaces';
import styles from '../styles/Phase2.module.css';
import cloneDeep from 'clone-deep';
import { validate } from 'email-validator';

function Phase2({ userData, userData: { phase2 }, setUserData }: PhaseProps): JSX.Element {
  const [validPrice, setValidPrice] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  
  function setter(stateName: string, newValue: any): void {
    let updated: UserData = cloneDeep(userData);
    updated.phase2[stateName] = newValue;
    setUserData(updated);
  };

  function validatePrice(price: number): void {
    if (!isNaN(price) && price >= 0) {
      setValidPrice(true);
      setter('price', price);
    } else {
      setValidPrice(false);
    }
  };

  function validateEmail(email: string): void {
    const isValid = validate(email);
    setter('email', email);
    if (isValid) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const toggle = (name: string): void => {
    let updated: UserData = cloneDeep(userData);
    let tagObj: object = updated.phase2.tags;
    tagObj[name].checked = !tagObj[name].checked;
    setter('tags', tagObj);
  }; 

  return (
    <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Price (USD)</Form.Label>
          <Form.Control 
            onChange={(e): void => (
              validatePrice(Number.parseFloat(e.target.value)
            ))}
            value={phase2.price}
          />
          {!validPrice &&
            <Alert variant="danger" className={styles.alert}>
              Please enter a valid price
            </Alert>
          }
        </Form.Group>

        <Form.Group>
          <Form.Label>Condition</Form.Label>
          <Form.Control
            type="range"
            value={phase2.condition}
            onChange={(e): void => setter('condition', parseInt(e.target.value))}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tags</Form.Label>
          {Object.entries(phase2.tags).map((arr: Array<any>): JSX.Element => (
            <Form.Check
              type="checkbox"
              label={arr[0]}
              checked={arr[1].checked}
              onClick={(): void => {
                toggle(arr[0]);
              }}
            />
            ))
          }
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email"
            value={phase2.email}
            onChange={(e): void => validateEmail(e.target.value)}
          />
          {!validEmail &&
            <Alert variant="danger" className={styles.alert}>
              Please enter a valid email address
            </Alert>
          }
        </Form.Group>
      </Form>
    </Modal.Body>
  );
};

export default Phase2;
