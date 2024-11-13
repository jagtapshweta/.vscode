// ItemList.js
import React from 'react';
import '../css/AdminDashboard.css'

const ItemList = ({ items, onEdit, onDelete }) => {
    console.log(items)
  return (
    <div className="item-list">
      {items.length && items.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => onEdit(item)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
