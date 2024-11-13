import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, Header, Container } from 'semantic-ui-react';

function SignUpForm() {
  const navigate = useNavigate();
  const email = useRef('');
  const password = useRef('');
  const username = useRef('');

  const userId = uuidv4();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.current.value || !password.current.value || !username.current.value) {
      return alert('All fields are required!');
    }
    const user = {
      userId,
      email: email.current.value,
      password: password.current.value,
      username: username.current.value
    };

        username.current.value = '';
        email.current.value = '';
        password.current.value = '';
        

    try {
      const response = await axios.post('http://localhost:3000/users/signup', {
        user
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        username.current.value = '';
        email.current.value = '';
        password.current.value = '';
        navigate('/login');
      }else{
       alert(response.data.message);
       navigate('/login');
      }
    } catch (error) {
       alert(error.response?.data.message)
       navigate('/signup');
    }
  };

  return (
    <Container textAlign='center' style={{ height: '40vh',margin:'60px',display: 'flex', justifyContent: 'center', alignItems: 'center' ,border:'5px'}}>
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
  <Header as="h2" className="text-2xl font-bold mb-4">Sign Up</Header>
  <Form onSubmit={handleSubmit}  style={{ width: '400px', border: '1px solid black', borderRadius: '8px', padding: '20px' }}>
    <Form.Field>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        ref={username}
        id="username"
        required
        placeholder="Enter your username"
      />
    </Form.Field>
    
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
    
    <Button type="submit" primary>Sign Up</Button>
    <div>Don't have an account ? <Link to='/login'>Login</Link></div>
  </Form>
</div>
</Container>
  );
}

export default SignUpForm;
