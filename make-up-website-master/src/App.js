import React from "react";
import Navbar from "./component/header/Navbar";
import Nilabro from "./component/Nilabro";
import User from "./component/User";
import Cart from "./component/Cart";
import ProductList from "./component/ProductList";
import "./styles/style.css";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductInfo from "./component/ProductInfo";

export default function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/make-up-website" element={<Nilabro />} />
          <Route exact path="make-up-website/account" element={<User />} />
          <Route exact path="make-up-website/cart" element={<Cart />} />

          <Route
            exact
            path="make-up-website/product_list"
            element={<ProductList />}
          />
          <Route
            exact
            path="/make-up-website/product_list/product-info"
            element={<ProductInfo />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
