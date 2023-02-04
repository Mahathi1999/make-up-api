import React, { Component } from "react";
import Header from "./header/Header";
import Brands from "./Brands";
import OurProduct from "./OurProduct";
import Essential from "./Essential";
export default class Nilabro extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Brands</h3>
        <Brands />
        <h3>Our products</h3>
        <OurProduct />
        <Essential />
      </div>
    );
  }
}
