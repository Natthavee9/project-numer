import {NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';


function Menu() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand >NUMERICAL METHOD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menu-auto">
            <NavDropdown title="ROOT OF EQUATION" id="basic-nav-dropdown">
              <NavDropdown.Item href='/graphical'>Graphical Method</NavDropdown.Item>
              <NavDropdown.Item href='/bisection'>Bisection Method</NavDropdown.Item>
              <NavDropdown.Item href='/falseposition'>False Position Method</NavDropdown.Item>
              <NavDropdown.Item >Secant Method</NavDropdown.Item>
              <NavDropdown.Item >Newton Raphson Method</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;