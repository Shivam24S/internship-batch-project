import { Container, Row, Col, Image, Card, Button, Badge, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { trips } from "../../data/tripsData";

const TripDetail = () => {
  const { id } = useParams();

  const trip = trips.find((t) => t.id === Number(id));


  console.log("trip data", trip)

  return (
    <>

      <Container>
        <Row className="mt-3">
          <Col >
            <Image src={trip.image} className="rounded-5 shadow" style={{ height: "450px", width: "100%", objectFit: "cover" }} ></Image>
          </Col>
        </Row>

        <Row className="mt-3" >
          <Col lg={8} >
            <h1>{trip.name}</h1>
            <h5 className="text-secondary" >{trip.destination}</h5>
            <div className="d-flex gap-1">
              <Badge bg="primary" >{trip.duration}</Badge>
              <Badge bg="secondary" >{trip.rating}</Badge>
              <Badge bg="info" >{trip.difficulty}</Badge>
              <Badge bg="success" > ₹{trip.price}</Badge>
            </div>

            <Row className="mt-3" >
              <Col>
                <Card className="p-3 shadow" >
                  <h5>Overview</h5>
                  <p>{trip.overview}</p>
                </Card>

              </Col>
            </Row>

            <Row className="mt-3" >
              <Col>
                <Card className="p-3" >
                  <h5>Trip Highlights</h5>
                  <ListGroup className="mt-2" variant="flush" >
                    {trip.highlights.map((highLight) => (
                      <ListGroup.Item> ✅{highLight} </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>


              </Col>
            </Row>


          </Col>

          <Col lg={4}></Col>

        </Row>
      </Container>


    </>
  );
};

export default TripDetail;
