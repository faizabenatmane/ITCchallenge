import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
   
  </nav>
);

export default Navbar;
