import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from "./App";
import Product from './components/Product';
import NavBar from "./components/Navbar/Navbar";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/product" component={Product} />
      </Switch>
    </Router>
  );
};

export default Routes;
