
import { getRentalCartItems } from "../utils/CartUtils.js"

import { Table } from "react-bootstrap"
import { Message } from "./Message";

const RentalCartItems = () => {

  const rentalCartItems = getRentalCartItems();

  return (
    <>

      <h1>My Rental Cart</h1>

      {
        (rentalCartItems && rentalCartItems.length > 0) ? (

          <Table striped="columns">
          <thead>
            <tr>
              <th>Product Title</th>
              <th>Booking Dates</th>
              <th>Total No of Days</th>
              <th>Quantity</th>
              <th>Refundable Deposit</th>
              <th>Delivery / Pickup Charges</th>
              <th>Rental Amount</th>
            </tr>
          </thead>
  
          <tbody>
  
            {
              rentalCartItems.map((rentalCartItem) => {
  
                return (
                  <tr>
                    <td>{rentalCartItem.product.name}</td>
                    <td>TODO</td>
                    <td>{rentalCartItem.totalNoOfDays}</td>
                    <td>{rentalCartItem.quantity}</td>
                    <td>{rentalCartItem.product.refundableDeposit}</td>
                    <td>{rentalCartItem.product.deliveryPickupCharges}</td>
                    <td>TODO</td>
                  </tr>
                )
  
              })
            }
          </tbody>
        </Table>
        )  : (

          <Message messageType="info" messageContent="Rental Cart is empty"></Message>
        )
      }
    </>
  )

}

export {RentalCartItems}
