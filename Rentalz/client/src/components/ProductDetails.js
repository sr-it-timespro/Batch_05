

import {useState} from "react";

import { Row, Col, ListGroup, ListGroupItem, Image, Form, Button } from "react-bootstrap"
import { Footer } from "./Footer"
import { Header } from "./Header"

import {useParams} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import {getRentalProductAvailabilityMessage,
  getBookingDatesDiffInDays
} from "../utils/utils.js"

const DateRangePicker = require("rsuite/DateRangePicker").default


const ProductDetails = () => {

  const {productId} = useParams()

  const [product, setProduct] = useState({});

  const [bookingDates, setBookingDates] = useState([Date.now(), Date.now()]);

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


  const constructQuantityArray = () => {

    const quantityArray = [];

    for (let value = 1; value <= product.availableQuantity; value ++){

      quantityArray.push(value);
    }

    return quantityArray;
  }

  return (
    <div>

    <Header></Header>

      <Row>
        <Col>
            <ListGroup>
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
            </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col>
            <ListGroup>
              <ListGroupItem>
                {product.description}
              </ListGroupItem>
            </ListGroup>
        </Col>
      </Row>


      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>

        <Col md={8}>

            <Row>

                <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col>Status</Col>
                        <Col>{getRentalProductAvailabilityMessage(product)}</Col>
                      </Row>
                    </ListGroupItem>

                    <ListGroupItem>
                      <Row>
                        <Col>Booking Dates</Col>
                        <Col>

                        <DateRangePicker value={bookingDates} onChange={(data) => {

                            const diffInDays = getBookingDatesDiffInDays(data);
                            console.log('Diff in days ' + diffInDays);

                            setBookingDates(data);
                        }}>

                        </DateRangePicker>
                        </Col>
                      </Row>
                    </ListGroupItem>

                    <ListGroupItem>
                      <Row>
                        <Col>Total No of Days</Col>
                        <Col>{getBookingDatesDiffInDays(bookingDates)}</Col>
                      </Row>
                    </ListGroupItem>

                    <ListGroupItem>
                      <Row>
                        <Col>Quantity</Col>
                        <Col>
                          <Form.Control 
                            as='select'
                            value='1'
                          >

                          {

                            constructQuantityArray().map( (quantityValue) => {

                              return (
                                <option key={quantityValue} value={quantityValue}>
                                  {quantityValue}</option>
                              )
                            })
                          }

                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroupItem>
                </ListGroup>


            </Row>

            <Row>
                  <ListGroup>
                      
                      <ListGroupItem>
                        <Row>
                          <Col>
                              Rental Prices
                          </Col>
                          <Col>

      {
        (product.rentalPriceConfigurations != null) && (

          <ListGroup horizontal>
            {
              product.rentalPriceConfigurations.map( (rentalPriceConfiguration) => {

                let configurationName = rentalPriceConfiguration.configurationName;

                let display = configurationName === "DAILY" ? "/ Day" : (
                  configurationName === "WEEKLY" ? " / Week" : " / Monthly"
                )

                let rentalValue = rentalPriceConfiguration.rentalValue;

                // Rs 100 / Day 
                // Rs 2000 / Week
                let display2 = "Rs " + rentalValue + display;

                return (
                    <ListGroupItem>{display2}</ListGroupItem>
                )
                
              })
            }
        </ListGroup>
        )
        }
                          </Col>
                        </Row>
                      </ListGroupItem>

                      <ListGroupItem>
                        <Row>
                          <Col>Refundable Deposit</Col>
                          <Col>{product.refundableDeposit}</Col>
                        </Row>
                      </ListGroupItem>

                      <ListGroupItem>
                        <Row>
                          <Col>Delivery/Pickup Charges</Col>
                          <Col>{product.deliveryPickupCharges}</Col>
                        </Row>
                      </ListGroupItem>

                      <ListGroupItem>
                        <Button className="btn-block" type="button" disabled={product.availableQuantity === 0}>
                          Add to Cart
                        </Button>
                      </ListGroupItem>
                  </ListGroup>
            </Row>

        </Col>
      </Row>

    <Footer></Footer>
    </div>
  )
}

export {ProductDetails}