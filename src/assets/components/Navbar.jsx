import React, { useState } from "react";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../../assets/components/pages/Compras/CartContext";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();

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
        <li>
          <NavLink to="/">LOGIN</NavLink>
        </li>
        <li>
        <NavLink to="/Carrito" className="cart-link">
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
