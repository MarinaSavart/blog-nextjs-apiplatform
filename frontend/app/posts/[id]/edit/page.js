'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import apiClient from '@/utils/axiosConfig'; // Assurez-vous que le chemin est correct
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/app/components/Header';
import PostForm from '@/app/components/PostForm';

function EditPostPage({ params }) {
  const router = useRouter();
  const id = params.id;
  const [postData, setPostData] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchPostAndCategories() {
      try {
        const [postResponse, categoriesResponse] = await Promise.all([
          apiClient.get(`/posts/${id}`),
          apiClient.get('/categories'),
        ]);
        setPostData(postResponse.data);
        setCategories(categoriesResponse.data['hydra:member']);
      } catch (error) {
        console.error('Error fetching post and categories:', error);
      }
    }

    if (id) {
      fetchPostAndCategories();
    }
  }, [id]);

  async function handleUpdate(updatedData) {
    try {
      await apiClient.put(`/posts/${id}`, updatedData);
      router.push(`/posts/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }

  if (!postData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='mt-4'>
      <Header name={"Update your Post"} />
      <PostForm         
        categories={categories}
        initialData={postData}
        onSubmit={handleUpdate}/>
    </div>
  );
}

export default EditPostPage;

