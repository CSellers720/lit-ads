import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalProps from './interfaces';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

function ListingModal({ 
    showModal, modalPhase, userData, 
    setShowModal, setModalPhase, setUserData,
}: ModalProps): JSX.Element {
    function toggle(): void {
        setShowModal(!showModal);
    };
    function incrementPhase(): void {
      if (modalPhase < 3) {
        setModalPhase(modalPhase + 1);
      }
    };
    function decrementPhase(): void {
      if (modalPhase > 0) {
        setModalPhase(modalPhase - 1);
      }
    };
    return (
        <Modal show={showModal} onHide={toggle}>
            <ModalHeader modalPhase={modalPhase} />
            <ModalBody 
              modalPhase={modalPhase}
              userData={userData}
              setUserData={setUserData}
            />
            <ModalFooter
              modalPhase={modalPhase}
              incrementPhase={incrementPhase}
              decrementPhase={decrementPhase}
              toggle={toggle}
            />
        </Modal>
    );
};

export default ListingModal;
