import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { Form, Button, Header,Container } from 'semantic-ui-react';

function LoginForm() {
  const navigate = useNavigate();
  const email = useRef('');
  const password = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.current.value || !password.current.value) {
      return alert('All fields are required!');
    }

    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email: email.current.value,
        password: password.current.value,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        
        email.current.value = '';
        password.current.value = '';
        navigate('/addTask');
      }
    } catch (error) {
      const errorMessage = error.response?.data.message || "An error occurred. Please try again.";
      return alert(errorMessage);
    }
  };

  return (
    <Container textAlign='center' style={{ height: '40vh',margin:'60px',display: 'flex', justifyContent: 'center', alignItems: 'center' ,border:'5px'}}>
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6" >
  <Header as="h2" className="text-2xl font-bold mb-4">Login</Header>
  <Form onSubmit={handleSubmit}  style={{ width: '400px', border: '1px solid black', borderRadius: '8px', padding: '20px' }}>
    <Form.Field>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        ref={email}
        id="email"
        required
        placeholder="Enter your email"
      />
    </Form.Field>

    <Form.Field>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        ref={password}
        id="password"
        required
        placeholder="Enter your password"
      />
    </Form.Field>

    <Button type="submit" primary>Login</Button>

    <div className="mt-4">
      Have an account ? <Link to="/signup">Sign-up</Link>
    </div>
  </Form> 
</div>
</Container>
  );
}

export default LoginForm;
