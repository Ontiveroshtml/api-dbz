import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me">
                    <Nav.Link as={Link} to="/personajes">Personajes</Nav.Link>
                    <Nav.Link as={Link} to="/planetas">Planetas</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default navbar
