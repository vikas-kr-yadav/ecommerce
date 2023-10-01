import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className='title'><h2>E-Commerce</h2> </div>
            <div className='link'>
                <div className='login'><span class="material-symbols-outlined">description</span>Share Logs</div> 
                <div className='cart'><span class="material-symbols-outlined">
shopping_cart
</span>4</div>
            </div>
    
        </div>
    </div>
  )
};

export default Navbar