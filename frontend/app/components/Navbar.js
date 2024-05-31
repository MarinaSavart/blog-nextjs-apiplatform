import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';

export default function Navbar() {
  const router = useRouter();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      return router.push('/login');
    }
  }, []);

  return (
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
  );
}
