// ProductCard.js
import React from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, price, image, description } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
      </div>
      <button onClick={() => onAddToCart(id)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
