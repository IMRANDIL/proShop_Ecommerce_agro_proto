import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
