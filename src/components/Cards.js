
import React from 'react';
import "./Cards.css";

const Cards = ({items,handleClick}) => {
  

  const {title,price,img,quantity} = items;

  return (
    <div className='item'>
      <div className="cart-wrapper">
        <img src={img} />
        <span onClick={()=>handleClick(items)} className="plus material-symbols-outlined" >
          add
        </span>
        <div className="price"><h3>₹{price}</h3></div>
        <div className="desc"><h3>{title}</h3></div>
        <div className="quantity">{quantity}</div>
      </div>
    </div>
  );
}

export default Cards;
