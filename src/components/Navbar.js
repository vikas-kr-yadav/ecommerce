import React from "react";
import "./Navbar.css";

function Navbar({ size, setShow }) {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="title" onClick={() => setShow(true)}>
          <h2>E-Commerce</h2>{" "}
        </div>
        <div className="link">
          <div className="login">
            <span class="material-symbols-outlined">account_circle</span>Login
          </div>
          <div className="cart" onClick={() => setShow(false)}>
            <span class="material-symbols-outlined">shopping_cart</span>
            <span>{size}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
