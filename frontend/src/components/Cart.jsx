// Cart.js
import React from 'react';
import CartItem from './CartItem';
import '../css/Cart.css';

const Cart = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              onUpdateQuantity={onUpdateQuantity} 
              onRemoveItem={onRemoveItem} 
            />
          ))}
          <div className="cart__total">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="cart__checkout">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
