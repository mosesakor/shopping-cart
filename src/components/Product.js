import React from "react";

const items = [
  {
    id: 1,
    name: "Coach Shay L Shld Ld04",
    brand: "COACH",
    price: 269.00,
    img: ""
  },
  {
    id: 2,
    name: "Paige Zig Medium Satchel Bag",
    brand: "DKNY",
    price: 175.00,
  },
  {
    id: 3,
    name: "Grained Leather Voyager Tote Bag",
    brand: "MICHAEL MICHAEL KORS",
    price: 245.00,
  },
  {
    id: 4,
    name: "Cassie Shoulder Bag",
    brand: "COACH",
    price: 295.00,
  },
  {
    id: 5,
    name: "Divina Tote Bag",
    brand: "VALENTINO BAGS",
    price: 100.00,
  },
  {
    id: 6,
    name: "Frankie Cross Body Leather Bag",
    brand: "BIBA",
    price: 55.00,
  },
  {
    id: 7,
    name: "Lilie Chain Bag",
    brand: "MICHAEL KORS",
    price: 415.00,
  },
  {
    id: 8,
    name: "Vegan Leather Keaton Tote Bag",
    brand: "LAUREN BY RALPH LAUREN",
    price: 139.00,
  },
  {
    id: 9,
    name: "Fold Over Divina Bag",
    brand: "VALENTINO BAGS",
    price: 58.00,
  },
];

export default function Shop () {
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
    <div key={item.id}>
      {`${item.name}: $${item.price}`}
      <button type="submit" onClick={() => addToCart(item)}>Add</button>
    </div>
  ));

  const listItemsInCart = () => items.map((item) => (
    <div key={item.id}>
      ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
      <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  ));

  return (
    <div>
      STORE
      <div>{listItemsToBuy()}</div>
      <div>CART</div>
      <div>{listItemsInCart()}</div>
      <div>Total: ${cartTotal}</div>
      <div>
        <button onClick={() => setCart([])}>Clear</button>
      </div>
    </div>
  );
};

