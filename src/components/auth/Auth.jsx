import React, { useState } from 'react'

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'



const Auth = () => {

    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    })


    const handleAuthData = (field, e) => {

        setAuthData((authData) => {
            return {
                ...authData,
                [field]: e.target.value
            }
        })


    }

    console.log("email",authData.email)
    console.log("password",authData.password)


    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center align-items-center min-vh-100 ' >
                    <Card className='shadow' style={{ width: "400px" }} >
                        <Form className='p-2'>
                            <Form.Group as={Col} className="d-flex justify-content-center align-items-center flex-column" controlId="validationCustom05">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="email" required value={authData.email} onChange={(e) => handleAuthData("email", e)} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} className="d-flex justify-content-center align-items-center flex-column mt-3" controlId="validationCustom05">
                                <Form.Label>password</Form.Label>
                                <Form.Control type="email" placeholder="Password" required value={authData.password} onChange={(e) => handleAuthData("password", e)} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a password email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>

                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default Auth