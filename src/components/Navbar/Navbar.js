import React, {useState, useEffect} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import clothing from "../Clothing"

export default function NavBar() {

  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };



  return (
        <nav className="navigation">
          <i onClick={handleToggle} className="fas fa-bars burger"></i>
          <div className="bag_container">
            <i className="fas fa-shopping-bag bag"></i>
            <p>{}</p>
          </div>
          <h2 className="logo">Niyah Classics</h2>
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
              <Link to="/clothing">Clothing</Link>
            </li>
          </ul>
        </nav>
  );
}
