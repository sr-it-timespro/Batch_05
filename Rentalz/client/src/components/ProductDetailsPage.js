

import {useState} from "react";

import { Container, Row, Col, ListGroup, ListGroupItem, Image, Form, Button } from "react-bootstrap"
import { Footer } from "./Footer"
import { Header } from "./Header"

import {useParams} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import {getRentalProductAvailabilityMessage,
  getBookingDatesDiffInDays
} from "../utils/utils.js"

import {ProductDetails} from "./ProductDetails";
import {GoBack} from "./GoBack"

const DateRangePicker = require("rsuite/DateRangePicker").default


const ProductDetailsPage = () => {

  const {productId} = useParams()

  const [product, setProduct] = useState({});


  useEffect( () => {

    const fetchRentalProductById = async () => {

      let url = `/api/rentalproducts/${productId}`;
      console.log(`URL is ${url}`);

      const response = await axios.get(url);
      const rentalProduct = response.data;
  
      console.log(rentalProduct);  
  
      setProduct(rentalProduct);
    }
    fetchRentalProductById();

  }, [])

  return (
    <div>

    <Header></Header>

    <Container>

      <Row>
        <Col md={2}>
          <GoBack></GoBack>
        </Col>
      </Row>

    </Container>

    <ProductDetails product={product}></ProductDetails>

    <Footer></Footer>
    </div>
  )
}

export {ProductDetailsPage}