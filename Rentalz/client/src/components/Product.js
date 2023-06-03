
import {Card, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import {getRentalProductAvailabilityMessage} from "../utils/utils.js";

const Product = ({product}) => {

  return (
    <div>

    <Card style={{ width: '18rem' }}>

      <Card.Link as={Link} to={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Card.Link>
      
      <Card.Body>

        <Card.Link as={Link} to={`/products/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Card.Link>

        <Card.Subtitle className="mb-2 text-muted">
          {getRentalProductAvailabilityMessage(product)}</Card.Subtitle>
        <Card.Text>
          {product.description}         
        </Card.Text>
        <Button variant="primary" disabled={product.availableQuantity === 0}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export {Product}