// CartItem.js
import React from 'react';
import '../css/CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item__image" />
      <div className="cart-item__details">
        <h4>{item.name}</h4>
        <p>Price: ${item.price.toFixed(2)}</p>
        <div className="cart-item__controls">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => onRemoveItem(item.id)} className="cart-item__remove">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
