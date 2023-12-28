import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Home.css";
import Container from "./Container";
import Cart from "./Cart";
const Home = () => {
  const name = [
    "Produce",
    "Prepared Food",
    "Conned foods & Soups",
    "Bakery",
    "Dairy & Eggs",
    "Frozen",
    "Meat & Seafood",
  ];

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (items) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (items.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, items]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].quantity += d;

    if (tempArr[ind].quantity === 0) tempArr[ind].quantity = 1;
    setCart([...tempArr]);
  };

  return (
    <div className="home">
      <Navbar size={cart.length} setShow={setShow} />

      {show ? (
        <div className="home-container">
          <div className="container_sidebar">
            <Sidebar />
          </div>
          <div className="container_item">
            <Container handleClick={handleClick} name={name[0]} />
            <Container handleClick={handleClick} name={name[1]} />
            <Container handleClick={handleClick} name={name[2]} />
            <Container handleClick={handleClick} name={name[3]} />
            <Container handleClick={handleClick} name={name[4]} />
            <Container handleClick={handleClick} name={name[5]} />
            <Container handleClick={handleClick} name={name[6]} />
            <Container handleClick={handleClick} name={name[0]} />
          </div>
        </div>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
    </div>
  );
};

export default Home;