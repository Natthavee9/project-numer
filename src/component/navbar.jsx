import {NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="my-navbar" style={{ backgroundColor: "#ffb9b9ff" }} >
      <Container>
        <Navbar.Brand >NUMERICAL METHOD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menu-auto">
            <NavDropdown title="ROOT OF EQUATION" id="basic-nav-dropdown">
              <NavDropdown.Item >Graphical Method</NavDropdown.Item>
              <NavDropdown.Item href='/bisection'>Bisection Method</NavDropdown.Item>
              <NavDropdown.Item >False Position Method</NavDropdown.Item>
              <NavDropdown.Item >Secant Method</NavDropdown.Item>
              <NavDropdown.Item >Newton Raphson Method</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;