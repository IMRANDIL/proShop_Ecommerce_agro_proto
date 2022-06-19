import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";

const ProfileScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      navigation("/login");
    } else {
      if (!user.name) {
        dispatch(userDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigation, user, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password did not match!");
    } else {
      //update profile one here..
      setMessage(null);
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h3>Update Profile</h3>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            style={{ borderRadius: "5px" }}
            className="my-3"
          >
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h3>order items</h3>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
