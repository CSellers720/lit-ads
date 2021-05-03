import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import {
  UserData, defaultUserData, Phase3Props,
} from './interfaces';
import styles from '../styles/Listing.module.css';

function Listing({ userData }): JSX.Element {
  const listing = 
    <div className={styles.container}>
      <Card className={styles.card}>
        {userData.phase1.previewUrl && 
          <Card.Img
            variant="top"
            src={userData.phase1.previewUrl}
            className={styles.cardImg}
          />
        }
        <Card.Body>
          <Card.Title>{userData.phase0.title}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  return listing;
};

export default Listing;
