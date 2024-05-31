
import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import apiClient from '@/utils/axiosConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Nav, NavItem, NavLink } from 'react-bootstrap';



export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <Nav>
        <NavItem>
          <NavLink href={`/`}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`/login`}>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={logout}>Logout</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`/posts/new`}>Add Post</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`/categories`}>Categories</NavLink>
        </NavItem>
      </Nav>
    </>
  );
}