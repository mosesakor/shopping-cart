import React, {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NavBar() {

  const [open, setOpen] = useState(false);

  return (
        <nav>
          <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
          <h2 className="logo">Niyah Classics</h2>
          <ul className="nav-links" style={{display: open ? "none" : ""}}
              
          >
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
          <i className="fas fa-shopping-bag bag"></i>
        </nav>

    
  );
}
