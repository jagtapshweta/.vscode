// Navbar.js
import React from 'react';
import '../css/Navbar.css';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();

    const onSignClick=(e)=>{
        navigate('/signup')
    }

    const onLoginClick=(e)=>{
        navigate('/login')
    }

    const onLogoutClick=(e)=>{
        deleteUser();
    }
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">ShopLogo</Link>
      </div>
      
      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
        <button className="search-button">🔍</button>
      </div>
      
      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
      {/* Login and Signup Buttons */}
      <div className="navbar-buttons">
        <button  onClick={onLoginClick} className="btn-login">Login</button>
        <button  onClick={onSignClick} className="btn-signup">Sign Up</button>
        <button  onClick={onLogoutClick} className="btn-logout">Logout</button>
      </div>

       {/* Icons for Profile and Cart */}
      <div className="navbar-icons">
        <Link to="/profile" className="icon-link">🤵🏻</Link>
        <Link to="/cart" className="icon-link">🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;
