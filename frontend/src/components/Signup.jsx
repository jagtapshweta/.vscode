// Signup.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/Auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

   const userId = uuidv4();
   const navigate=useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit =async (e) => {
    e.preventDefault();
    if (validate()) {
      const user = {
        userId,
        email: formData.email,
        password: formData.password,
        username: formData.username
      };

      setFormData({
        username: '',
        email: '',
        password: '',
      })
          
      try {
        const response = await axios.post('http://localhost:3000/users/signup', {
          user
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });


        if (response.status === 200) {
          navigate('/login');
        }
      } catch (error) {
        setErrors(error.response.data)
        navigate('/signup');
      }
        
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='element'>
          <label className='label'>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'error-border' : ''}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        
        <div className='element'>
          <label className='label'>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error-border' : ''}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className='element'>
          <label className='label'>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error-border' : ''}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
