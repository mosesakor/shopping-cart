import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Clothing from "./components/Clothing"

export default function App() {
    return (
        <div>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/product">
                            <Product />
                        </Route>
                        <Route exact path="/About">
                            <About />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/clothing">
                            <Clothing />
                        </Route> 
                    </Switch>
                </div>
            </Router>
        </div>
        
    );
}
