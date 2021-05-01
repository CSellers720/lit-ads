import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface ModalProps {
    showModal: boolean;
    modalPhase: number;
    setShowModal: (value: boolean) => void;
    setModalPhase: (value: number) => void;
}

function ListingModal({ 
    showModal, modalPhase, setShowModal, setModalPhase
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
            <Modal.Header closeButton>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Modal Phase = {modalPhase}
            </Modal.Body>
            <Modal.Footer>
              <Button>
                {'<'} Back
              </Button>
              <Button>
                Forward {'>'}
              </Button>
              <Button>
                Cancel
              </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ListingModal;
