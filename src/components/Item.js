import React from "react";
import ReactDom from "react-dom";
import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import "./Item.css"
import items from "./Items"
import clothing from "./Bags"
import { CartContext } from "./CartContext";

export default function Item (props) {

    const [cart, setCart] = useContext(CartContext)

    const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
    

    const params = useParams();
    const id = params.id - 1

    useEffect(() => {
        // Fetch single product here
    }, [params.slug]);

    console.log(items[id])

    return (
        <div className="product_container">
            <div className="product_image">
                <img src={items[id].img}></img>
            </div>
            <div className="product_description">
                <p className="product_brand">{items[id].brand}</p>
                <p className="product_name">{items[id].name}</p>
                <p className="product_name">£{items[id].price}.00</p>
                <button className="product_button" onClick={() => addToCart(items[id])}>ADD TO CART</button>
            </div>
        </div>
    );

};
