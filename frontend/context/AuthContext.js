// context/AuthContext.js
"use client";

import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setUsername(localStorage.getItem('username'));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken(null);
    router.push('/'); 
  };

  return (
    <AuthContext.Provider value={{ token, username, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
