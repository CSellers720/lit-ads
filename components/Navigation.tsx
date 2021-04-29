import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Navigation(): JSX.Element {
    return (
        <NavBar
            variant="dark"
            bg="dark"
        >
            <NavBar.Brand href="/">
                LIT Classifieds
            </NavBar.Brand>
            <Nav fill className="my-navbar">
                <Nav.Link href="/sell">
                    For Sale
                </Nav.Link>
                <Nav.Link href="/buy">
                    Looking to Buy
                </Nav.Link>
                <Button>
                    Create a Listing
                </Button>
            </Nav>
        </NavBar>
    );
};

export default Navigation;
