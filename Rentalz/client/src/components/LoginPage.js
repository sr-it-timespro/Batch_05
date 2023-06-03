
import { useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import {Message} from "./Message"

import { useNavigate } from "react-router-dom";
import {addUserToLocalStorage} from "../utils/UserUtils.js"

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (event) => {

    event.preventDefault();

    try {

      const response = await axios.post("/api/users/login", {
        email, password
      },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })

      const data = response.data;
      console.log(`Response data ${JSON.stringify(data)}`);

      addUserToLocalStorage(data);
      navigate("/products")
    } catch (error) {
      console.log(error);


      setError(error);
    }
  }

  return (

    <>

      <Container>

        <Row>

          {
            error && (
              <Message messageType="error" messageContent={error.message}></Message>
            )
          }

        </Row>

        <Row>

          <Col>

            <h2>Welcome to Rentalz Application</h2>
            <Form onSubmit={handleLogin}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username/Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter username/email"
                  value={email} onChange={(event) => {
                    setEmail(event.target.value)
                  }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  value={password} onChange={(event) => {
                    setPassword(event.target.value)
                  }} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign in
              </Button>
            </Form>

          </Col>
        </Row>

      </Container>

    </>
  )

}

export { LoginPage }