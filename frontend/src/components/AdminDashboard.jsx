// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

const AdminDashboard = () => {
  const [items, setItems] = useState([
    { id: 1, category: 'Laptops', name: 'MacBook Pro 14-inch', description: 'Apple M1 Pro chip, 16GB RAM, 512GB SSD', price: 1999.99, image: 'https://example.com/macbook.jpg' },
    { id: 2, category: 'Phones', name: 'iPhone 14', description: '6.1-inch display, 128GB storage, 5G capable', price: 799.99, image: 'https://example.com/iphone14.jpg' },
    { id: 3, category: 'Books', name: 'The Pragmatic Programmer', description: 'A classic book on software engineering', price: 39.99, image: 'https://example.com/pragmatic.jpg' },
    { id: 4, category: 'Laptops', name: 'Dell XPS 13', description: 'Intel i7, 16GB RAM, 512GB SSD, FHD display', price: 1249.99, image: 'https://example.com/dellxps13.jpg' },
    { id: 5, category: 'Phones', name: 'Samsung Galaxy S22', description: '6.2-inch display, 128GB storage, 5G capable', price: 699.99, image: 'https://example.com/galaxyS22.jpg' },
    { id: 6, category: 'Books', name: 'Clean Code', description: 'A Handbook of Agile Software Craftsmanship', price: 29.99, image: 'https://example.com/cleancode.jpg' }
  ]);

  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    // Optionally fetch items from an API
    // fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddItem = async (item) => {
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      const newItem = await response.json();
      setItems((prevItems) => [...prevItems, newItem]);  // Update state
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      await fetch(`/api/items/${updatedItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });
      setItems((prevItems) => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item));
      setEditingItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await fetch(`/api/items/${id}`, { method: 'DELETE' });
      setItems((prevItems) => prevItems.filter(item => item.id !== id));  // Update state
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Panel</h2>
      <ItemForm 
        onSubmit={editingItem ? handleUpdateItem : handleAddItem} 
        initialData={editingItem} 
        isEditing={!!editingItem}  // Pass a flag to indicate editing
      />
      <ItemList 
        items={items} 
        onEdit={setEditingItem} 
        onDelete={handleDeleteItem} 
      />
    </div>
  );
};

export default AdminDashboard;
