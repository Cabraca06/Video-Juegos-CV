import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      Video Juegos CV
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
          <NavLink to="/Contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};
