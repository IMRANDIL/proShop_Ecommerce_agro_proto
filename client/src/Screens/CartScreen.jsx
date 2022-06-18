import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart } from "../actions/cartActions";
import Message from "../components/Message";

const CartScreen = () => {
  const [searchParams] = useSearchParams();
  const navigation = useNavigate();
  const { id } = useParams();
  const qty = searchParams.get("qty");
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(addToCart(id, qty));
  });

  return <div>CartScreen</div>;
};

export default CartScreen;
