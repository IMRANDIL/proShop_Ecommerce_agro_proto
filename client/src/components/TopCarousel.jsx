import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { topProducts } from "../actions/productActions";

const TopCarousel = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.topProduct);

  useEffect(() => {
    dispatch(topProducts());
  }, [dispatch]);

  return <div>TopCarousel</div>;
};

export default TopCarousel;
