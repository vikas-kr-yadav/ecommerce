import React,{useState} from 'react';
import { useEffect } from 'react';
import "../components/Cart.css";


const Cart = ({cart, setCart,handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.quantity * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item,1)}> + </button>
                        <button>{item.quantity}</button>
                        <button onClick={()=>handleChange(item,-1)}> - </button>
                    </div>
                    <div>
                        <span>₹{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>₹{price}</span>
        </div>
    </article>
  )
}

export default Cart;