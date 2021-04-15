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
import Clothing from "./components/Clothing"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar/Navbar"
import Item from "./components/Item"

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
            </Switch>
      </div>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

      </div>
    </Router>
  );
}

