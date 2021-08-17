/* eslint-disable jsx-a11y/anchor-is-valid */

//Import styles Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Import styles
import './NavBar.css'

//Component
const NavBar = (props) => {

    const {brandName} = props

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand className="posBrand" href="#">{brandName}</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="posNav">
                    <Nav className="me-auto">
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Gabinetes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Moterboards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Procesadores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Memorias RAM</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Almacenamiento</NavDropdown.Item>
                            <NavDropdown.Item href="#acstion/3.6">Placas de video</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">Fuentes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">Refrigeración PC</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;