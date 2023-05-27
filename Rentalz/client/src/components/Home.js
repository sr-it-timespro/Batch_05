
import {useEffect, useState} from "react"
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { Container, Row, Col } from "react-bootstrap";
import {Product} from "./Product"

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect( () => {

    const fetchRentalProducts = async () => {
      const response = await axios.get("/api/rentalproducts");
      const products = response.data;
  
      console.log(products);  
    
      setProducts(products);
    }
    fetchRentalProducts();

  }, [])

  return (
    <>

      <Header></Header>
        
        <div style={{"minHeight" : "85vh"}}>

        <h1>Products Display</h1>
        
        <Container>

          <Row>

            {
              products.map( (localProduct) => {

                return (
                  <Col>
                      <Product product={localProduct}></Product>
                  </Col>
                )
              })
            }

          
          </Row>

        </Container>


        </div>


      <Footer></Footer>
    </>
  )

}

export {Home}