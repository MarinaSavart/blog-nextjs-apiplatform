"use client";

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import AuthContext from '../context/AuthContext';
import { Button, Container, Form, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";
import Header from "../components/Header";
import apiClient from '@/utils/axiosConfig';
import ListItems from '../components/ListItems';

export default function Categories() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    const handleCreateCategory = async (e) => {
        e.preventDefault();
        try {
          await apiClient.post('/categories', { name });
          router.push('/'); // Rediriger vers la liste des catégories après création réussie
          setTimeout(() => router.push('/categories'), 100);
        } catch (error) {
          console.error('Error creating category:', error);
        }
    };

    async function handleDelete(id) {
        try {
          await apiClient.delete(`/categories/${id}`);
          router.push('/');
        } catch (error) {
          console.error('Error deleting post:', error);
        }
    }
  

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await apiClient.get(`/categories`);
                setData(response.data['hydra:member']);
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        }
  
        fetchCategories();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return(
        <Container>
            <Header name={"Category"}/>
            <Form onSubmit={handleCreateCategory} className='mt-5 row justify-content-center'>
                <FormLabel className='col-12 text-center'>Add New Category Name</FormLabel>
                <InputGroup className="mb-4">
                    <FormControl 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <Button type="submit" className="input-group-prepend ">Ajouter</Button>
                </InputGroup>
            </Form>
            <Row>
                {data.length === 0 && (
                    <li className="text-slate-50 text-md">Pas d'items ...</li>
                )}
                {data.length > 0 &&
                    data.map(item => (
                        <ListItems key={item.id} itemData={item} handleDelete={handleDelete} />
                    ))
                }
            </Row>
        </Container>
    );
}