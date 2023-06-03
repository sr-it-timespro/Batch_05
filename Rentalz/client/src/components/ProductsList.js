
import { useEffect, useState } from "react"
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { Container, Row, Col } from "react-bootstrap";
import { Product } from "./Product"

const ProductsList = ({ products }) => {


  return (

    <>

      <h1>Products Display</h1>

      <Container>

        <Row>

          {
            products.map((localProduct) => {

              return (
                <Col key={localProduct._id}>
                  <Product product={localProduct}></Product>
                </Col>
              )
            })
          }


        </Row>

      </Container>
    </>

  )
}

export { ProductsList }