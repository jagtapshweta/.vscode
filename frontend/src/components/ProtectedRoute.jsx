// ProtectedRoute.js
import React from 'react';
import { Route, Navigate,Outlet } from 'react-router-dom';

// Replace this with your actual authentication function
const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user && user.loggedIn;
};

export const ProtectedRoute = ({isAuthenticated}) => {
  return (
     isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
  );
};


// Admin-specific Protected Route
export const AdminRoute = ({ component: Component, ...rest }) => 
   isAuthenticated ? <Outlet /> : <Navigate to="/login" replace /> ;
