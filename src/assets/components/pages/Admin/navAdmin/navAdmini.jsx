import React, { useState } from 'react';
import '../style/navAdmin.css';
import { useAuth } from '../../../../../context/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavAdmin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className='nav-admin'>
      <h2 className="nav-welcome">Dashboard</h2>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
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
          <NavLink to="/admin/inventario">
            Inventario
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
