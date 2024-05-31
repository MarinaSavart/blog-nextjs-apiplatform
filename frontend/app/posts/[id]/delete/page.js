'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import apiClient from '@/utils/axiosConfig';

function DeletePostPage({ params }) {
  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    async function deletePost() {
      try {
        await apiClient.delete(`/posts/${id}`);
        router.push('/');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }

    if (id) {
      deletePost();
    }
  }, [id]);

  return (
    <div>
      <h1>Deleting Post...</h1>
    </div>
  );
}

export default DeletePostPage;
