'use client';

import Header from '@/app/components/Header';
import apiClient from '@/utils/axiosConfig';
import { useRouter } from 'next/navigation'; // Importation pour la redirection après connexion
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


function PostPage({ params }) {
  const id = params.id;
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await apiClient.get(`/posts/${id}`);
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    }

    if (id) {
      fetchPost();
    }
  }, [id]);
  

  if (!postData) {
    return <div>Loading...</div>;
  }


  console.log(postData.category.name);
  
  return (
    <Container>
      <Header name={postData.title} />
      <h4 className='text-center'>Category: {postData.category.name}</h4>
      <p>{postData.content}</p>
    </Container>
  );
}

export default PostPage;
