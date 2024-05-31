'use client';

import { useState } from 'react';
import apiClient from '../../utils/axiosConfig';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';
import Header from '../components/Header';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post('/login', { username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', username);
      router.push('/categories');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container>
      <Header name={'Login'} username={username} />
      <Form onSubmit={handleLogin} className="">
        <Row className="my-5 justify-content-center">
          <FormGroup as={Col} md="4">
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup as={Col} md="4">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Row>
        <Row className="justify-content-center">
          <Button className="m-4 w-25" type="submit">
            Login
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
