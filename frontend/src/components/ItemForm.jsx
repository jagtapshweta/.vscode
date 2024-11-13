// In ItemForm.jsx
import React, { useState, useEffect } from 'react';
import '../css/AdminDashboard.css'

const ItemForm = ({ onSubmit, initialData, isEditing }) => {
  const [itemData, setItemData] = useState({
    category: '',
    name: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    if (initialData) setItemData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemData);
    setItemData({ category: '', name: '', description: '', price: '', image: '' });
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input name="name" value={itemData.name} onChange={handleChange} placeholder="Item Name" required />
      <textarea name="description" value={itemData.description} onChange={handleChange} placeholder="Description" required />
      <input name="price" type="number" value={itemData.price} onChange={handleChange} placeholder="Price" required />
      <input name="image" value={itemData.image} onChange={handleChange} placeholder="Image URL" />
      <div className="button-row">
        <button type="submit" className="submit">{isEditing ? 'Update Item' : 'Add Item'}</button>
      </div>
    </form>
  );
};

export default ItemForm;
