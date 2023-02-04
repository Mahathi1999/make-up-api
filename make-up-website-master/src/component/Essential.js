import React from "react";
import "../styles/style.css";
//import img1 from "../img/img2.jpg";
export default function Essential() {
  return (
    <div>
      <div className="essential  ">
        <div className="essen-text">
          <h4>discover new best make up products with us</h4>
        </div>
        <div className="essen-image">
          <img
            src="https://images.unsplash.com/photo-1620815166537-693bf38d9fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div className="quote">
          <p>
            The most beautiful makeup of a woman passion.But cosmetics are
            easier to buy.
          </p>
          <small>Yves Saint Laurent</small>
        </div>
      </div>
    </div>
  );
}
