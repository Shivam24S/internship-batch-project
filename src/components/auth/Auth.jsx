import { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, FloatingLabel } from 'react-bootstrap'
import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Auth = () => {
    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    })

    const [isSignup, setIsSignup] = useState(false)

    const handleAuthData = (field, e) => {
        setAuthData((prev) => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isSignup) {

            const result = await createUserWithEmailAndPassword(auth, authData.email, authData.password)


            console.log("result", result)

        } else {
            const result = await signInWithEmailAndPassword(auth, authData.email, authData.password)
console.log("result", result)
        }
    }



    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center align-items-center min-vh-100'>
                    <Card className='shadow p-4' style={{ width: "400px", borderRadius: "15px" }}>

                        <h3 className='text-center mb-3'>
                            {isSignup ? 'Sign Up' : 'Login'}
                        </h3>

                        <Form onSubmit={handleSubmit}>

                            <FloatingLabel label="Email" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="email"
                                    required
                                    value={authData.email}
                                    onChange={(e) => handleAuthData("email", e)}
                                />
                            </FloatingLabel>

                            <FloatingLabel label="Password" className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={authData.password}
                                    onChange={(e) => handleAuthData("password", e)}
                                />
                            </FloatingLabel>

                            <Button type="submit" className="w-100 mb-3">
                                {isSignup ? 'Sign Up' : 'Login'}
                            </Button>

                            <Button
                                variant="danger"
                                className="w-100 mb-3"

                            >
                                Continue with Google
                            </Button>

                            <div className="text-center">
                                <small>
                                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                                    <span
                                        style={{ cursor: 'pointer', marginLeft: '5px', color: 'blue' }}
                                        onClick={() => setIsSignup(!isSignup)}
                                    >
                                        {isSignup ? 'Login' : 'Sign Up'}
                                    </span>
                                </small>
                            </div>

                        </Form>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth
