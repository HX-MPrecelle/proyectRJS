/* eslint-disable jsx-a11y/anchor-is-valid */
//import Routing
import { Link } from 'react-router-dom';

//Import Components
import CartWidget from './CartWidget';

//Import styles Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Import styles
import './NavBar.css';

//Component
const NavBar = (props) => {

    const {brandName} = props

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="posBrand"><Link to="/" className="decoBrand">{brandName}</Link></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="posNav">
                    <Nav className="me-auto">
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/category/gabinetes" className="decoNav">Gabinetes</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/motherboards" className="decoNav">Motherboards</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/procesadores" className="decoNav">Procesadores</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/memorias-ram" className="decoNav">Memorias RAM</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/almacenamiento" className="decoNav">Almacenamiento</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/placas-de-video" className="decoNav">Placas de video</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/fuentes" className="decoNav">Fuentes</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/refrigeracion-pc" className="decoNav">Refrigeración PC</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
