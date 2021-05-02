import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Phase0 from './Phase0';
import {
  ModalBodyProps, ListingType, ListingCategory, UserData,
  Radio,
} from './interfaces';
import cloneDeep from 'clone-deep';

function ModalBody({
  modalPhase, userData: { phase0, phase1, phase2 }, userData, setUserData,
}: ModalBodyProps): JSX.Element {
  const radios: Array<Radio> = [
    { 
      label: 'Looking to Buy', 
      checked: phase0.listing === ListingType.Buy,
      listingType: ListingType.Buy,
    },
    {
      label: 'Looking to Sell',
      checked: phase0.listing === ListingType.Sell,
      listingType: ListingType.Sell,
    },
  ];
  function setType(listingType: ListingType): void {
    let updated: UserData = cloneDeep(userData);
    updated.phase0.listing = listingType;
    setUserData(updated);
  };
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
        <Modal.Body>
          
        </Modal.Body>
      );
    }
    case 2: {
      return (
        <Modal.Body>
          
        </Modal.Body>
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
