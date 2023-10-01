import React from 'react';
import "./Sidebar.css";
import {HashLink as Link} from "react-router-hash-link"
import { BrowserRouter } from 'react-router-dom';

const Sidebar = () => {
  return (
    <BrowserRouter basename='ecommerce'>
    <div className="sidebar">
        <div className='menu'>
            
                <ul>
                    <li><Link to="#Produce" className="no-underline">Produce</Link></li>
                    <li><Link to="#Prepared Food" className="no-underline">Prepared Food</Link></li>
                    <li><Link to="#Conned foods & Soups" className="no-underline">Conned foods & Soups</Link></li>
                    <li><Link to="#Bakery" className="no-underline">Bakery</Link></li>
                    <li><Link to="#Dairy & Eggs" className="no-underline">Dairy & Eggs</Link></li>
                    <li><Link to="#Frozen" className="no-underline">Frozen</Link></li>
                    <li><Link to="#Meat & Seafood" className="no-underline">Meat & Seafood</Link></li>
                    <li><Link to="#Produce" className="no-underline">Produce</Link></li>
                    <li><Link to="#Prepared Food" className="no-underline">Prepared Food</Link></li>
                    <li><Link to="#Conned foods & Soups" className="no-underline">Conned foods & Soups</Link></li>
                    <li><Link to="#Bakery" className="no-underline">Bakery</Link></li>
                    <li><Link to="#Dairy & Eggs" className="no-underline">Dairy & Eggs</Link></li>
                    <li><Link to="#Frozen" className="no-underline">Frozen</Link></li>
                    <li><Link to="#Meat & Seafood" className="no-underline">Meat & Seafood</Link></li>
                    <li><Link to="#Produce" className="no-underline">Produce</Link></li>
                    <li><Link to="#Prepared Food" className="no-underline">Prepared Food</Link></li>
                    <li><Link to="#Conned foods & Soups" className="no-underline">Conned foods & Soups</Link></li>
                    <li><Link to="#Bakery" className="no-underline">Bakery</Link></li>
                    <li><Link to="#Dairy & Eggs" className="no-underline">Dairy & Eggs</Link></li>
                    <li><Link to="#Frozen" className="no-underline">Frozen</Link></li>
                    <li><Link to="#Meat & Seafood" className="no-underline">Meat & Seafood</Link></li>
                </ul>
  
        </div>
        <div className='slider'>
                <div className='slider-inner'></div></div>
        
    </div>
    </BrowserRouter>
  )
}

export default Sidebar