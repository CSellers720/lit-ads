import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import {
  UserData, defaultUserData, Phase3Props,
} from './interfaces';
import styles from '../styles/Listing.module.css';

function Listing({ userData, setValid }: Phase3Props): JSX.Element {
  // const [valid, setValid] = useState(validateAll(userData));

  function validatePhase(input: any, def: any): boolean {
    for (let k in input) {
      if (input[k] === def[k] && k !== 'condition') {
        return false;
      }
    }
    return true;
  };

  function validateAll(data: UserData): boolean {
    const { phase0, phase1, phase2 } = data;
    const [ def0, def1, def2 ] = [ defaultUserData.phase0, defaultUserData.phase1, defaultUserData.phase2 ];
    const valid0 = validatePhase(phase0, def0);
    const valid1 = validatePhase(phase1, def1);
    const valid2 = validatePhase(phase2, def2);
    return (valid0 && valid1 && valid2);
  };

  useEffect(() => {
    setValid(validateAll(userData));
  });

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
            {!validateAll(userData) &&
              <Alert variant="danger">
                There is missing data!
                Please go back and fill in all fields.
              </Alert>
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  return listing;
};

export default Listing;
