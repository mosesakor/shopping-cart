import React, {useState, useEffect, useContext} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./Navbar.css";

import clothing from "../Bags"

import {CartContext, CartProvider} from "../CartContext"

export default function NavBar() {

  const [open, setOpen] = useState(true);

  const [cart, setCart] = useContext(CartContext);

  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const cartItems = cart.length

  const handleToggle = () => {
    setOpen(!open);
  };



  return (
        <nav className="navigation">
          <div className="grid_1">
            <i onClick={handleToggle} className="fas fa-bars burger"></i>
          </div>

          <div className="grid_2">
            <h5 className="logo">Niyah Classics</h5>
          </div>

          <div className="grid_3">
            <Link to="/cart" className="cart">
              <div className="bag_container">
                <i className="fas fa-shopping-bag bag"></i>
                <p className="cart_total">£{cartTotal}</p>
                <p className="total_items">{cartItems}</p>
              </div>
            </Link>
          </div>
          
          <ul className={open ? "nav-links" : "nav-links toggle"}>
           <li className="a_list">
             <Link to="/">Home</Link>
           </li>
            <li className="a_list">
              <Link to="/product">Product</Link>
            </li>
            <li className="a_list">
              <Link to="/about">About</Link>
            </li>
            <li className="a_list">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="a_list">
              <Link to="/clothing">Bags</Link>
            </li>
          </ul>
        </nav>
  );
}
