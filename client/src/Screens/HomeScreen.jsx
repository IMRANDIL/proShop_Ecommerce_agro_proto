import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import { Helmet } from "react-helmet";
import Paginate from "../components/Paginate";
import TopCarousel from "../components/TopCarousel";

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();

  const dispatch = useDispatch();
  const { loading, products, error, page, pages } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber || 1));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Helmet>
        <title>Welcome To AgroShop</title>
        <meta
          name="description"
          content="We sell best agro organic products straight from the farm."
        />

        <meta
          name="keywords"
          content="agro,farm,organic,food,best food,agro products"
        />
      </Helmet>
      {!keyword ? (
        <TopCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
