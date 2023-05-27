
import {Card, Button} from "react-bootstrap"

const Product = ({product}) => {

  const getRentalProductAvailabilityMessage = () => {

    return (product.availableQuantity === 0) ? "Not Available" : "Available in Stock"  
  }



  return (
    <product>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{getRentalProductAvailabilityMessage()}</Card.Subtitle>
        <Card.Text>
          {product.description}         
        </Card.Text>
        <Button variant="primary" disabled={product.availableQuantity === 0}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>

    </product>
  )
}

export {Product}