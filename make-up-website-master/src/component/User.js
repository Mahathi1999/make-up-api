import React from "react";
import "../styles/style.css";
export default function User() {
  return (
    <div>
      <div className="user-container">
        <h2>LOGIN</h2>
        <p>Please enter your email and password</p>
        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" id="pwd" name="pwd" placeholder="Password" />
          <button className="btn btn-success">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
