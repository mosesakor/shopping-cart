import React, { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Item from "./Item"
import {CartContext, CartProvider} from "./CartContext"

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
  const [cart, setCart] = useContext(CartContext);
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
    <Link key={item.id} to={`/clothing/${item.id}`} className="an_item">
      <div key={item.id} className="item">
        <img src={item.img}></img>
        <div className="brand_name">
          <p><b>{`${item.brand}`}</b></p>
          <p>{`${item.name}`}</p>
        </div>
        <p>£{`${item.price.toFixed(2)}`}</p>
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