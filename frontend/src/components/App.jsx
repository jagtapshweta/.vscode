import React, { useEffect,useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ProtectedRoute,AdminRoute } from './ProtectedRoute';
import Navbar from './Navbar'
import Footer from './Footer';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';
import Cart from './Cart'
import ProductList from './ProductList';
import AdminDashboard from './AdminDashboard';

const sampleProducts = [
  { id: 1, name: 'Laptop 1', price: 1200, image: 'laptop1.jpg', description: 'High-performance laptop' },
  { id: 2, name: 'Phone 1', price: 800, image: 'phone1.jpg', description: 'Latest smartphone' },
  { id: 3, name: 'Book 1', price: 15, image: 'book1.jpg', description: 'Bestselling book' },
  { id: 1, name: 'Laptop 1', price: 1200, image: 'laptop1.jpg', description: 'High-performance laptop' },
  { id: 2, name: 'Phone 1', price: 800, image: 'phone1.jpg', description: 'Latest smartphone' },
  { id: 3, name: 'Book 1', price: 15, image: 'book1.jpg', description: 'Bestselling book' },
  { id: 1, name: 'Laptop 1', price: 1200, image: 'laptop1.jpg', description: 'High-performance laptop' },
  { id: 2, name: 'Phone 1', price: 800, image: 'phone1.jpg', description: 'Latest smartphone' },
  { id: 3, name: 'Book 1', price: 15, image: 'book1.jpg', description: 'Bestselling book' },
  // Add more products here
];

import { useState } from 'react';
function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 29.99, quantity: 1, image: 'item1.jpg' },
    { id: 2, name: 'Item 2', price: 49.99, quantity: 2, image: 'item2.jpg' }
  ]);

   const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    const product = sampleProducts.find((product) => product.id === id);
    setCart([...cart, product]);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent negative quantities
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route element={<ProtectedRoute isAuthenticated={true} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path='/' element={<ProductList products={sampleProducts} onAddToCart={handleAddToCart} />}/>
          <Route path='cart' element={<Cart items={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />}></Route>
        </Route>
        <Route element={<AdminRoute isAuthenticated={true} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

