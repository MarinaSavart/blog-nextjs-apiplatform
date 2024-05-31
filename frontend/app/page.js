"use client";

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import AuthContext from '../context/AuthContext';
import apiClient from '../utils/axiosConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Posts from './posts/page';
import Header from './components/Header';
import Cards from './components/Cards';

async function fetchData(token) {
  try {
    const response = await apiClient.get('/posts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data['hydra:member']; // Extraire uniquement les éléments pertinents
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}


export default function Home() {

  const router = useRouter(); 
  const { token, username } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
       
      return router.push('/login');
    }

    if (token) {
      fetchData(token).then(setData);
    }
  }, [token]);

  return (
    <Container fluid>
      <Header name={"Blog"}/>
      <Row>
        {data.map((item) => (
          <Cards key={item.id} data={item} username={username}/>
        ))}
      </Row>
    </Container>
  );
}
