import React, {useContext, useEffect} from "react";
import {CartContext} from "./CartContext";
import { useParams } from "react-router-dom"
import { useState } from "react"
import items from "./Items"
import "./Cart.css"

import bag1 from './images/bags/bag1.jpg'
import bag2 from './images/bags/bag2.jpg'
import bag3 from './images/bags/bag3.jpg'
import bag4 from './images/bags/bag4.jpg'
import bag5 from './images/bags/bag5.jpg'
import bag6 from './images/bags/bag6.jpg'
import bag7 from './images/bags/bag7.jpg'
import bag8 from './images/bags/bag8.jpg'
import bag9 from './images/bags/bag9.jpg'


function CartItem() {
  const [cart, setCart] = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(1);
  
  

}

export default function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const userCart = () => cart.map((item) => (

    function TheCart() {
      const [count, setCount] = useState(1);

      return (
        <div className="cart_container">
          <div className="cart_image">
            <img src={items[item.id].img}></img>
          </div>
        <div className="cart_info">
          <p></p>
          <p></p>
          <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <input type="text" value={count} onChange={e => setCount(Number(e.target.value))}></input>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>          
    </div>
    )
    }

    
));


  console.log(cart)

  return (
    <div>
      <div>
        {userCart()}
      </div>
      <span>items in cart : {cart.length}</span>
      <br />
      <span>total price : {totalPrice}</span>
      <div className="items_container">
      </div>
    </div>
  )
}


/*

<div className="cart_container">
            <div className="cart_image">
              <img src={bag1}></img>
            </div>
            <div className="cart_info">
              <p>item name</p>
              <p>price</p>
              <div className="item_total">
                <button onClick={() => setCount(count - 1)}>-</button>
                <input type="text" value={count} onChange={e => setCount(Number(e.target.value))}></input>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
            </div>          
      </div>
    */