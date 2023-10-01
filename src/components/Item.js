import React from 'react'
import "./Item.css";

const Item = (props) => {
  
  return (
    <div className='item'>
        <div className="cart-wrapper">
            <img src={props.category} />
            <span className="plus material-symbols-outlined">
add
</span>
            <div className="price"><h3>$0.69</h3></div>
            <div className="desc"><h3>Apple 1 ct</h3></div>
            <div className="quantity">18 oz</div>
        </div>
    </div>
  )
}

export default Item;