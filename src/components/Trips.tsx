import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trip } from "./interface";
import { Card, Button, Badge, Row, Col, Nav } from "react-bootstrap";
export default function Trips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/trips");
      const data = await res.json();
      return data;
    };
    getData().then((trips) => setTrips(trips));
  }, []);

  const deleteTrip = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/trips/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "test-token",
      },
    });
    if (res.ok) setTrips((prev) => prev.filter((trip) => trip.id !== id));
  };

  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey={"/trips"}>
        <Nav.Item>
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={"/new-trip"}>
            New Trip
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={"/trips"}>
            All Trips
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className="d-flex  justify-content-around">
        {trips.map(({ id, name, destination, startDate, endDate, image }) => {
          return (
            <Col xs={4} className="mb-5 ">
              <Card
                className="h-80 shadow-sm bg-white rounded"
                key={id}
                id={id}
              >
                <Link to={`/trip-details/${id}`} key={id}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body className=" ">
                    <div className="d-flex flex-wrap mb-2 justify-content-between">
                      <Card.Title className=" mb-0 font-weight-bold">
                        {name}
                      </Card.Title>
                      <Badge pill className="mb-1">
                        {destination}
                      </Badge>
                    </div>
                    <Card.Text className="text-secondary">
                      {`Start date: ${startDate} End date: ${endDate}`}
                    </Card.Text>
                    <Button
                      onClick={(e) => deleteTrip(e, id)}
                      className="mt-atuo font-weight-bold"
                      variant="outline-danger"
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
