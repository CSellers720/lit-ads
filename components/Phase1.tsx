import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import { UserData, PhaseProps } from './interfaces';
import cloneDeep from 'clone-deep';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import styles from '../styles/Phase1.module.css';
import 'react-datepicker/dist/react-datepicker.css';

function Phase1({ 
  userData, userData: { phase1 }, setUserData 
}: PhaseProps): JSX.Element {
  const [dateMessage, setDateMessage] = useState<boolean>(false);
  const { date, previewUrl } = phase1;

  function setter(stateName: string, newValue: any): void {
    let updated: UserData = cloneDeep(userData);
    updated.phase1[stateName] = newValue;
    setUserData(updated);
  };

  // setter() was causing issues here so I made a custom setter
  function handleFile(file: object): void {
    let updated: UserData = cloneDeep(userData);
    updated.phase1.image = file;
    updated.phase1.previewUrl = URL.createObjectURL(file);
    setUserData(updated);
  };

  function validateDate(date: Date): void {
    if (Date.now() < date.getTime()) {
      setter('date', date);
      setDateMessage(false);
    } else {
      setDateMessage(true);
    }
  };

  return (
    <Modal.Body>
      <Form>
        <Form.Group onChange={(e): void => handleFile(e.target.files[0])}>
          <Form.File label="Upload an image file" feedbackTooltip />
        </Form.Group>
        <div className={styles.imageContainer}>
          <Image
            src={previewUrl}
            rounded
            className={styles.imagePreview}
          />
        </div>
        <Form.Group onChange={(e): void => setter('description', e.target.value) }>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Label>Pick an end date for this listing</Form.Label>
        <br />
        <DatePicker
          selected={date}
          onChange={(date: Date): void => validateDate(date)}
        />

        {dateMessage &&
          <Alert variant="danger" className={styles.alert}>
            Date must not be before the current date. Please try again.
          </Alert>
        }
      </Form>
    </Modal.Body>
  );
};

export default Phase1;
