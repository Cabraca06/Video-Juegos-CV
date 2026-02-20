import React from 'react';
import '../style/navAdmin.css';
import { useAuth } from '../../../../../context/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavAdmin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className='nav-admin'>
      <ul>
        <h2 className="nav-welcome">Dashboard</h2>
        <li>
          <NavLink to="/admin" className={({ isActive }) => isActive ? 'desactivate' : undefined}>
            Panel de administración
          </NavLink>
          </li>
        <li>
          <NavLink to="/admin/pedido">
            Pedidos
          </NavLink>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-btn">
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavAdmin;

