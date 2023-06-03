import { Container, Row, Col } from "react-bootstrap"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { GoBack } from "./GoBack"
import { RentalCartItems } from "./RentalCartItems"

const CartPage = () => {

  return (

    <div>

      <Header></Header>

      <Container>

          <Row>
            <Col md={2}>
              <GoBack></GoBack>
            </Col>
          </Row>

          <Row>
            <Col>
              <RentalCartItems></RentalCartItems>
            </Col>
          </Row>
      </Container>


      <Footer></Footer>
    </div>
  )
}

export {CartPage}