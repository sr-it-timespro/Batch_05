import { useState } from "react";

import { Row, Col, ListGroup, ListGroupItem, Image, Form, Button, Container } from "react-bootstrap"
import { Footer } from "./Footer"
import { Header } from "./Header"

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import {
  getRentalProductAvailabilityMessage,
  getBookingDatesDiffInDays
} from "../utils/utils.js"

import {getRentalCartItemDefaultValues, addItem} from "../utils/CartUtils.js"
import { Message } from "./Message";

import { useNavigate } from "react-router-dom";

const DateRangePicker = require("rsuite/DateRangePicker").default

const ProductDetails = ({ product }) => {

  const rentalCartItemDefaultValues = getRentalCartItemDefaultValues();

  const [bookingDates, setBookingDates] = useState([
    rentalCartItemDefaultValues.bookingDates.startDate,
    rentalCartItemDefaultValues.bookingDates.endDate
  ]);

  const [totalNoOfDays, setTotalNoOfDays] = useState(
    rentalCartItemDefaultValues.totalNoOfDays
  );

  const [quantity, setQuantity] = useState(
    rentalCartItemDefaultValues.quantity
  );

  const [bookingDatesUserSelection, setBookingDatesUserSelection] = useState(false);
  const [validationError, setValidationError] = useState(null);


  const navigate = useNavigate();

  const handleAddToCart = () => {

    if (!bookingDatesUserSelection && totalNoOfDays === 0){
      setValidationError(true);
    }else{

      // Add To Storage
      let bookingDates2 = {
        startDate : bookingDates[0],
        endDate : bookingDates[1]
      }

      // addRentalCartItemToStorage()

      addItem(product, bookingDates2, totalNoOfDays, quantity);
      navigate("/cart");
    }
  }

  const constructQuantityArray = () => {

    const quantityArray = [];

    for (let value = 1; value <= product.availableQuantity; value ++){

      quantityArray.push(value);
    }

    return quantityArray;
  }

  return (

    <>

      <Container>

        <Row>
          <Col>
            {
              validationError && (
                <Message messageType="error" messageContent="Select Booking Dates"></Message>
              )
            }
          </Col>
        </Row>

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
                        setTotalNoOfDays(diffInDays);

                        setBookingDatesUserSelection(true);
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
                        value={quantity}
                        onChange={(event) => {
                          setQuantity(event.target.value)
                        }}
                      >

                        {

                          constructQuantityArray().map((quantityValue) => {

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
                              product.rentalPriceConfigurations.map((rentalPriceConfiguration) => {

                                let configurationName = rentalPriceConfiguration.configurationName;

                                let display = configurationName === "DAILY" ? "/ Day" : (
                                  configurationName === "WEEKLY" ? " / Week" : " / Monthly"
                                )

                                let rentalValue = rentalPriceConfiguration.rentalValue;

                                // Rs 100 / Day 
                                // Rs 2000 / Week
                                let display2 = "Rs " + rentalValue + display;

                                return (
                                  <ListGroupItem key={configurationName}>{display2}</ListGroupItem>
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
                  <Button onClick={handleAddToCart} className="btn-block" type="button" disabled={product.availableQuantity === 0}>
                    Add to Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Row>

          </Col>
        </Row>

      </Container>


    </>
  )
}

export { ProductDetails }