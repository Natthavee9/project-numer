import {NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
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
                        {/*ROOT OF EQUATION*/}
            <NavDropdown title="Root of Equation" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/graphical'>Graphical Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/bisection'>Bisection Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/falseposition'>False Position Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/onepoint'>One Point Iteration Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/secant'>Secant Method</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/newtonraphson'>Newton Raphson Method</NavDropdown.Item>
            </NavDropdown>
                        {/*Linear Algebra*/}
            <NavDropdown title="Linear Algebra" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/cramer'>Cramer's Rule</NavDropdown.Item>
              
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;