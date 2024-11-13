// Login.js
import React, { useState } from 'react';
import '../css/Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
            try {
            const response = await axios.post('http://localhost:3000/users/login', {
                email: formData.email,
                password: formData.password,
            }, {
                headers: {
                'Content-Type': 'application/json',
                }
            });

    
            if (response.status === 200) {
                const { token } = response.data;
                setFormData({
                    email: '',
                    password: '',
                })
                localStorage.setItem('token', token);
                alert('Logged in successfully..!')
                navigate('/')    
            }
            } catch (error) {
                setErrors(error.response?.data)
            }
    
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
