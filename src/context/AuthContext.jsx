import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Revisa sessionStorage para mantener el estado de autenticación si se recarga la página
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isAuthenticated') === 'true');
  const [user, setUser] = useState(() => JSON.parse(sessionStorage.getItem('user')) || null);

  const login = (userData) => {
    sessionStorage.setItem('isAuthenticated', 'true'); // Guarda el estado en la sesión
    sessionStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem('isAuthenticated'); // Limpia el estado de la sesión
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
