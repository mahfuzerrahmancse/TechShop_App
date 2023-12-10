import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
// import { Products } from './../pages/Products';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        TechShop
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about"> About Us </NavLink>
        </li>
        
        <li>
          <NavLink to="/contact"> Contact Us </NavLink>
        </li>
        <li>
          <NavLink to="/services"> Services  </NavLink>
        </li>
        <li>
          <NavLink to="/products"> Products  </NavLink>
        </li>
      </ul>
    </nav>
  );
};