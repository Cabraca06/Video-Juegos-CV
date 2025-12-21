import React, { useState } from "react";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Ajusta la ruta si es necesario
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout();
      navigate('/login'); // Opcional: redirige al login tras cerrar sesión
  };
  return (
    <nav>
      <Link to="/Home" className="title">  
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>

      <li> {user && <li className="nav-welcome">Hola, {user.name}</li>} </li>    
        <li>
          <NavLink to="/Home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/About">ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/Juegos">JUEGOS</NavLink>
        </li>
        <li>
          <NavLink to="/Consolas">CONSOLAS</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">CONTACT</NavLink>
        </li>
        <button onClick={handleLogout} className="logout-btn">
                Cerrar Sesión
            </button>
        <li>
        <NavLink to="/Cart" className="cart-link">
          <FontAwesomeIcon icon={faCartShopping} />
          {getCartItemCount() > 0 && (
            <span className="cart-item-count">{getCartItemCount()}</span>
          )}
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};
