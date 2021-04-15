import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Item from "./Item"

import bag1 from './images/bags/bag1.jpg'
import bag2 from './images/bags/bag2.jpg'
import bag3 from './images/bags/bag3.jpg'
import bag4 from './images/bags/bag4.jpg'
import bag5 from './images/bags/bag5.jpg'
import bag6 from './images/bags/bag6.jpg'
import bag7 from './images/bags/bag7.jpg'
import bag8 from './images/bags/bag8.jpg'
import bag9 from './images/bags/bag9.jpg'

const items = [
  {
    id: 1,
    name: "Coach Shay L Shld Ld04",
    brand: "COACH",
    price: 269.00,
    img: bag1,
  },
  {
    id: 2,
    name: "Paige Zig Medium Satchel Bag",
    brand: "DKNY",
    price: 175.00,
    img: bag2,
  },
  {
    id: 3,
    name: "Grained Leather Voyager Tote Bag",
    brand: "MICHAEL MICHAEL KORS",
    price: 245.00,
    img: bag3,
  },
  {
    id: 4,
    name: "Cassie Shoulder Bag",
    brand: "COACH",
    price: 295.00,
    img: bag4,
  },
  {
    id: 5,
    name: "Divina Tote Bag",
    brand: "VALENTINO BAGS",
    price: 100.00,
    img: bag5,
  },
  {
    id: 6,
    name: "Frankie Cross Body Leather Bag",
    brand: "BIBA",
    price: 55.00,
    img: bag6,
  },
  {
    id: 7,
    name: "Lilie Chain Bag",
    brand: "MICHAEL KORS",
    price: 415.00,
    img: bag7,
  },
  {
    id: 8,
    name: "Vegan Leather Keaton Tote Bag",
    brand: "LAUREN BY RALPH LAUREN",
    price: 139.00,
    img: bag8,
  },
  {
    id: 9,
    name: "Fold Over Divina Bag",
    brand: "VALENTINO BAGS",
    price: 58.00,
    img: bag9,
  },
];


export default function Clothing() {
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsToBuy = () => items.map((item) => (
    <Link key={item.id} to={`/clothing/${item.id}`}>
      <div key={item.id} className="item" onClick={() => addToCart(item)}>
        <img src={item.img}></img>
        <p>{`${item.brand}`}</p>
        <p>{`${item.name}`}</p>
        <p>£{`${item.price.toFixed(2)}`}</p>
        <p>{`${cartTotal}`}</p>
      </div>
    </Link>
  ));


    return (
      <div className="clothing">
        <header className="clothing__header">
        </header>
        <aside className="clothing__aside">
          Sidebar
        </aside>
        <section className="products">
          {listItemsToBuy()}
        </section>
        <footer className="clothing__footer">
          <h2>footer</h2>
        </footer>
      </div>
    );
  };







  /*

  return (
      <div className="clothing">
        <header className="clothing__header">
        </header>
        <aside className="clothing__aside">
          Sidebar
        </aside>
        <section className="products">
          <div className="a__product">
            <img src={bag1} className="img" ></img>
            <p>CALVIN KLEIN</p>
            <p>price</p>
          </div>
          <div className="a__product">
            <img src={bag2} className="img"></img>
            <p></p>
            <p>price</p>
          </div>
          <div className="a__product">
            <img src={bag3} className="img"></img>
            <p>bag name</p>
            <p>price</p>
          </div>
          <div className="a__product">
            <img src={bag4} className="img"></img>
            <p>bag name</p>
            <p>price</p>
          </div>
          <div className="a__product">
            <img src={bag5} className="img"></img>
            <p>bag name</p>
            <p>price</p>
          </div>
          <div className="a__product">
            <img src={bag6} className="img"></img>
            <p>bag name</p>
            <p>price</p>
          </div>
          <div className="a__product">
            <img src={bag7} className="img"></img>
            <p>bag name</p>
            <p>price</p>
          </div>
          <div className="a__product">
            <img src={bag8} className="img"></img>
            <p>bag name</p>
            <p>price</p>
          </div>
          <div className="a__product">
            <img src={bag9} className="img"></img>
            <p>bag name</p>
            <p>price</p>
          </div>
        </section>
        <footer className="clothing__footer">
          <h2>footer</h2>
        </footer>
      </div>
    );
  };
  */
