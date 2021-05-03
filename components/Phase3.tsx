import Modal from 'react-bootstrap/Modal';
import { Phase3Props } from './interfaces';
import Listing from './Listing';

function Phase3({ userData, setValid }: Phase3Props): JSX.Element {
  return (
    <Listing userData={userData} setValid={setValid} />
  );
};

export default Phase3;
