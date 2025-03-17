import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Subscribe = () => {
  const location = useLocation();
  const car = location.state?.car;
  
  const [days, setDays] = useState(1); // Default to 1 day

  // Calculate total price
  const costPerDay = parseInt(car?.cost || 0);
  const totalPrice = costPerDay * days;

  // Handlers for + and - buttons
  const increaseDays = () => setDays(days + 1);
  const decreaseDays = () => setDays(days > 1 ? days - 1 : 1);

  return (
    <div className="subscribe">
      <Header />
      <Container className="d-lg-flex my-5">
        <div className="box-1 bg-light p-4">
          <p className="fw-bold">{car?.title || "Car Subscription"}</p>
          <p className="text-muted">${costPerDay} per day</p>

          <div className="mb-3">
            <img
              className="d-block w-100"
              src={car?.img || "https://via.placeholder.com/500"}
              alt="Selected Car"
            />
          </div>

          <p className="text-muted">Duration: {car?.duration || "N/A"}</p>
        </div>

        <div className="box-2 p-4 bg-light">
          <h5 className="fw-bold">Payment Details</h5>
          <p className="text-muted">Complete your purchase by providing your payment details</p>
          
          {/* Subscribe for X days section */}
          <Form.Group className="mb-3">
            <Form.Label>Subscribe for</Form.Label>
            <div className="d-flex align-items-center">
              <Button variant="dark" size="sm" onClick={decreaseDays}>-</Button>
              <Form.Control 
                type="number" 
                value={days} 
                readOnly 
                className="text-center mx-2" 
                style={{ width: "60px" }} 
              />
              <Button variant="dark" size="sm" onClick={increaseDays}>+</Button>
              <span className="ms-2">days</span>
            </div>
          </Form.Group>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Card details</Form.Label>
              <Form.Control type="text" placeholder="Card Number" />
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Control type="text" placeholder="MM/YY" />
              </Col>
              <Col>
                <Form.Control type="password" maxLength={3} placeholder="CVV" />
              </Col>
            </Row>
            
            {/* Pay Button with Dynamic Price */}
            <Button variant="primary" className="w-100 mt-3">
              Pay ${totalPrice.toFixed(2)}
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Subscribe;
