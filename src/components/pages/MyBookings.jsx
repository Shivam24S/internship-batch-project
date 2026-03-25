import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/AuthContext'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




const MyBookings = () => {



  const [bookings, setBookings] = useState([])

  const { user } = useContext(authContext)


  const navigate = useNavigate()


  useEffect(() => {
    try {

      if (!user) {
        return
      }

      const fetchBookings = async () => {

        const q = query(collection(db, "bookings"), where("userId", "==", user.uid), orderBy("createdAt", "desc"))

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setBookings(data);

      }

      fetchBookings()

    } catch (error) {

    }
  }, [user])





  return (
    <>

      {bookings.length === 0 ? (
        <>

          <Container>
            <Row>
              <Col className='justify-content-center align-items-center mt-5'>

                <Card className='shadow'>

                  <Card.Body>
                    <Card.Title>No trip data found</Card.Title>

                    <Button variant="primary" onclick={() => navigate("/trips")} >Want to book any trip ??</Button>
                  </Card.Body>
                </Card>

              </Col>
            </Row>
          </Container>

        </>
      ) :
        <Container>
          <Row>
            {
              bookings.map((b) => (
                <Card className='mt-5'>

                  <Card.Body>
                    <Card.Title>Trip Name - {b.tripName}</Card.Title>
                    <Card.Text>
                      <p>Price-{b.tripPrice}</p>
                      <p>Date-{b.tripDate}</p>
                      <p>Total Person- {b.totalPerson}</p>
                      <p>Special Request - {b.specialRequest}</p>
                      <p>Grand Total - {b.grandTotal}</p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              ))
            }

          </Row>
        </Container>



      }

    </>
  )
}

export default MyBookings