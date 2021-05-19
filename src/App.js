import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home"
import About from "./components/About"
import Product from "./components/Product"
import Clothing from "./components/Bags"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar/Navbar"
import Item from "./components/Item"
import { CartProvider } from "./components/CartContext";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <CartProvider>
        <div className="full__window">
            <Navbar />
            <div className="test">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/product">
                  <Product />
                </Route>
                <Route path="/clothing/:id">
                  <Item />
                </Route>
                <Route path="/clothing">
                  <Clothing />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
              </Switch>
            </div>
        </div>
      </CartProvider>
      
    </Router>
  );
}

