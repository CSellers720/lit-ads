import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

interface NavigationProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

function Navigation({ showModal, setShowModal }: NavigationProps): JSX.Element {
    function toggle(): void {
      setShowModal(!showModal);
    };
    return (
        <NavBar
            variant="dark"
            bg="dark"
        >
            <NavBar.Brand>
                LIT Classifieds
            </NavBar.Brand>
            <Nav fill className="my-navbar">
                <Button onClick={toggle}>
                    Create a Listing
                </Button>
                {process.env.MONGO_URI}
            </Nav>
        </NavBar>
    );
};

export default Navigation;
