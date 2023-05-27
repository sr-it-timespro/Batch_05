
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"

const Header = () => {

  return (
    <header>

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Rentalz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart">              
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <i className="fa-solid fa-user"></i>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}


export {Header}
