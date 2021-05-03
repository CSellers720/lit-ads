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

  function validatePrice(input: string): void {
    const numbers: RegExp = /[^0-9 | .]/g;
    const notNumbers: Array<string> | null = input.match(numbers);
    const containsInvalid: boolean = notNumbers !== null;
    if (containsInvalid) {
      setValidPrice(false);
      setter('price', 0);
      return;
    }

    const split: Array<string> = input.split('.');
    if (split.length > 2) {
      setValidPrice(false);
      setter('price', 0);
      return;
    }
    if (split.length === 2 && split[1].length > 2) {
      setValidPrice(false);
      setter('price', 0);
      return;
    }

    const price = Number.parseFloat(input);
    if (!isNaN(price) && price >= 0) {
      setValidPrice(true);
      setter('price', price);
      return;
    }
    setValidPrice(false);
    setter('price', 0);
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
              validatePrice(e.target.value)
            )}
            defaultValue={phase2.price}
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
              defaultChecked={arr[1].checked}
              key={arr[0]}
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
            defaultValue={phase2.email}
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
