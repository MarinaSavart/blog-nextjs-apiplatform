'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';

function PostForm({ categories, initialData = {}, onSubmit }) {

  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [selectedCategory, setSelectedCategory] = useState(initialData.category || '');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, content, category: selectedCategory });
  }

  return (
    <Container className='mt-4'>
        <Form onSubmit={handleSubmit} className='row d-flex justify-content-center'>
            <FormGroup className='my-2' as={Col} md="6">
                <FormLabel>Title</FormLabel>
                <FormControl 
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}/>
            </FormGroup>

            <FormGroup className='my-2' as={Col} md="6">
                <FormLabel>Category</FormLabel>
                <FormSelect
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      // console.log(category.id)
                        <option key={category.id} value={category['@id']}>
                            {category.name}
                        </option>
                    ))}
                </FormSelect>
            </FormGroup>

            <FormGroup className='my-2' as={Col} md="12">
                <FormLabel>Content</FormLabel>
                <textarea 
                  className="form-control" 
                  value={content}
                  onChange={(e) => setContent(e.target.value)} rows="10"></textarea>
            </FormGroup>

        <Button className='mt-4 w-25' type="submit">Submit</Button>
        </Form>
    </Container>
  );
}

export default PostForm;
