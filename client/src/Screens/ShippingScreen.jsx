import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const { shippingAddress } = useSelector((state) => state.cart);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigation("/payment");
  };

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <CheckoutSteps step1 step2 />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            required
            value={shippingAddress.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            required
            value={shippingAddress.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter PostalCode"
            required
            value={shippingAddress.postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            required
            value={shippingAddress.country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          style={{ borderRadius: "5px" }}
          className="my-3"
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
