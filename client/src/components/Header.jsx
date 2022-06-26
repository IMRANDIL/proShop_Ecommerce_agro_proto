import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout, userDetails } from "../actions/userActions";
import { orderMyList } from "../actions/orderActions";
import { USER_LOGIN_RESET } from "../constants/userConstants";
import { ORDER_LIST_MY_RESET } from "../constants/orderConstants";
import { PRODUCT_REVIEW_RESET } from "../constants/productConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleUserDetails = () => {
    dispatch(userDetails("profile"));
    dispatch(orderMyList());
  };

  const handleReset = () => {
    dispatch({ type: USER_LOGIN_RESET });
  };

  const handleReview = () => {
    dispatch({ type: PRODUCT_REVIEW_RESET });
  };
  const logoutHandler = () => {
    dispatch(userLogout());
    dispatch({ type: ORDER_LIST_MY_RESET });
    navigation("/login");
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand onClick={handleReview}>The Agro</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i
                    className="fas fa-shopping-cart"
                    style={{ paddingRight: "5px" }}
                  ></i>{" "}
                  Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item onClick={handleUserDetails}>
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link onClick={handleReset}>
                    <i
                      className="fas fa-user"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
