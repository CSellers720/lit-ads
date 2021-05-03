import { useEffect } from 'react';
import { Phase3Props, UserData, defaultUserData } from './interfaces';
import Alert from 'react-bootstrap/Alert';
import Listing from './Listing';
import styles from '../styles/Phase3.module.css';

function Phase3({ userData, setValid, valid }: Phase3Props): JSX.Element {
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

  return (
    <div className={styles.container}>
      {!valid &&
        <Alert variant="danger">
          There is missing data!
          Please go back and fill in all fields.
        </Alert>
      }
      {valid &&
        <div>
          <Alert variant="primary" className={styles.alert}>Listing Preview</Alert>
          <Listing userData={userData} />
        </div>
      }
    </div>
  );
};

export default Phase3;
