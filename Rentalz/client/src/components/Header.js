
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

import { hasUserLoggedIn, getUserFromLocalStorage, clearAllItems } from "../utils/UserUtils.js"

const Header = () => {

  // ADMIN_MODE, REGULAR_USER_MODE, NO_USER_MODE

  const user = getUserFromLocalStorage();

  const userLoggedIn = hasUserLoggedIn();
  const userMode = userLoggedIn ? "REGULAR_USER_MODE" : "NO_USER_MODE";

  const handleLogout = () => {

    clearAllItems()
    window.document.location.href = "/login";
  }

  return (
    <header>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Rentalz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              {
                (userMode == "NO_USER_MODE") && (

                  <>
                    <Nav.Link as={Link} to="/login">
                      <i className="fa-solid fa-user"></i>
                      Login
                    </Nav.Link>
                  </>

                )
              }

              {

                (userMode == "REGULAR_USER_MODE") && (

                  <>

                    <Nav.Link as={Link} to="/cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                      Cart
                    </Nav.Link>


                    <NavDropdown title={user.name} id="nav-dropdown">

                      <NavDropdown.Item eventKey="4.1">My Orders</NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.2" onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>


                  </>
                )
              }



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  )
}


export { Header }
