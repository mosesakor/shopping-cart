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
      <div>
        <nav>
          <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
          <div className="logo">Niyah Classics</div>

          <ul className="nav-links" 
              
          >
           <li className="a_list">
             <Link to="/">Home</Link>
           </li>
           <hr />
            <li className="a_list">
              <Link to="/product">Product</Link>
            </li>
            <hr/>
            <li className="a_list">
              <Link to="/about">About</Link>
            </li>
            <hr/>
            <li className="a_list">
              <Link to="/contact">Contact</Link>
            </li>
            <hr/>
            <li className="a_list"
            >
              <Link to="/clothing">Clothing</Link>
            </li>
            <hr/>
          </ul>
        </nav>
      </div>
    
  );
}



// 